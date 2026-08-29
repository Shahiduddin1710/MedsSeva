import { Router } from 'express';
import { getAllPackages, createPackage, getPackageById, updatePackage } from '../controllers/packageController';

const router = Router();

router.get('/', getAllPackages);
router.get('/:id', getPackageById);
router.post('/', createPackage);
router.put('/:id', updatePackage);

export default router;