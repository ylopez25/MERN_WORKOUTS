const express = require('express');
const router = express.Router();

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

router.post('/', (req,res) => {
    try {
        res.json({ mssg: 'post route'})
    }catch (e) {
        res.json({e:e.message})
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
    res.json({mssg:'delete route'})
})

module.exports = router;