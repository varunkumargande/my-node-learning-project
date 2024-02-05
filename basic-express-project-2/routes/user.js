const express = require("express");

const router = express.Router();

router.get("/user", (req, res, next) => {
  console.log("user page");
  res.send("<h1>Hello Varun</h1>");
});

module.exports = router;
