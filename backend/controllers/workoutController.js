const workout = require('../models/workoutModal')

//get all workouts
const getAllWorkouts = async (req,res) => {
    const allWorkouts = await workout.find({}).sort({createdAt: -1})
    try {
        res.status(200).json(allWorkouts)
    }catch (e) {
        res.status(400).json({e:e.message})
    }
}

//get one workout
const getOneWorkout = async (req,res) => {
    const { id } = req.params;
     const oneWorkout = await workout.findById(id);
     if(!oneWorkout) {
        return res.status(404).json({error: 'No such workout'})
     }
     res.status(200).json(oneWorkout)
}
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
const deleteWorkout = async (req,res) => {
    const { id } = req.params;
    const deletedWorkout = await workout.delete( id );
    try {
        res.status(200).json(deletedWorkout)
    }catch ( e ) {
        res.status(200).json({e:e.message})
    }
}
//Update 

module.exports= {
    getAllWorkouts,
    getOneWorkout,
    postWorkout,
}