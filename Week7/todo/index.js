const express = require("express");
const app = express();
const { UserModel, TodoModel } = require("./db");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECERT = "ankithello";
mongoose
  .connect(
    "mongodb+srv://ankitmauryacoder:nqZrFW1HTnBMEFTo@cluster0.akv6x97.mongodb.net/TodoDB"
  )
  .then(() => console.log("Connected!"));

app.use(express.json());

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  UserModel.create({
    username: username,
    email: email,
    password: password,
  });

  res.json({
    message: "Account Created Sucessfully",
  });
});
app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const response = await UserModel.findOne({
    email: email,
    password: password,
  });
  if (response) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECERT
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Invalid Email or Password",
    });
  }
});
app.post("/todo", (req, res) => {});
app.get("/todos", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
