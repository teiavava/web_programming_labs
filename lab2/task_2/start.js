const express = require('express');
const get_date_time = require('./display_date_time.js');

const app = express();

app.get('/', (req, res) => {
//   res.send("helloooooooooooooo");
    res.send(get_date_time.get_date_time());
});

app.listen(3000);