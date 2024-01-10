const express = require('express');
const router = express.Router();
const {getAllWorkouts, getOneWorkout, postWorkout, updateWorkout, deleteWorkout} = require("../controllers/workoutController")


router.get('/', getAllWorkouts)

router.get('/:id', getOneWorkout)

router.post('/', postWorkout)

router.patch('/:id', updateWorkout)

router.delete('/:id', deleteWorkout)

module.exports = router;