import express from "express";
const router = express.Router();

import { getStudents, getStudentsById, createStudent, updateStudent, deleteStudent, } from "../controllers/studentController.js";
import { validateStudentId } from "../middleware/validateStudentId.js";

router.get("/", getStudents);

router.get("/:id", validateStudentId, getStudentsById);

router.post("/", createStudent);

router.patch("/:id", validateStudentId, updateStudent);

router.delete("/:id", validateStudentId, deleteStudent);

export default router;