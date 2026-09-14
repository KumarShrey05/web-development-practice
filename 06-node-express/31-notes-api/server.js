import express from "express";
import noteRoutes from "./routes/noteRoutes.js"
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import pool from "./config/db.js";

const app = express();
 
app.use(express.json());
app.use(logger);


app.get("/test-db", async (req,res,next)=>{
  try{
    const [rows] = await pool.query("SELECT 1");
    res.json({message: "Database connected", result: rows });
  } catch (error){
    next(error);
  }
});

app.use("/api/notes", noteRoutes);

app.use(errorHandler);


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
