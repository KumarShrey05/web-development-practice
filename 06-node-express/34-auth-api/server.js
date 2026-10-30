import express from "express";
import dotenv from "dotenv";
import pool from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Authentication API is running",
  });
});

const startServer = async () => {
  try {
    const connection = await pool.getConnection();

    console.log("MySQL connected successfully");

    connection.release();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

startServer();
