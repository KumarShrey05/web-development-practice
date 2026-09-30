import express from "express";
import pool from "./db.js";

const app = express();
app.use(express.json());

const PORT = 5000;

// -------------GET REQUEST FOR HOMEPAGE-----------
app.get("/", (req, res) => {
    res.send("Student Management system api");
});

// -------------GET REQUEST TO VIEW FULL STUDENT TABLE-----------
app.get("/api/students", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM students");
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch students",
        });
    }
});

// -------------GET REQUEST TO VIEW -----------
app.get("/api/students/:id", async (req,res) => {
    try{
        const id = Number (req.params.id);
        const [rows] = await pool.query("SELECT * FROM students WHERE id = ?", [id]);
        if(rows.length===0){
            return res.status(404).json({
                message: "No Student Found"
            })
        };
        res.status(200).json(rows[0])
    }catch (error){
        res.status(500).json({
            message: "Failed to fetch"
        })
    }
})

app.post("/api/students", (req,res) => {
    
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
