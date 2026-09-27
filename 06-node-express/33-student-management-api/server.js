import express from "express";

const app = express();
app.use(express.json());

const PORT = 5000;

app.get("/", (req,res)=>{
    res.send("Student Management system api")
});

app.get("/students", (req,res)=> {
    res
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});