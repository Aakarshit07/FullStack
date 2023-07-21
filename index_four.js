const express = require('express');
const app = express();
const PORT = 9999;
const HOSTNAME = 'localhost';
const max = 100;
const min = 10;
let randomNumber = Math.floor(Math.random() * (max - min) + min);

app.get('/random', function (req, res){
    res.json({Random: randomNumber})
})

app.listen(PORT, ()=>{
    console.log(`Server running at ${HOSTNAME}: ${PORT}...`)
})