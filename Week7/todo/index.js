const express = require("express");
const app = express();
const { UserModel, TodoModel } = require("./db");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { JWT_SECERT, auth } = require("./auth");

mongoose
  .connect(
   // add your connection string
  )
  .then(() => console.log("Connected!"))
  .catch((error) => console.log("Database connection failed:", error));

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    await UserModel.create({
      username,
      email,
      password, // In production, hash this password!
    });

    res.json({
      message: "Account Created Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email, password });

    if (user) {
      const token = jwt.sign(
        {
          id: user._id.toString(), // This matches what we expect in auth middleware
        },
        JWT_SECERT,
        { expiresIn: "24h" } // Optional: add expiration
      );

      res.json({
        token: token,
        message: "Login successful",
      });
    } else {
      res.status(403).json({
        message: "Invalid Email or Password",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.post("/todo", auth, async (req, res) => {
  try {
    const userId = req.userId;
    const { title, description } = req.body;

    const todo = await TodoModel.create({
      title,
      description,
      userId: userId,
    });

    res.json({
      message: "Todo created successfully",
      todo: todo,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/todos", auth, async (req, res) => {
  try {
    const userId = req.userId;
    const todos = await TodoModel.find({ userId });

    res.json({
      todos: todos,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// learn about ZOD,ERROR HANDLING , HASHING
