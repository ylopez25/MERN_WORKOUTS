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
    res.json({ mssg: 'post route'})
})

router.patch('/:id', (req,res) => {
    res.json({mssg:'update route'})
})

router.delete('/:id', (req,res) => {
    res.json({mssg:'delete route'})
})

module.exports = router;