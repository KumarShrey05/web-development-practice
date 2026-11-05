import pool from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    // Validates required fields.
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Trims name and converts email to lowercase.
    name = name.trim();
    email = email.trim().toLowerCase();

    // Checks whether the email format is valid.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    // Checks minimum password length.
    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long",
      });
    }

    // Ensures password does not exceed bcrypt's 72-byte limit.
    if (Buffer.byteLength(password, "utf8") > 72) {
      return res.status(400).json({
        message: "Password is too long",
      });
    }

    // Checks if the email is already registered.
    const [existingUser] = await pool.query(
      "SELECT id FROM users WHERE email = ?",
      [email],
    );

    if (existingUser.length > 0) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    // Hashes the password before storing it.
    const passwordHash = await bcrypt.hash(password, 10);

    // Inserts the new user into the database.
    const [result] = await pool.query(
      `INSERT INTO users (name, email, password_hash)
             VALUES (?, ?, ?)`,
      [name, email, passwordHash],
    );

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: result.insertId,
        name,
        email,
      },
    });
  } catch (error) {
    console.error("Register error:", error);

    // Handles duplicate email errors.
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    // Validates login credentials.
    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    email = email.trim().toLowerCase();

    // Fetches the user using their email.
    const [users] = await pool.query(
      `SELECT id, name, email, password_hash
             FROM users
             WHERE email = ?`,
      [email],
    );

    if (users.length === 0) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const user = users[0];

    // Compares the entered password with the stored hash.
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Generates a JWT token valid for one day.
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getProfile = async (req, res) => {
  try {
    // Fetches profile details using the authenticated user's ID.
    const [users] = await pool.query(
      "SELECT id, name, email FROM users WHERE id = ?",
      [req.user.id],
    );

    if (users.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "Profile fetched successfully",
      user: users[0],
    });
  } catch (error) {
    console.error("Profile error:", error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

// Exports authentication and profile controllers.
export { register, login, getProfile };
