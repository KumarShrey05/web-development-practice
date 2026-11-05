import express from "express";
import dotenv from "dotenv";
import pool from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Initializes middleware to parse JSON request bodies.
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Registers authentication routes with the API.
app.use("/api/auth", authRoutes);

// Default route to check API status.
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Authentication API is running",
  });
});

// Connects to MySQL and starts the server.
const startServer = async () => {
  try {
    const connection = await pool.getConnection();

    console.log("MySQL connected successfully");

    // Releases the database connection back to the pool.
    connection.release();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);

    // Stops the application if database connection fails.
    process.exit(1);
  }
};

startServer();
