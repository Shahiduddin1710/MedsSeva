import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

function getPeriodRange(period: string, now: Date): { start: Date; end: Date; prevStart: Date; prevEnd: Date; chartDays: number } {
  const end = new Date(now);
  let start: Date;
  let prevStart: Date;
  let prevEnd: Date;
  let chartDays: number;

  switch (period) {
    case 'monthly':
      start = new Date(now.getFullYear(), now.getMonth(), 1);
      prevStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      prevEnd = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59);
      chartDays = 30;
      break;
    case 'quarterly':
      start = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
      prevStart = new Date(now.getTime() - 180 * 24 * 60 * 60 * 1000);
      prevEnd = new Date(start.getTime() - 1);
      chartDays = 90;
      break;
    case 'yearly':
      start = new Date(now.getFullYear(), 0, 1);
      prevStart = new Date(now.getFullYear() - 1, 0, 1);
      prevEnd = new Date(now.getFullYear() - 1, 11, 31, 23, 59, 59);
      chartDays = 365;
      break;
    default:
      start = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      prevStart = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
      prevEnd = new Date(start.getTime() - 1);
      chartDays = 7;
  }

  return { start, end, prevStart, prevEnd, chartDays };
}

function calcTrend(current: number, previous: number): number | null {
  if (previous === 0) return null;
  return Math.round(((current - previous) / previous) * 1000) / 10;
}

export const getDashboardAnalytics = async (req: Request, res: Response) => {
  try {
    const now = new Date();
    const period = (req.query.period as string) || 'weekly';
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const todayEnd = new Date(todayStart.getTime() + 24 * 60 * 60 * 1000);
    const yesterdayStart = new Date(todayStart.getTime() - 24 * 60 * 60 * 1000);

    const { start: periodStart, end: periodEnd, prevStart, prevEnd, chartDays } = getPeriodRange(period, now);

    const [
      todayBookings,
      yesterdayBookings,
      allBookings,
      periodBookings,
      prevPeriodBookings,
      allReports,
      periodReports,
      prevPeriodReports,
      allBranches,
      topTests,
      bookingsByStatus,
      paymentBreakdown,
      revenueByPeriod,
      branchStats,
      recentSlaData,
      categories,
      recentActivity,
    ] = await Promise.all([
      prisma.booking.findMany({
        where: { createdAt: { gte: todayStart, lt: todayEnd } },
        select: { totalPaid: true, paymentStatus: true, collectionMode: true, status: true },
      }),

      prisma.booking.findMany({
        where: { createdAt: { gte: yesterdayStart, lt: todayStart } },
        select: { totalPaid: true, paymentStatus: true, status: true },
      }),

      prisma.booking.findMany({
        select: {
          id: true,
          totalPaid: true,
          paymentStatus: true,
          collectionMode: true,
          status: true,
          createdAt: true,
          sampleCollectedAt: true,
          branchId: true,
          report: {
            select: { status: true, reportedDate: true, verifiedAt: true, doctorVerifiedAt: true },
          },
        },
      }),

      prisma.booking.findMany({
        where: { createdAt: { gte: periodStart, lte: periodEnd } },
        select: { totalPaid: true, paymentStatus: true, status: true, createdAt: true },
      }),

      prisma.booking.findMany({
        where: { createdAt: { gte: prevStart, lte: prevEnd } },
        select: { totalPaid: true, paymentStatus: true, status: true },
      }),

      prisma.report.findMany({
        select: {
          status: true,
          reportedDate: true,
          verifiedAt: true,
          doctorVerifiedAt: true,
          booking: { select: { sampleCollectedAt: true, createdAt: true } },
        },
      }),

      prisma.report.findMany({
        where: { reportedDate: { gte: periodStart, lte: periodEnd } },
        select: { status: true },
      }),

      prisma.report.findMany({
        where: { reportedDate: { gte: prevStart, lte: prevEnd } },
        select: { status: true },
      }),

      prisma.branch.findMany({
        where: { isActive: true },
        select: { id: true, name: true },
      }),

      prisma.bookingTest.groupBy({
        by: ['testId'],
        _count: { testId: true },
        orderBy: { _count: { testId: 'desc' } },
        take: 5,
      }),

      prisma.booking.groupBy({
        by: ['status'],
        _count: { status: true },
      }),

      prisma.booking.groupBy({
        by: ['paymentMode'],
        where: { paymentStatus: 'SUCCESS' },
        _count: { paymentMode: true },
        _sum: { totalPaid: true },
      }),

      prisma.booking.findMany({
        where: {
          createdAt: { gte: periodStart, lte: periodEnd },
          paymentStatus: 'SUCCESS',
        },
        select: { totalPaid: true, createdAt: true },
      }),

      prisma.booking.groupBy({
        by: ['branchId'],
        _count: { branchId: true },
        _sum: { totalPaid: true },
      }),

      prisma.report.findMany({
        where: { reportedDate: { gte: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000) } },
        select: {
          status: true,
          reportedDate: true,
          verifiedAt: true,
          booking: { select: { sampleCollectedAt: true, createdAt: true, scheduledDate: true } },
        },
      }),

      prisma.testCategory.findMany({
        where: { isActive: true },
        select: {
          id: true,
          name: true,
          tests: {
            select: {
              bookings: {
                select: { bookingId: true },
              },
            },
          },
        },
        orderBy: { displayOrder: 'asc' },
      }),

      prisma.auditLog.findMany({
        orderBy: { createdAt: 'desc' },
        take: 15,
        include: {
          user: { select: { id: true, name: true, role: true } },
        },
      }),
    ]);

    const todayRevenue = todayBookings.filter(b => b.paymentStatus === 'SUCCESS').reduce((s, b) => s + b.totalPaid, 0);
    const yesterdayRevenue = yesterdayBookings.filter(b => b.paymentStatus === 'SUCCESS').reduce((s, b) => s + b.totalPaid, 0);
    const totalRevenue = allBookings.filter(b => b.paymentStatus === 'SUCCESS').reduce((s, b) => s + b.totalPaid, 0);
    const totalRefunds = allBookings.filter(b => b.paymentStatus === 'REFUNDED').reduce((s, b) => s + b.totalPaid, 0);
    const pendingPayments = allBookings.filter(b => b.paymentStatus === 'PENDING').reduce((s, b) => s + b.totalPaid, 0);

    const periodRevenue = periodBookings.filter(b => b.paymentStatus === 'SUCCESS').reduce((s, b) => s + b.totalPaid, 0);
    const prevPeriodRevenue = prevPeriodBookings.filter(b => b.paymentStatus === 'SUCCESS').reduce((s, b) => s + b.totalPaid, 0);

    const periodBookingCount = periodBookings.length;
    const prevPeriodBookingCount = prevPeriodBookings.length;

    const periodCompletedReports = periodReports.filter(r => r.status === 'RELEASED' || r.status === 'APPROVED').length;
    const prevPeriodCompletedReports = prevPeriodReports.filter(r => r.status === 'RELEASED' || r.status === 'APPROVED').length;

    const todayPendingCount = todayBookings.filter(b => b.status === 'PENDING' || b.status === 'WAITING_FOR_ASSIGNMENT').length;
    const yesterdayPendingCount = yesterdayBookings.filter(b => b.status === 'PENDING' || b.status === 'WAITING_FOR_ASSIGNMENT').length;

    const completedReports = allReports.filter(r => r.status === 'RELEASED' || r.status === 'APPROVED').length;
    const pendingReports = allReports.filter(r => r.status === 'DRAFT' || r.status === 'UNDER_REVIEW').length;
    const pendingSampleCollections = allBookings.filter(b => ['CONFIRMED', 'ASSIGNED', 'ACCEPTED', 'ON_THE_WAY', 'REACHED_LOCATION'].includes(b.status)).length;
    const homeCollectionBookings = allBookings.filter(b => b.collectionMode === 'HOME').length;
    const labVisitBookings = allBookings.filter(b => b.collectionMode === 'LAB').length;
    const activeBookings = allBookings.filter(b => !['COMPLETED', 'CANCELLED'].includes(b.status)).length;

    const tatValues: number[] = [];
    const doctorApprovalTimes: number[] = [];

    for (const report of allReports) {
      const collectedAt = report.booking?.sampleCollectedAt;
      const createdAt = report.booking?.createdAt;
      const startTime = collectedAt || createdAt;
      if (startTime && report.reportedDate) {
        const tat = (new Date(report.reportedDate).getTime() - new Date(startTime).getTime()) / (1000 * 60 * 60);
        if (tat > 0 && tat < 168) tatValues.push(tat);
      }
      if (report.reportedDate && report.doctorVerifiedAt) {
        const approvalTime = (new Date(report.doctorVerifiedAt).getTime() - new Date(report.reportedDate).getTime()) / (1000 * 60);
        if (approvalTime > 0) doctorApprovalTimes.push(approvalTime);
      }
    }

    const avgTat = tatValues.length > 0 ? tatValues.reduce((a, b) => a + b, 0) / tatValues.length : 0;
    const medianTat = tatValues.length > 0 ? [...tatValues].sort((a, b) => a - b)[Math.floor(tatValues.length / 2)] : 0;
    const fastestTat = tatValues.length > 0 ? Math.min(...tatValues) : 0;
    const slowestTat = tatValues.length > 0 ? Math.max(...tatValues) : 0;
    const avgDoctorApproval = doctorApprovalTimes.length > 0 ? doctorApprovalTimes.reduce((a, b) => a + b, 0) / doctorApprovalTimes.length : 0;

    const SLA_BENCHMARK_HOURS = 24;
    let withinSla = 0;
    let nearSla = 0;
    let breachedSla = 0;
    const delays: number[] = [];

    for (const report of recentSlaData) {
      const start = report.booking?.sampleCollectedAt || report.booking?.createdAt;
      if (!start || !report.reportedDate) continue;
      const tat = (new Date(report.reportedDate).getTime() - new Date(start).getTime()) / (1000 * 60 * 60);
      if (tat <= SLA_BENCHMARK_HOURS * 0.9) withinSla++;
      else if (tat <= SLA_BENCHMARK_HOURS) nearSla++;
      else {
        breachedSla++;
        delays.push(tat - SLA_BENCHMARK_HOURS);
      }
    }

    const totalSlaReports = withinSla + nearSla + breachedSla;
    const slaCompliance = totalSlaReports > 0 ? Math.round((withinSla / totalSlaReports) * 100 * 10) / 10 : 100;
    const avgDelay = delays.length > 0 ? delays.reduce((a, b) => a + b, 0) / delays.length : 0;
    const worstDelay = delays.length > 0 ? Math.max(...delays) : 0;

    const revenueChartData: Record<string, number> = {};
    for (let i = chartDays - 1; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      let label: string;
      if (chartDays <= 7) {
        label = d.toLocaleDateString('en-IN', { weekday: 'short' });
      } else if (chartDays <= 31) {
        label = d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
      } else if (chartDays <= 90) {
        if (d.getDay() === 0) label = d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
        else continue;
      } else {
        if (d.getDate() === 1) label = d.toLocaleDateString('en-IN', { month: 'short', year: '2-digit' });
        else continue;
      }
      revenueChartData[label] = 0;
    }

    for (const b of revenueByPeriod) {
      const d = new Date(b.createdAt);
      let label: string;
      if (chartDays <= 7) {
        label = d.toLocaleDateString('en-IN', { weekday: 'short' });
      } else if (chartDays <= 31) {
        label = d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
      } else if (chartDays <= 90) {
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        label = weekStart.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
      } else {
        label = d.toLocaleDateString('en-IN', { month: 'short', year: '2-digit' });
      }
      if (revenueChartData[label] !== undefined) {
        revenueChartData[label] += b.totalPaid;
      }
    }

    const revenueChart = Object.entries(revenueChartData).map(([name, Revenue]) => ({ name, Revenue }));

    const bookingStatusMap: Record<string, number> = {};
    for (const item of bookingsByStatus) {
      bookingStatusMap[item.status] = item._count.status;
    }

    const paymentModes = paymentBreakdown.map(p => ({
      mode: p.paymentMode || 'UNKNOWN',
      count: p._count.paymentMode,
      total: p._sum.totalPaid || 0,
    }));

    const branchAnalytics = allBranches.map(branch => {
      const stat = branchStats.find(s => s.branchId === branch.id);
      const pendingForBranch = allBookings.filter(b => b.branchId === branch.id && !['COMPLETED', 'CANCELLED'].includes(b.status)).length;
      return {
        branchId: branch.id,
        branchName: branch.name,
        bookingCount: stat?._count.branchId || 0,
        revenue: stat?._sum.totalPaid || 0,
        pendingBookings: pendingForBranch,
      };
    });

    const testIds = topTests.map(t => t.testId);
    const testNames = await prisma.test.findMany({
      where: { id: { in: testIds } },
      select: { id: true, name: true },
    });
    const topTestsWithNames = topTests.map(t => ({
      testId: t.testId,
      name: testNames.find(n => n.id === t.testId)?.name || t.testId,
      count: t._count.testId,
    }));

    const categoryDistribution = categories.map(cat => ({
      name: cat.name,
      count: cat.tests.reduce((sum, test) => sum + test.bookings.length, 0),
    }));

    const alerts: { type: string; message: string; severity: 'critical' | 'warning' | 'info' }[] = [];
    if (pendingReports > 15) alerts.push({ type: 'High Pending Reports', message: `${pendingReports} reports are pending review or approval.`, severity: 'critical' });
    if (breachedSla > 0) alerts.push({ type: 'SLA Breach', message: `${breachedSla} report(s) have exceeded the SLA benchmark.`, severity: 'critical' });
    if (pendingSampleCollections > 10) alerts.push({ type: 'Sample Queue', message: `${pendingSampleCollections} bookings are awaiting sample collection.`, severity: 'warning' });
    if (pendingPayments > 0) alerts.push({ type: 'Pending Payments', message: `₹${pendingPayments.toLocaleString('en-IN')} in payments are still outstanding.`, severity: 'warning' });
    for (const branch of branchAnalytics) {
      if (branch.pendingBookings > 20) alerts.push({ type: 'Branch Overloaded', message: `${branch.branchName} has ${branch.pendingBookings} active bookings.`, severity: 'warning' });
    }

    const insights: string[] = [];
    if (topTestsWithNames.length > 0) insights.push(`"${topTestsWithNames[0].name}" is the most booked test with ${topTestsWithNames[0].count} orders.`);
    if (avgTat > 0) insights.push(`Average turnaround time is ${avgTat.toFixed(1)} hours across all reports.`);
    if (slaCompliance > 0) insights.push(`SLA compliance stands at ${slaCompliance}% over the last 30 days.`);
    if (homeCollectionBookings > labVisitBookings) insights.push(`Home collections (${homeCollectionBookings}) outnumber lab visits (${labVisitBookings}).`);
    const upiEntry = paymentModes.find(p => p.mode === 'UPI');
    if (upiEntry) insights.push(`UPI has collected ₹${upiEntry.total.toLocaleString('en-IN')} across ${upiEntry.count} transactions.`);

    const activityFeed = recentActivity.map(log => ({
      id: log.id,
      action: log.action,
      module: log.module,
      entityType: log.entityType,
      entityId: log.entityId,
      severity: log.severity,
      status: log.status,
      actor: log.user?.name || 'System',
      actorRole: log.user?.role || log.performedByRole || 'SYSTEM',
      createdAt: log.createdAt.toISOString(),
    }));

    res.json({
      kpis: {
        todayBookings: todayBookings.length,
        todayRevenue,
        totalRevenue,
        totalRefunds,
        pendingPayments,
        completedReports,
        pendingReports,
        pendingSampleCollections,
        homeCollectionBookings,
        labVisitBookings,
        activeBookings,
        totalBookings: allBookings.length,
        periodRevenue,
        periodBookings: periodBookingCount,
        periodCompletedReports,
        todayPendingCount,
      },
      trends: {
        revenue: calcTrend(periodRevenue, prevPeriodRevenue),
        bookings: calcTrend(periodBookingCount, prevPeriodBookingCount),
        completedReports: calcTrend(periodCompletedReports, prevPeriodCompletedReports),
        pendingCases: calcTrend(todayPendingCount, yesterdayPendingCount),
        revenueToday: calcTrend(todayRevenue, yesterdayRevenue),
      },
      tat: {
        avgHours: Math.round(avgTat * 10) / 10,
        medianHours: Math.round(medianTat * 10) / 10,
        fastestHours: Math.round(fastestTat * 10) / 10,
        slowestHours: Math.round(slowestTat * 10) / 10,
        avgDoctorApprovalMinutes: Math.round(avgDoctorApproval),
      },
      sla: {
        compliance: slaCompliance,
        withinSla,
        nearSla,
        breachedSla,
        avgDelayHours: Math.round(avgDelay * 10) / 10,
        worstDelayHours: Math.round(worstDelay * 10) / 10,
        pieData: [
          { name: 'Within SLA Threshold', value: withinSla + nearSla },
          { name: 'SLA Lag (Late Release)', value: breachedSla },
        ],
      },
      revenueChart,
      categoryDistribution,
      bookingsByStatus: bookingStatusMap,
      paymentModes,
      branchAnalytics,
      topTests: topTestsWithNames,
      alerts,
      insights,
      activityFeed,
    });
  } catch (error: any) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: 'Failed to fetch analytics', details: error.message });
  }
};