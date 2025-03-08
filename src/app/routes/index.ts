import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { AuthRoutes } from '../modules/auth/auth.routes';

import { ReviewRoutes } from '../modules/review/review.routes';
import { TutorRoutes } from '../modules/tutor/tutor.routes';
import { StudentRoutes } from '../modules/student/student.routes';
import { BookingRoutes } from '../modules/Booking/booking.route';
import { OrderRoutes } from '../modules/order/order.routes';
import { SSLRoutes } from '../modules/sslcommerz/sslcommerz.routes';
const router = Router();

const moduleRoutes = [
   {
      path: '/user',
      route: UserRoutes,
   },
   {
      path: '/auth',
      route: AuthRoutes,
   },
   {
      path: '/students',
      route: StudentRoutes,
   },
   {
      path: '/tutors',
      route: TutorRoutes,
   },
   {
      path: '/booking',
      route: BookingRoutes,
   },
   {
      path: '/order',
      route: OrderRoutes,
   },
   {
      path: '/ssl',
      route: SSLRoutes,
   },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
