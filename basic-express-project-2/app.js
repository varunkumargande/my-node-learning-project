const express = require("express");

const homeRoute = require("./routes");
const usersRoute = require("./routes/users");
const userRoute = require("./routes/user");
const noPageRoute = require("./routes/404");

const app = express();
const port = 3000;

app.use(homeRoute);
app.use(usersRoute);
app.use("/users", userRoute);
app.use(noPageRoute);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
