const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home page</h1> ");
});

app.get("/hello", (req, res) => {
  res.status(200).send("<h1>This is hello page</h1>");
});

app.get("*", (req, res) => {
  res.status(404).send("Oops! Something went wrong!");
});

app.listen(3000, () => console.log("server is running on port 3000..."));
