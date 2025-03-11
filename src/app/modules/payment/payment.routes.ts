import { Router } from 'express';
import { paymentController } from './payment.controller';
import { UserRole } from '../user/user.interface';
import auth from '../../middleware/auth';

const router = Router();

// Define routes
router.get('/', paymentController.getAll);
router.get(
  '/student/:studentId',
  // auth(UserRole.USER),
  paymentController.getAllMyPayment
);

export const PaymentRoutes = router;
