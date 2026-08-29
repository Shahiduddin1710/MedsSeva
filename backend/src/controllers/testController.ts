import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import crypto from 'crypto';



function normalizeReferenceRanges(raw: unknown): Array<{
  gender: string;
  minAge: number;
  maxAge: number;
  minRange: number;
  maxRange: number;
}> {
  if (Array.isArray(raw)) return raw;
  if (raw !== null && typeof raw === 'object' && !Array.isArray(raw)) return [raw as any];
  return [];
}

function serializeParameters(parameters: any[]): any[] {
  return parameters.map((p) => ({
    ...p,
    referenceRanges: normalizeReferenceRanges(p.referenceRanges),
  }));
}

export const getAllTests = async (req: Request, res: Response) => {
  try {
    const tests = await prisma.test.findMany({
      include: {
        category: true,
        parameters: true,
      },
    });
    const normalized = tests.map((t) => ({
      ...t,
      parameters: serializeParameters(t.parameters),
    }));
    res.json(normalized);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch tests', details: error.message });
  }
};
export const getTestById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const test = await prisma.test.findUnique({
      where: { id },
      include: {
        category: true,
        parameters: true,
        preparationGuidelines: {
          where: { isEnabled: true },
          orderBy: { displayOrder: 'asc' },
        },
        faqs: {
          where: { isEnabled: true },
          orderBy: { displayOrder: 'asc' },
        },
      },
    });
    if (!test) {
      return res.status(404).json({ error: 'Test not found' });
    }
    res.json(test);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch test', details: error.message });
  }
};
export const createTest = async (req: Request, res: Response) => {
  try {
    const { id, name, description, price, discountedPrice, categoryId, reportTime, fastingRequired, homeCollection, whyRequired } = req.body;
    
    // Ensure category exists first
    const category = await prisma.testCategory.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      await prisma.testCategory.create({
   data: {
          id: categoryId,
          name: categoryId,
          iconName: 'flask',
          slug: categoryId,
        },
      });
    }

const { parameters } = req.body;

 const test = await prisma.test.create({
      data: {
        name,
        description: description || '',
        price: Number(price),
        discountedPrice: discountedPrice ? Number(discountedPrice) : Number(price),
        categoryId,
        reportTime: reportTime || '24 Hours',
        fastingRequired: !!fastingRequired,
        homeCollection: homeCollection !== undefined ? !!homeCollection : true,
        whyRequired: whyRequired || '',
        ...(Array.isArray(parameters) && parameters.length > 0 && {
          parameters: {
            create: parameters.map((p: any) => ({
              name: p.name,
              unit: p.unit,
              referenceRanges: normalizeReferenceRanges(p.referenceRanges),
            })),
          },
        }),
      },
      include: { parameters: true },
    });

    const result = { ...test, parameters: serializeParameters(test.parameters) };
    res.status(201).json(result);
  } catch (error: any) {
    console.error('Failed to create test:', error);
    res.status(500).json({ error: 'Failed to create test', details: error.message });
  }
};

// Test Parameters
export const addTestParameter = async (req: Request, res: Response) => {
  try {
    const { testId } = req.params;
    const { name, unit, referenceRanges } = req.body;

    const parameter = await prisma.testParameter.create({
      data: {
        testId,
        name,
        unit,
        referenceRanges,
      }
    });
    res.status(201).json(parameter);
  } catch (error: any) {
    console.error('Failed to add parameter:', error);
    res.status(500).json({ error: 'Failed to add parameter', details: error.message });
  }
};

export const getTestParameters = async (req: Request, res: Response) => {
  try {
    const { testId } = req.params;
    const parameters = await prisma.testParameter.findMany({
      where: { testId },
    });
    res.json(parameters);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch parameters', details: error.message });
  }
};

export const getTestContent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [preparations, faqs] = await Promise.all([
      prisma.testPreparation.findMany({
        where: { testId: id },
        orderBy: { displayOrder: 'asc' },
      }),
      prisma.testFAQ.findMany({
        where: { testId: id },
        orderBy: { displayOrder: 'asc' },
      }),
    ]);
    res.json({ preparations, faqs });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch content', details: error.message });
  }
};

export const createPreparation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, appliesTo, displayOrder, isEnabled } = req.body;
    const item = await prisma.testPreparation.create({
      data: { testId: id, title, description, appliesTo: appliesTo ?? 'BOTH', displayOrder: displayOrder ?? 0, isEnabled: isEnabled ?? true },
    });
    res.status(201).json(item);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to create preparation', details: error.message });
  }
};

export const updatePreparation = async (req: Request, res: Response) => {
  try {
    const { prepId } = req.params;
    const { title, description, appliesTo, displayOrder, isEnabled } = req.body;
    const item = await prisma.testPreparation.update({
      where: { id: prepId },
      data: { title, description, appliesTo, displayOrder, isEnabled },
    });
    res.json(item);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to update preparation', details: error.message });
  }
};

export const deletePreparation = async (req: Request, res: Response) => {
  try {
    const { prepId } = req.params;
    await prisma.testPreparation.delete({ where: { id: prepId } });
    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to delete preparation', details: error.message });
  }
};

export const createFAQ = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { question, answer, displayOrder, isEnabled } = req.body;
    const item = await prisma.testFAQ.create({
      data: { testId: id, question, answer, displayOrder: displayOrder ?? 0, isEnabled: isEnabled ?? true },
    });
    res.status(201).json(item);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to create FAQ', details: error.message });
  }
};

export const updateFAQ = async (req: Request, res: Response) => {
  try {
    const { faqId } = req.params;
    const { question, answer, displayOrder, isEnabled } = req.body;
    const item = await prisma.testFAQ.update({
      where: { id: faqId },
      data: { question, answer, displayOrder, isEnabled },
    });
    res.json(item);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to update FAQ', details: error.message });
  }
};

export const deleteFAQ = async (req: Request, res: Response) => {
  try {
    const { faqId } = req.params;
    await prisma.testFAQ.delete({ where: { id: faqId } });
    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to delete FAQ', details: error.message });
  }
};

export const updateTest = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, price, discountedPrice, categoryId, reportTime, fastingRequired, homeCollection, whyRequired } = req.body;

const existing = await prisma.test.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: 'Test not found' });
    }

    // Resolve categoryId: may arrive as a name string (e.g. "Fever") instead of a UUID
    let resolvedCategoryId = categoryId;
    if (categoryId !== undefined) {
      // First try direct UUID lookup
      const categoryById = await prisma.testCategory.findUnique({
        where: { id: categoryId },
      });

   if (!categoryById) {
        const slug = categoryId.toLowerCase().replace(/\s+/g, '-');

        // Fallback 1: match by name (case-insensitive)
        // Fallback 2: match by slug (handles casing issues)
        const categoryByName = await prisma.testCategory.findFirst({
          where: {
            OR: [
              { name: { equals: categoryId, mode: 'insensitive' } },
              { slug: { equals: slug, mode: 'insensitive' } },
            ],
          },
        });

        if (categoryByName) {
          resolvedCategoryId = categoryByName.id;
        } else {
          // Auto-create only if truly not found anywhere
          const created = await prisma.testCategory.create({
            data: {
              id: crypto.randomUUID(),
              name: categoryId,
              iconName: 'flask',
              slug,
            },
          });
          resolvedCategoryId = created.id;
        }
      }
    }

const { parameters } = req.body;

    const hasNewParameters = Array.isArray(parameters) && parameters.length > 0;

    if (hasNewParameters) {
      await prisma.testParameter.deleteMany({ where: { testId: id } });
    }

    const updated = await prisma.test.update({
      where: { id },
      data: {
        ...(name !== undefined && { name }),
        ...(description !== undefined && { description }),
        ...(price !== undefined && { price: Number(price) }),
        ...(discountedPrice !== undefined && { discountedPrice: Number(discountedPrice) }),
        ...(categoryId !== undefined && { categoryId: resolvedCategoryId }),
        ...(reportTime !== undefined && { reportTime }),
        ...(fastingRequired !== undefined && { fastingRequired: !!fastingRequired }),
        ...(homeCollection !== undefined && { homeCollection: !!homeCollection }),
        ...(whyRequired !== undefined && { whyRequired }),
    ...(hasNewParameters && {
          parameters: {
            create: parameters.map((p: any) => ({
              name: p.name,
              unit: p.unit,
              referenceRanges: normalizeReferenceRanges(p.referenceRanges),
            })),
          },
        }),
      },
      include: {
        category: true,
        parameters: true,
      },
    });

    res.json({ ...updated, parameters: serializeParameters(updated.parameters) });
  } catch (error: any) {
    console.error('Failed to update test:', error);
    res.status(500).json({ error: 'Failed to update test', details: error.message });
  }
};