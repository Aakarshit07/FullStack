const express = require('express')
const PORT = 10000;
const HOSTNAME = 'localhost';
const app = express();

app.get('/', function(req, res){
    res.json({
        msg: `I am Homepage `
    })
})

app.get('/about', function(req, res){
    res.json({
        msg: `<h1>I am about page</h1>`
    })
})


app.get('/contact', function(req, res){
    res.json({
        email: `<h1>support@gmail.com</h1>`
    })
})

const onListen = () => {
    console.log(`Server running at ${HOSTNAME}: ${PORT}...`)
}

app.listen(PORT, onListen);