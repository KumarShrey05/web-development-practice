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
app.get("/api/students/:id", async (req, res) => {
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
});

// -------------POST REQUEST TO ADD -----------
app.post("/api/students", async (req, res) => {
  try {
    const { name, email, age, course } = req.body;

    if (!name || !email || !course || !Number.isInteger(age) || age <= 0) {
      return res.status(400).json({
        message: "Please provide valid student details",
      });
    }

    const [result] = await pool.query(
      "INSERT INTO students (name, email, age, course) VALUES (?,?,?,?)",
      [name, email, age, course],
    );
    res.status(201).json({
      message: "Student Data Added Successfully",
      student: {
        id: result.insertId,
        name,
        email,
        age,
        course,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to Add into the database",
    });
  }
});

// -------------PATCH REQUEST TO UPDATE -----------
app.patch("/api/students/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id) || id <= 0) {
      return res.status(400).json({
        message: "Invalid student ID",
      });
    }

    const [student] = await pool.query("SELECT id FROM students WHERE id = ?", [
      id,
    ]);

    if (student.length === 0) {
      return res.status(404).json({
        message: "No Student Found",
      });
    }

    const { name, email, age, course } = req.body;

    const fields = [];
    const values = [];

    if (name !== undefined) {
      if (!name.trim()) {
        return res.status(400).json({
          message: "Name cannot be empty",
        });
      }

      fields.push("name = ?");
      values.push(name);
    }

    if (email !== undefined) {
      if (!email.trim()) {
        return res.status(400).json({
          message: "Email cannot be empty",
        });
      }

      fields.push("email = ?");
      values.push(email);
    }

    if (age !== undefined) {
      if (!Number.isInteger(age) || age <= 0) {
        return res.status(400).json({
          message: "Age must be a positive integer",
        });
      }

      fields.push("age = ?");
      values.push(age);
    }

    if (course !== undefined) {
      if (!course.trim()) {
        return res.status(400).json({
          message: "Course cannot be empty",
        });
      }

      fields.push("course = ?");
      values.push(course);
    }

    if (fields.length === 0) {
      return res.status(400).json({
        message: "No fields provided for update",
      });
    }

    values.push(id);

    await pool.query(
      `UPDATE students SET ${fields.join(", ")} WHERE id = ?`,
      values,
    );

    const [updatedStudent] = await pool.query(
      "SELECT * FROM students WHERE id = ?",
      [id],
    );

    res.status(200).json({
      message: "Student Data Updated Successfully",
      student: updatedStudent[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update student",
    });
  }
});

// -------------DELETE REQUEST TO DELETE -----------
app.delete("/api/students/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id) || id <= 0) {
      return res.status(400).json({
        message: "Invalid student ID",
      });
    }

    const [result] = await pool.query("DELETE FROM students WHERE id = ?", [
      id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Student Data Not Found",
      });
    }
    res.status(200).json({
      message: "Student Data Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to Delete Student Data",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
