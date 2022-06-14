const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url); // we are connect our url with help of mongoose
};

module.exports = connectDB;
