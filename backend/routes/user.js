const express = require('express');
const route = express.Router();

//login
route.post('/login', (res,req) => {
    res.status(200).json({message: 'WORKING login'})
})
//signup
route.post('/signup', (req,res) => {
    res.status(200).json({message:'WORKING signup'})
})

module.exports=route;