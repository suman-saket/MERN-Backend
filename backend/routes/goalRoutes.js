const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/goalController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getGoals);
router.post("/", protect, setGoal);

//router.route('/').get(protect,getGoals).post(protect,setGoals);   //Alternate way- Above 2 same route can be wriiten in this way by chaining.It save a line of code

router.put("/:id", protect, updateGoal);
router.delete("/:id", protect, deleteGoal);

//router.route('/:id').put(protect,updateGoal).delete(protect,deleteGoal);   //Alternate way- Above 2 same route can be wriiten in this way by chaining

module.exports = router;
