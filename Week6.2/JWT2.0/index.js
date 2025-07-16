const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const JWT_SECRET = "ankitmaurya";

app.use(express.json());

let users = [];

function auth(req, res, next) {
  // Get token from Authorization header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  // If no token provided
  if (!token) {
    return res.status(401).json({
      message: "Access token required",
    });
  }

  try {
    // Verify the token
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username) {
      req.username = decodedData.username;
      next();
    } else {
      res.status(401).json({
        message: "Invalid token",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Invalid or expired token",
    });
  }
}

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((user) => user.username === username)) {
    res.json({
      message: "Username not available",
    });
    return;
  }

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "Account Created Successfully", // Fixed typo
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const token = jwt.sign({ username: username }, JWT_SECRET);

    res.json({
      message: "Login successful",
      token: token,
    });
    return;
  }

  res.json({
    message: "Invalid Credentials",
  });
});

app.get("/me", auth, (req, res) => {
  // Fixed: use req.username instead of req.user.username
  const user = users.find((user) => user.username === req.username);

  if (user) {
    res.json({
      username: user.username,
      // Don't return password for security
      message: "User found",
    });
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is listening on 3000");
});
