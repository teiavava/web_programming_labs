const express = require('express');
const myAwesomeRoute = require('./route.js');

const app = express();

app.use(express.json())
app.use('/books', myAwesomeRoute);

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.listen(3000);