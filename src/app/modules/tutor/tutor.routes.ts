import { Router } from "express";
import { TutorController } from "./tutor.controller";


const router = Router();

// Tutor Profile (Create/Update)
// router.post("/profile", TutorController.updateProfile)
router.patch("/:tutorId", TutorController.updateProfile);
router.get("/", TutorController.getAllTutor);
router.get("/:email", TutorController.getSingleTutor);

// Respond to Student Request
// router.put("/response", TutorController.respondToRequest);

export const TutorRoutes = router;