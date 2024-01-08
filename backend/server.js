const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const PORT = process.env.PORT;
const workoutsApi = require('./api/workouts')

app.use("/api/workouts", workoutsApi)

//connect db 
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on ${PORT}`)
        })
    })
    .catch((e) => {console.log(e)})
