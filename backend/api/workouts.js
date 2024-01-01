const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.json({mssg:'Working middleware!!'})
})

router.post('/', (req,res) => {
    res.json({ mssg: 'post route'})
})

router.patch('/', (req,res) => {
    res.json({mssg:'update route'})
})

module.exports = router;