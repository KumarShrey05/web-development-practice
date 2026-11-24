import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());

import authRoutes from "./routes/authRoutes.js";

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Blog Backend API is running");
});

app.get("/test-db", async (req, res) => {
  try {
    const [result] = await db.query("SELECT 1");

    res.status(200).json({
      message: "Database connected successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Database connection failed",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
