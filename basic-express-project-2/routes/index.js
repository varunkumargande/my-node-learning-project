const express = require("express");
const path = require("path");

const router = express.Router();
const fileDirectory = path.join(__dirname, "../", "views", "index.html");
router.get("/", (req, res, next) => {
  console.log("Home Page Middle Wear");
  res.sendFile(fileDirectory);
});

module.exports = router;
