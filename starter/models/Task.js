const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true, //trim take out extra white space
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false, //completed is going to be false as default value for put method not for patch method
  },
});

module.exports = mongoose.model("Task", TaskSchema);
