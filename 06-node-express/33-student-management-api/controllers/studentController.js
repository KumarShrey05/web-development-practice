import pool from "../db.js";

export const getStudents = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM students");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch students",
    });
  }
};

export const getStudentsById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Invalid student ID",
      });
    }

    const [rows] = await pool.query("SELECT * FROM students WHERE id = ?", [
      id,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({
        message: "No Student Found",
      });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch",
    });
  }
};

export const 