import express from "express";
import pool from "./db.js";

const app = express();
app.use(express.json());

const PORT = 5000;

// ------------GET REQUEST -----------------------
app.get("/", (req, res) => {
  res.send("Todos API is running");
});

app.get("/api/todos", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM todos");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch todos",
    });
  }
});

app.get("/api/todos/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const [rows] = await pool.query("SELECT * FROM  todos WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({
        message: "Todo Not Found",
      });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "Failed to Fetch Todo",
    });
  }
});

// ------------POST REQUEST ----------------------
app.post("/api/todos", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const [result] = await pool.query(
      "INSERT INTO todos (title, description) VALUES (?,?)",
      [title, description],
    );

    res.status(201).json({
      message: "Todo Created Successfully",
      todo: {
        id: result.insertId,
        title,
        description,
        completed: false,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to Create Todo",
    });
  }
});

// ------------PUT REQUEST -----------------------
app.put("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    if (completed !== undefined && typeof completed !== "boolean") {
      return res.status(400).json({
        message: "Completed must be true or false",
      });
    }
    const [result] = await pool.query(
      "UPDATE todos SET title = ?, description = ?, completed = ? WHERE id = ?",
      [title, description, completed, id],
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json({
      message: "Todo updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update todo",
    });
  }
});

// ------------DELETE REQUEST --------------------
app.delete("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("DELETE FROM todos WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
    res.status(200).json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete todo",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
