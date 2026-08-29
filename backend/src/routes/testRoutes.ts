import { Router } from 'express';
import { getAllTests, createTest, updateTest, addTestParameter, getTestParameters, getTestById, getTestContent, createPreparation, updatePreparation, deletePreparation, createFAQ, updateFAQ, deleteFAQ } from '../controllers/testController';
import { authenticate, authorizeRoles } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', getAllTests);
router.post('/', authenticate, authorizeRoles('ADMIN', 'SUPER_ADMIN'), createTest);

router.get('/:id', getTestById);
router.put('/:id', authenticate, authorizeRoles('ADMIN', 'SUPER_ADMIN'), updateTest);

router.get('/:testId/parameters', getTestParameters);
router.post('/:testId/parameters', authenticate, authorizeRoles('ADMIN', 'SUPER_ADMIN', 'PATHOLOGIST'), addTestParameter);

router.get('/:id/content', authenticate, authorizeRoles('ADMIN', 'SUPER_ADMIN'), getTestContent);

router.post('/:id/preparations', authenticate, authorizeRoles('ADMIN', 'SUPER_ADMIN'), createPreparation);
router.put('/:id/preparations/:prepId', authenticate, authorizeRoles('ADMIN', 'SUPER_ADMIN'), updatePreparation);
router.delete('/:id/preparations/:prepId', authenticate, authorizeRoles('ADMIN', 'SUPER_ADMIN'), deletePreparation);

router.post('/:id/faqs', authenticate, authorizeRoles('ADMIN', 'SUPER_ADMIN'), createFAQ);
router.put('/:id/faqs/:faqId', authenticate, authorizeRoles('ADMIN', 'SUPER_ADMIN'), updateFAQ);
router.delete('/:id/faqs/:faqId', authenticate, authorizeRoles('ADMIN', 'SUPER_ADMIN'), deleteFAQ);

export default router;
