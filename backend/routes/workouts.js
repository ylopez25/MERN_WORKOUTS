const express = require('express');
const router = express.Router();

const workout = require('../models/workoutModal')

router.get('/', (req,res) => {
    try {
        res.json({mssg:'Working middleware!!'})
    }catch(e){
        res.json({e:e.message})
    }
})

router.get('/:id', (req,res) => {
    try {
        res.json({mssg: 'get single workout'})
    }catch (e) {
        res.json({e:e.message})
    }
})

router.post('/', async (req,res) => {
    const { load, reps, title } = req.body
    try {
        const workoutObj= await workout.create({ load,reps,title })
        res.status(200).json({ workoutObj })
    }catch (e) {
        res.status(400).json({e:e.message})
    }
})

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