const Router = require('express')();

const AuthorsController = require('./AuthorsController.js');
const BooksController = require('./BooksController.js');

Router.use('/v1/authors', AuthorsController);
Router.use('/v1/books', BooksController);

module.exports = Router;