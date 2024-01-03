const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT;
const workoutsApi = require('./api/workouts')

app.use("/", workoutsApi)

app.listen(PORT, () => {
    console.log(`Listenging on ${PORT}`)
})