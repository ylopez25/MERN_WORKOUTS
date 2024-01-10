const workout = require('../models/workoutModal')

//get all workouts
const getAll = async (req,res) => {
    const allWorkouts = await workout.find({}).sort({createdAt: -1})
    try {
        res.status(200).json(allWorkouts)
    }catch (e) {
        res.status(400).json({e:e.message})
    }
}

//get one workout

//post workout
const postWorkout =  async (req,res) => {
    const {load,reps,title} = req.body;
    try {
        const workoutObj = await workout.create({load,reps,title})
        res.status(200).json(workoutObj)
    }catch (e) {
        res.status(400).json({e:e.message})
    }
}

//delete workout

module.exports= {
    postWorkout,
    getAll,
}