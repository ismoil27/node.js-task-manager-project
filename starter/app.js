const express = require("express");
// import express from "express";

const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config(); //dotenv third party package. it is for .env

// middleware
app.use(express.static("./public"));
app.use(express.json());

//routes

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, () => console.log("server is running on port 3000..."));
  } catch (error) {
    console.log(error);
  }
};

start();
