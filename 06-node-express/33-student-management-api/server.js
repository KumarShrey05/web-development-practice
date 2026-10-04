import { getStudents, getStudentsById } from "./controllers/studentController.js";
import studentRoutes from "./routes/studentRoutes.js"

import express from "express";
import pool from "./db.js";

const app = express();

const PORT = 5000;
app.use(express.json());

app.use((req,res,next) => {
  console.log(req.method, req.url);
  next();
});

// -------------GET REQUEST FOR HOMEPAGE-----------
app.get("/", (req, res) => {
  res.send("Student Management system api");
});

// -------------GET REQUEST TO VIEW FULL STUDENT TABLE-----------
app.use("/api/students", studentRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
