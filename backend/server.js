const express = require('express');
const app = express();
const mongoose = require('mongoose')
const MONGO_URI= process.env.MONGO_URI;
require('dotenv').config()
const PORT = process.env.PORT;
const workoutsApi = require('./api/workouts')

app.use("/api/workouts", workoutsApi)

//connect db 
mongoose.connect(MONGO_URI)

app.listen(PORT, () => {
    console.log(`Listenging on ${PORT}`)
})