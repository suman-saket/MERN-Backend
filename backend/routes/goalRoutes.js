const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/goalController");

router.get("/", getGoals);
router.post("/", setGoal);

//router.route('/').get(getGoals).post(setGoals);   //Alternate way- Above 2 same route can be wriiten in this way by chaining.It save a line of code

router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);

//router.route('/:id').put(updateGoal).delete(deleteGoal);   //Alternate way- Above 2 same route can be wriiten in this way by chaining

module.exports = router;
