const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT;

//middleware


//routes
app.get('/',(req,res) => {
    res.json({mssg:'lets try this again'})
})

app.post('/',(req,res) => {
   res.json({mssg:'post ROUTE'})
})

app.listen(PORT, () => {
    console.log(`Listenging on ${PORT}`)
})