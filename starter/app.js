const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// middleware
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.status(200).send("<h1>This is hello page</h1>");
});

app.use("/api/v1/tasks", tasks);

app.listen(3000, () => console.log("server is running on port 3000..."));
