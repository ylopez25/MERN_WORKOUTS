const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    try {
        res.json({mssg:'Working middleware!!'})
    }catch(e){
        res.json({e:e.message})
    }
})

router.post('/', (req,res) => {
    res.json({ mssg: 'post route'})
})

router.patch('/', (req,res) => {
    res.json({mssg:'update route'})
})

router.delete('/', (req,res) => {
    res.json({mssg:'delete route'})
})

module.exports = router;