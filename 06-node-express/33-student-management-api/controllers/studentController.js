import pool from "../db.js";

export const getStudents = async (req, res) => {
  try {
    const { search, course, age } = req.query;

    let query = "SELECT * FROM students";
    const conditions = [];
    const values = [];

    if (search) {
      conditions.push("name LIKE ?");
      values.push(`%${search}%`);
    }

    if (course) {
      conditions.push("course = ?");
      values.push(course);
    }

    if (age) {
      conditions.push("age = ?");
      values.push(Number(age));
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    const [rows] = await pool.query(query, values);

    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch students",
    });
  }
};

export const getStudentsById = async (req, res) => {
  try {
    const id = Number(req.params.id);

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
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch",
    });
  }
};

export const createStudent = async (req, res) => {
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
    console.error(error);
    res.status(500).json({
      message: "Failed to Add into the database",
    });
  }
};

export const updateStudent = async (req, res) => {
  app.patch("/api/students/:id", async (req, res) => {
    try {
      const id = Number(req.params.id);

      const [student] = await pool.query(
        "SELECT id FROM students WHERE id = ?",
        [id],
      );

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
      console.error(error);
      res.status(500).json({
        message: "Failed to update student",
      });
    }
  });
};

export const deleteStudent = async (req, res) => {
  try {
    const id = Number(req.params.id);

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
    console.error(error);
    res.status(500).json({
      message: "Failed to Delete Student Data",
    });
  }
};
