const workout = require('../models/workoutModal');
const mongoose = require('mongoose')

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

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({error: 'No such id found!'})
    }
     const oneWorkout = await workout.findById(id);
     if(!oneWorkout) {
        return res.status(404).json({error: 'No such workout'})
     }
     res.status(200).json(oneWorkout)
}
//post workout
const postWorkout =  async (req,res) => {
    const {title,reps,load} = req.body;

    //error message for empty fields
    let emptyFields = [];

    if(!title) {
        emptyFields.push('title')
    }
    if(!load) {
        emptyFields.push('load')
    }
    if(!reps) {
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0) {
       return res.status(400).json({error: 'Please fill out all fields', emptyFields})
    }
    try {
        const workoutObj = await workout.create({title,reps,load})
        res.status(200).json(workoutObj)
    }catch (error) {
        res.status(400).json({error:error.message})
    }
}

//delete workout
const deleteWorkout = async (req,res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({error: 'No such id found!'})
    }

    const deletedWorkout = await workout.findOneAndDelete({_id:id})
    
    if(!deletedWorkout) {
        res.status(400).json({error: 'no workout found'})
    }

    res.status(200).json(deletedWorkout)
}
//Update 
const updateWorkout = async (req,res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({error: 'No such id found!'})
    }

    const updatedWorkout = await workout.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!updatedWorkout) {
     return res.status(404).json({error:'No workout updated'})
    }

    res.status(200).json(updatedWorkout)
}

module.exports= {
    getAllWorkouts,
    getOneWorkout,
    postWorkout,
    deleteWorkout,
    updateWorkout
}