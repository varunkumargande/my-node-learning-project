const express = require("express");

const app = express();
const port = 3000;

app.use("/", (req, res, next) => {
  console.log("this is always logged");
  next();
});

app.get("/users", (req, res, next) => {
  console.log("users page");
  res.send("<h1>Hello Users</h1>");
});

app.get("/", (req, res, next) => {
  console.log("Home Page Middle Wear");
  res.send("<h1>Hello Welcome to Home page</h1>");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
