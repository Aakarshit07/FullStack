const express = require('express');
const app = express();
const PORT=8000;
const HOSTNAME='localhost'
let counter = 0;

// counter = 0
app.get('/', function(req, res){
    res.json({counter})
})

// Increnment ++
app.get('/increnment', function(req, res){
    counter++;
    res.json({counter})
})

// Decrenmnet --
app.get('/decrenment', function(req, res){
    counter--;
    res.json({counter})
})


const serverRunning = () => {
    console.log(`Server is Running at ${HOSTNAME}:${PORT}..`);
}
app.listen(PORT, serverRunning);
