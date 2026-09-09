import express from "express";
import notes from "../data/notes.js";
import { getNotes, createNote, updateNote, deleteNote } from "../controllers/noteController.js";

const router = express.Router();

// ------------GET REQUEST---------------
router.get("/", getNotes);

// -------------POST REQUEST------------
router.post("/", createNote);

// -------------PUT REQUEST------------
router.put("/:id", updateNote);

// -------------DELETE REQUEST------------
router.delete("/:id", deleteNote);

export default router;