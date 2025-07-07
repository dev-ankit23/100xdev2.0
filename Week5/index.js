const express = require("express");

const app = express();

function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const timestamp = new Date();

  console.log(`The Method is ${method} for the url ${url} and at ${timestamp}`);
  next();
}

app.use(logger);

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.send(a + b);
});

app.listen(3000, () => {
  console.log("App is listening to port 3000");
});
