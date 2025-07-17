const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
let users = [];
let todos = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (users.username === username) {
    res.json({
      message: "User Already Exist",
    });
  }
  users.push({
    username: username,
    password: password,
  });
  res.json({
    message: "Account Created ",
  });
});
app.post("/signin", (req, res) => {});

app.post("/create", (req, res) => {});
app.delete("/delete", (req, res) => {});
app.put("/update", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
