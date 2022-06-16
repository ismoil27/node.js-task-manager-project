const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  // res.status(200).json({ tasks, amount:tasks.length });
  // res.status(200).json({ status: 'success', data: { tasks, nbHits: tasks.length } });
});

// create task. connected to db (Task file)
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });

  // if we don't give try catch server doesn't send an error
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id ${taskID}`, 404));
  }

  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id ${taskID}`, 404));
  }
  res.status(200).json({ task }); // this is one way of sending status and task
  // res.status(200).send(); this is another way of sending status and task
  //res.status(200).json({ task: null, status: "success" }); // these all three methods are similar.you see sky is the limit
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id ${taskID}`, 404));
  }

  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
