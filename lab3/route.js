const db = require('./database.js');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    try {
    const book = req.body.book;
    db.insertIntoDb(book)
    res.send(`${JSON.stringify(book)}`);
    }
    catch(err) {
        res.status(400).send('Invalid payload.');
    }
});

router.get('/', (req, res) => {
    books = db.getAllFromDb()
    res.send(`${JSON.stringify({'books': books})}`);
});

router.get('/:id', (req, res) => {
    try{
        const paramId = req.params.id;
        book = db.getFromDbById(parseInt(paramId))
        res.send(`${JSON.stringify(book)}`);
    }
    catch(err) {
        res.status(404).send('Id not found.');
    }
});

router.get('/author/:author', (req, res) => {
    try{
        const paramAuthor = req.params.author;
        book = db.getFromDbByAuthor(paramAuthor)
        res.send(`${JSON.stringify(book)}`);
    }
    catch(err) {
        res.status(404).send('Author not found.');
    }
});

router.put('/:id', (req, res) => {
    try {
        const payload = req.body;
        const id = req.params.id;

        console.log(`${JSON.stringify(payload)}`)
        book = db.updateById(id, payload)
        res.send(``);
    }
    catch(err) {
        res.status(404).send('Id not found.');
    }
});

router.delete('/:id', (req, res) => {
    try {
        const paramId = req.params.id;
        book = db.removeFromDbById(parseInt(paramId))
        res.send(``);
    }
    catch(err) {
        res.status(404).send('Id not found.');
    }
});

router.delete('/author/:author_', (req, res) => {
    try {
        const paramAuthor = req.params.author_;

        book = db.removeFromDbByAuthor(paramAuthor)
        res.send(``);
    }
    catch(err) {
        res.status(404).send('Author not found.');
    }
});

router.delete('/', (req, res) => {
    try {
        db.purgeDb()
        res.send(``);
    }
    catch(err) {
        res.status(500).send('Server unavailable.');
    }
});

module.exports = router;