import { Router } from "express";
import { BookingController } from "./booking.controller";


const router = Router();

router.post("/", BookingController.createBooking)
router.get("/", BookingController.getAllBooking);
router.get("/:tutorId", BookingController.getSingleBooking);
router.patch("/approve/:tutorId", BookingController.approveRequest);
router.patch("/cancel/:tutorId", BookingController.cancelRequest);

// Respond to Student Request
// router.put("/response", TutorController.respondToRequest);

export const BookingRoutes = router;