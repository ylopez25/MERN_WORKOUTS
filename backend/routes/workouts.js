const express = require('express');
const router = express.Router();
const {getAllWorkouts, getOneWorkout, postWorkout} = require("../controllers/workoutController")


router.get('/', getAllWorkouts)

router.get('/:id', getOneWorkout)

router.post('/', postWorkout)

router.patch('/:id', (req,res) => {
    try {
        res.json({mssg:'update route'})
    }catch (e) {
        res.json({e:e.message})
    }
})

router.delete('/:id', (req,res) => {
    try {
        res.json({mssg:'delete route'})
    }catch (e) {
        res.json({e:e.message})
    } 
})

module.exports = router;