const db = require('./database.js');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const book = req.body.book;
    db.insertIntoDb(book)
    res.send(`${JSON.stringify(book)}`);
});

router.get('/', (req, res) => {
    books = db.getAllFromDb()
    res.send(`${JSON.stringify({'books': books})}`);
});

router.get('/:id', (req, res) => {
    const paramId = req.params.id;
    book = db.getFromDbById(parseInt(paramId))
    res.send(`${JSON.stringify(book)}`);
});

router.get('/author/:author', (req, res) => {
    const paramAuthor = req.params.author;
    book = db.getFromDbByAuthor(paramAuthor)
    res.send(`${JSON.stringify(book)}`);
});

router.put('/:id', (req, res) => {
    const payload = req.body;
    const id = req.params.id;

    console.log(`${JSON.stringify(payload)}`)
    book = db.updateById(id, payload)
    res.send(``);
});

router.delete('/:id', (req, res) => {
    const paramId = req.params.id;
    book = db.removeFromDbById(parseInt(paramId))
    res.send(``);
});

router.delete('/author/:author_', (req, res) => {
    const paramAuthor = req.params.author_;

    book = db.removeFromDbByAuthor(paramAuthor)
    res.send(``);
});

router.delete('/', (req, res) => {
    db.purgeDb()
    res.send(``);
});

module.exports = router;