import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export const getAllPackages = async (req: Request, res: Response) => {
  try {
    const packages = await prisma.healthPackage.findMany({
      where: { isActive: true },
      include: {
        testsIncluded: { include: { test: true } },
      },
      orderBy: { displayOrder: 'asc' },
    });
    res.json(packages);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch packages', details: error.message });
  }
};

export const getPackageById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const pkg = await prisma.healthPackage.findUnique({
      where: { id },
      include: {
        testsIncluded: { include: { test: true } },
        preparationGuidelines: {
          where: { isActive: true },
          orderBy: { displayOrder: 'asc' },
        },
        faqs: {
          where: { isActive: true },
          orderBy: { displayOrder: 'asc' },
        },
      },
    });
    if (!pkg) return res.status(404).json({ error: 'Package not found' });
    res.json(pkg);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch package', details: error.message });
  }
};

export const createPackage = async (req: Request, res: Response) => {
  try {
    const {
      name, subtitle, category, categoryId, description,
      price, oldPrice, discount, parametersCount, badge,
      preparation, reportTime, fastingRequired, homeCollection, labVisit,
      isFeatured, isPopular, isTrending, displayOrder, isActive,
      testsIncluded, preparationGuidelines, faqs,
    } = req.body;

    const healthPackage = await prisma.healthPackage.create({
      data: {
        name, subtitle, category, categoryId, description,
        price: Number(price), oldPrice: Number(oldPrice),
        discount, parametersCount: Number(parametersCount), badge, preparation,
        reportTime: reportTime || '24 Hours',
        fastingRequired: !!fastingRequired,
        homeCollection: homeCollection !== false,
        labVisit: labVisit !== false,
        isFeatured: !!isFeatured,
        isPopular: !!isPopular,
        isTrending: !!isTrending,
        displayOrder: Number(displayOrder) || 0,
        isActive: isActive !== false,
      },
    });

    if (Array.isArray(testsIncluded) && testsIncluded.length > 0) {
      await prisma.packageTest.createMany({
        data: testsIncluded.map((testId: string) => ({ packageId: healthPackage.id, testId })),
        skipDuplicates: true,
      });
    }

    if (Array.isArray(preparationGuidelines) && preparationGuidelines.length > 0) {
      await prisma.packagePreparation.createMany({
        data: preparationGuidelines.map((g: any, i: number) => ({
          packageId: healthPackage.id,
          title: g.title,
          description: g.description,
          displayOrder: g.displayOrder ?? i + 1,
          isActive: g.isActive !== false,
        })),
      });
    }

    if (Array.isArray(faqs) && faqs.length > 0) {
      await prisma.packageFAQ.createMany({
        data: faqs.map((f: any, i: number) => ({
          packageId: healthPackage.id,
          question: f.question,
          answer: f.answer,
          displayOrder: f.displayOrder ?? i + 1,
          isActive: f.isActive !== false,
        })),
      });
    }

    const created = await prisma.healthPackage.findUnique({
      where: { id: healthPackage.id },
      include: {
        testsIncluded: { include: { test: true } },
        preparationGuidelines: { where: { isActive: true }, orderBy: { displayOrder: 'asc' } },
        faqs: { where: { isActive: true }, orderBy: { displayOrder: 'asc' } },
      },
    });

    res.status(201).json(created);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to create package', details: error.message });
  }
};

export const updatePackage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      name, subtitle, category, categoryId, description,
      price, oldPrice, discount, parametersCount, badge,
      preparation, reportTime, fastingRequired, homeCollection, labVisit,
      isFeatured, isPopular, isTrending, displayOrder, isActive,
      testsIncluded, preparationGuidelines, faqs,
    } = req.body;

    await prisma.healthPackage.update({
      where: { id },
      data: {
        name, subtitle, category, categoryId, description,
        price: price !== undefined ? Number(price) : undefined,
        oldPrice: oldPrice !== undefined ? Number(oldPrice) : undefined,
        discount, parametersCount: parametersCount !== undefined ? Number(parametersCount) : undefined,
        badge, preparation, reportTime,
        fastingRequired: fastingRequired !== undefined ? !!fastingRequired : undefined,
        homeCollection: homeCollection !== undefined ? !!homeCollection : undefined,
        labVisit: labVisit !== undefined ? !!labVisit : undefined,
        isFeatured: isFeatured !== undefined ? !!isFeatured : undefined,
        isPopular: isPopular !== undefined ? !!isPopular : undefined,
        isTrending: isTrending !== undefined ? !!isTrending : undefined,
        displayOrder: displayOrder !== undefined ? Number(displayOrder) : undefined,
        isActive: isActive !== undefined ? !!isActive : undefined,
      },
    });

    if (Array.isArray(testsIncluded)) {
      await prisma.packageTest.deleteMany({ where: { packageId: id } });
      if (testsIncluded.length > 0) {
        await prisma.packageTest.createMany({
          data: testsIncluded.map((testId: string) => ({ packageId: id, testId })),
          skipDuplicates: true,
        });
      }
    }

    if (Array.isArray(preparationGuidelines)) {
      await prisma.packagePreparation.deleteMany({ where: { packageId: id } });
      if (preparationGuidelines.length > 0) {
        await prisma.packagePreparation.createMany({
          data: preparationGuidelines.map((g: any, i: number) => ({
            packageId: id,
            title: g.title,
            description: g.description,
            displayOrder: g.displayOrder ?? i + 1,
            isActive: g.isActive !== false,
          })),
        });
      }
    }

    if (Array.isArray(faqs)) {
      await prisma.packageFAQ.deleteMany({ where: { packageId: id } });
      if (faqs.length > 0) {
        await prisma.packageFAQ.createMany({
          data: faqs.map((f: any, i: number) => ({
            packageId: id,
            question: f.question,
            answer: f.answer,
            displayOrder: f.displayOrder ?? i + 1,
            isActive: f.isActive !== false,
          })),
        });
      }
    }

    const updated = await prisma.healthPackage.findUnique({
      where: { id },
      include: {
        testsIncluded: { include: { test: true } },
        preparationGuidelines: { where: { isActive: true }, orderBy: { displayOrder: 'asc' } },
        faqs: { where: { isActive: true }, orderBy: { displayOrder: 'asc' } },
      },
    });

    res.json(updated);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to update package', details: error.message });
  }
};