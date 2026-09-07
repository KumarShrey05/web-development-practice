import express from 'express';

const app = express();
app.use(express.json());

const notes = [
    {
        id: 1,
        title: "Learn Node.js",
        content: "Understand how Node.js works"
    },
    {
        id: 2,
        title: "Learn Express",
        content: "Build REST APIs with Express"
    }
];


// const response = await fetch('https://dummyjson.com/posts')
// const data =  await response.json();


app.get("/api/notes", (req,res)=>{
    res.json(notes);
});

app.post("/api/notes", (req,res) => {
    const newNote = {
        id: notes.length+1,
        title: req.body.title,
        content: req.body.content
    };
    notes.push(newNote);
    res.status(201).json(newNote);
    console.log(req.body);
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000')
});
