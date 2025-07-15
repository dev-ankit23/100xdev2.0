const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const JWT_SECRET = "USER_APP";
app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username,
    password,
  });
  res.send({
    message: "You have signed up",
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = users.find(function (u) {
    if (u.username === username && u.password === password) {
      return true;
    } else {
      return false;
    }
  });
  if (foundUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Invalid Username or password",
    });
  }
});

app.get("/me", (req, res) => {
  res.send("Hellow");
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
