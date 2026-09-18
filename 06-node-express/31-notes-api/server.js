import express from "express";

const app = express();
app.use(express.json());

const PORT = 5000;

// ------------GET REQUEST---------------
app.get("/", (req, res) => {
  res.send("Notes API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);
  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }
  res.json(note);
});
// --------------------------------------

// ------------POST REQUEST---------------
app.post("/api/notes", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({
      message: "Title or Content are missing",
    });
  }

  const newNote = {
    id: nextId++,
    title,
    content,
  };
  notes.push(newNote);

  res.status(201).json(newNote);
});
// -------------------------------------

// ------------PUT REQUEST---------------
app.put("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);

  const note = notes.find((note) => note.id === id);

  if (!note) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: "Title and content are required",
    });
  }
  note.title = title;
  note.content = content;

  res.json(note);
});
// -------------------------------------

// ------------PUT REQUEST---------------
app.patch("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);

  const note = notes.find((note) => note.id === id);
  if (!note) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  const { title, content } = req.body;

  if (title !== undefined) {
    note.title = title;
  }
  if (content !== undefined) {
    note.content = content;
  }
  res.json(note);
});
// -------------------------------------

// ------------DELETE REQUEST-----------
app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = notes.findIndex((note) => note.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  const deleteNote = notes.splice(index, 1);

  res.json(deleteNote[0]);
});
// -------------------------------------

// ------------HEAD REQUEST-----------
app.head("/api/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    
    const note = notes.find((note) => note.id === id);
    
    if (!note) {
        return res.status(404).end();
    }
    
    res.status(200).end();
});
// -------------------------------------

// ------------OPTIONS REQUEST-----------
app.options("/api/notes", (req, res) => {
    res.set("Allow", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");
    res.sendStatus(204);
});
// -------------------------------------

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

const notes = [
  {
    id: 1,
    title: "Learn Express",
    content: "Understand routes and requests",
  },
  {
    id: 2,
    title: "Practice APIs",
    content: "Test APIs using Postman",
  },
];
let nextId = 3;