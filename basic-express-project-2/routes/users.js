const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../utils/path");

router.get("/users", (req, res, next) => {
  console.log("users page");
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

module.exports = router;
