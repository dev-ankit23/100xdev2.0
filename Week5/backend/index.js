const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.post("/sum", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    meassge: a + b,
  });
});

app.listen(3000, () => {
  console.log("Server is runing on port 3000");
});
