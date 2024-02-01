const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
  });

app.get("/home", (req, res) => {
    res.render("home");
  });



