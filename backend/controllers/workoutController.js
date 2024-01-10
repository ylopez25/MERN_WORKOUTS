const workout = require('../models/workoutModal')

const postWorkout =  async (req,res) => {
    const {load,reps,title} = req.body;
    try {
        const workoutObj = await workout.create({load,reps,title})
        res.status(200).json({workoutObj})
    }catch (e) {
        res.status(400).json({e:e.message})
    }
}
module.exports= {
    postWorkout
}