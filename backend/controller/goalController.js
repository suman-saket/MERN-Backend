const asyncHandler = require("express-async-handler");

//@description  Get goal
//route         GET/api/goals
//access        Private

const getGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) res.status(400);
  throw new Error("Please add a text Field");
});

//@description  Set goal
//route         POST/api/goals
//access        Private

const setGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Set Goals" });
});

//@description  Update goal
//route         PUT/api/goals/:id
//access        Private

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
});

//@description  Delete goal
//route         DELETE/api/goals
//access        Private

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
