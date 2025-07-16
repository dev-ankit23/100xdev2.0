const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post("/signup", (req, res) => {});
app.post("/signin", (req, res) => {});

app.post("/create", (req, res) => {});
app.delete("/delete", (req, res) => {});
app.put("/update", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
