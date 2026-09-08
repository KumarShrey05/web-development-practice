import express from "express";
import notes from "../data/notes.js";

const router = express.Router();

// ------------GET REQUEST---------------
router.get("/", (req, res) => {
  res.json(notes);
});

router.post("/", (req, res) => {
    const newNote = {
        id: notes.length + 1,
        title: req.body.title,
        content: req.body.content
    };

    notes.push(newNote);

    res.status(201).json(newNote);
});

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const note = notes.find((note) => note.id === id);

    if (!note) {
        return res.status(404).json({ message: "Note not found" });
    }

    note.title = req.body.title;
    note.content = req.body.content;

    res.status(200).json(note);
});

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const noteIndex = notes.findIndex((note) => note.id === id);

    if (noteIndex === -1) {
        return res.status(404).json({ message: "Note not found" });
    }

    notes.splice(noteIndex, 1);

    res.status(200).json({ message: "Note deleted successfully" });
});

export default router;