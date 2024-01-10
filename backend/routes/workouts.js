const express = require('express');
const router = express.Router();
const {postWorkout} = require("../controllers/workoutController")


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