const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const JWT_SECRET = "ankitmaurya";

app.use(express.json());

let users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((user) => user.username === username)) {
    res.json({
      message: "Username not available",
    });
    return; // Important: return here to prevent further execution
  }

  users.push({
    username: username,
    password: password,
  });

  res.json({
    meassge: "Account Created Succesfully",
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Find user with matching credentials
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    // ✅ User found - create JWT token
    const token = jwt.sign(
      { username: username }, // Only include username, not password
      JWT_SECRET
    );

    // ✅ Send success response with token
    res.json({
      message: "Login successful",
      token: token,
    });
    return; // ✅ Important: stop execution here
  }

  // ✅ Only runs if user NOT found
  res.json({
    message: "Invalid Credentials",
  });
});

app.get("/me", (req, res) => {
  const token = req.headers.token;

  // ✅ Check if token exists
  if (!token) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  try {
    // ✅ Verify token with error handling
    const decodedData = jwt.verify(token, JWT_SECRET);

    // ✅ Find user using the decoded username
    const user = users.find((user) => user.username === decodedData.username);

    if (user) {
      // ✅ Return user info (without password for security)
      res.json({
        username: user.username,
        // Don't return password for security reasons
        message: "User found",
      });
    } else {
      // ✅ User not found in database
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    // ✅ Handle invalid/expired token
    res.status(401).json({
      message: "Invalid or expired token",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is listening on 3000");
});
