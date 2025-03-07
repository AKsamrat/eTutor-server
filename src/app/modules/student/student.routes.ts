import { Router } from "express";
import { StudentController } from "./student.controller";



const router = Router();

router.patch("/:studentId", StudentController.updateStudentProfile);
// router.get("/", TutorController.getAllTutor);
router.get("/:email", StudentController.getSingleStudent);

export const StudentRoutes = router;