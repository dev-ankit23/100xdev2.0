const express = require("express");
const app = express();

app.use(express.json());

app.post("/signup", (req, res) => {
  res.send("Hello World");
});
app.post("/signin", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
