const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Backend World again");
});

app.listen(3000, () => {
  console.log("App is listening to port 300");
});
