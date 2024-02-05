const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Home Page Middle Wear");
  res.status(404).send("<h1>Page not found</h1>");
});

module.exports = router;
