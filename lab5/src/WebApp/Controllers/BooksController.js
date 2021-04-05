const express = require('express');

const BooksRepository = require('../../Infrastructure/PostgreSQL/Repository/BooksRepository.js');
const ServerError = require('../Models/ServerError.js');
const { BookPostBody, BookPutBody, BookResponse } = require('../Models/Book.js');

const ResponseFilter = require('../Filters/ResponseFilter.js');
const AuthorizationFilter = require('../Filters/AuthorizationFilter.js');

const Router = express.Router();

Router.post('/',  AuthorizationFilter.authorizeRoles('ADMIN', 'MANAGER'), async (req, res) => {
    const bookBody = new BookPostBody(req.body);

    const book = await BooksRepository.addAsync(bookBody.Name, bookBody.AuthorId);

    ResponseFilter.setResponseDetails(res, 201, new BookResponse(book), req.originalUrl);
});

Router.get('/', async (req, res) => {
    const books = await BooksRepository.getAllAsync();
    ResponseFilter.setResponseDetails(res, 200, books.map(book => new BookResponse(book)));
});

Router.get('/:id', async (req, res) => {
    let {
        id
    } = req.params;

    id = parseInt(id);

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }

    const book = await BooksRepository.getByIdAsync(id);

    if (book == null) {
        throw new ServerError(`Book with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, new BookResponse(book));
});

Router.put('/:id', AuthorizationFilter.authorizeRoles('ADMIN', 'MANAGER'), async (req, res) => {
    const bookBody = new BookPutBody(req.body, req.params.id);
    const book = await BooksRepository.updateByIdAsync(bookBody.Id, bookBody.Name, bookBody.AuthorId);

    if (!book) {
        throw new ServerError(`Book with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200,  new BookResponse(book));
});

Router.delete('/:id', AuthorizationFilter.authorizeRoles('ADMIN', 'MANAGER'), async (req, res) => {
    const {
        id
    } = req.params;

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }

    const book = await BooksRepository.deleteByIdAsync(parseInt(id));

    if (!book) {
        throw new ServerError(`Book with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 204, "Entity deleted succesfully");
});

module.exports = Router;
