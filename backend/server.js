const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT;
const workoutsApi = require('./api/workouts')

app.use("/api/workouts", workoutsApi)

app.listen(PORT, () => {
    console.log(`Listenging on ${PORT}`)
})