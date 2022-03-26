import { Router } from 'express';
import EmployeeController from '../controllers/EmployeeController';

const router = Router();

router.get('/', EmployeeController.getAll);
router.post('/', EmployeeController.createEmployee);

export default router;
