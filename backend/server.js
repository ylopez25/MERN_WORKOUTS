const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const PORT = process.env.PORT;
const workoutsApi = require('./routes/workouts')
const userApi = require('./routes/user')
const bodyParser = require('body-parser');
//bodyparser
app.use(bodyParser.json())
app.use(nodyParser.json())

app.use("/api/workouts", workoutsApi)
app.use("/api/users", userApi)

//connect db 
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on ${PORT}`)
        })
    })
    .catch((e) => {console.log(e)})
