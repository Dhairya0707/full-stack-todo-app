const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = require("./config/db");
const todoSchema = require("./model/todomodel");
const Todo = require("./model/todomodel");
// const Todo = require("./model/todomodel");

// console.log(req.body);

app.get("/api/get-todo", async (req, res) => {
  try {
    const todos = await todoSchema.find().sort({ createdAt: -1 });
    res.status(201).json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

app.post("/api/create", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({ msg: "Please enter a todo text" }); // Validate input
    }

    const newTodo = new todoSchema({ text });
    const todo = await newTodo.save();
    res.json(todo);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error !");
  }
});

app.put("/api/update/:id", async (req, res) => {
  try {
    let todo = await todoSchema.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    if (req.body.completed !== undefined) {
      todo.completed = req.body.completed;
    }
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

app.delete("/api/delete/:id", async (req, res) => {
  try {
    let todo = await todoSchema.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    await todoSchema.findByIdAndDelete(req.params.id);
    res.json({ msg: "Todo removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
