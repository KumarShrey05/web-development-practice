import db from "../config/db.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const [existingUser] = await db.query(
      "SELECT id FROM users WHERE email = ?",
      [email],
    );

    if (existingUser.length > 0) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword],
    );

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
};
