const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.json({mssg:'Working middleware!!'})
})

router.post('/', (req,res) => {
    res.json({ mssg: 'post route'})
})



module.exports = router;