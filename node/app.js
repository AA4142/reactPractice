const express = require('express');

const app = express();

//listen for requests

app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname });
    //res.send('<p>yoooo</p>');
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname });
    //res.send('<p>about yooooo</p>');
})

//the function .get allows us access to the req and res objects

app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

app.use( (req, res) => {
    res.sendFile('./views/404.html', { root: __dirname });
})