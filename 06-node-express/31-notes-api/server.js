import express from "express";

const app = express();

const PORT = 5000;

app.get("/", (req, res) =>{
    res.send("Notes API is running");
});
app.get("/api/notes", (req, res) =>{
    res.json(notes);
});
app.get("/api/notes/:id", (req, res) =>{
    const id = Number(req.params.id);
    const note = notes.find((note)=> note.id===id);
    if(!note) {
        return res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
});



app.listen(PORT, ()=> {
    console.log(`Server is running on port: ${PORT}`);
});

const notes = [
  {
    id: 1,
    title: "Learn Express",
    content: "Understand routes and requests"
  },
  {
    id: 2,
    title: "Practice APIs",
    content: "Test APIs using Postman"
  }
];