const express = require('express');

const PublishersBooksRepository = require('../../Infrastructure/PostgreSQL/Repository/PublishersBooksRepository.js');
const ServerError = require('../Models/ServerError.js');
const {PublishersBooksPostBody, PublishersBooksPutBody, PublishersBooksResponse} = require('../Models/PublishersBooks.js');

const ResponseFilter = require('../Filters/ResponseFilter.js');
const AuthorizationFilter = require('../Filters/AuthorizationFilter.js');

const Router = express.Router();

Router.post('/:id/publishers/', AuthorizationFilter.authorizeRoles('ADMIN', 'MANAGER'), async (req, res) => {
    const publishersBooksBody = new PublishersBooksPostBody(req.body);
    const publishers_books = await PublishersBooksRepository.addAsync(publishersBooksBody.BookId, publishersBooksBody.PublisherId, publishersBooksBody.Price);
    ResponseFilter.setResponseDetails(res, 201, new PublishersBooksResponse(publishers_books), req.originalUrl);
});

Router.get('/', async (req, res) => {
    const publishers_books = await PublishersBooksRepository.getAllAsync();
    ResponseFilter.setResponseDetails(res, 200, publishers_books.map(publisher_book => new PublishersBooksResponse(publisher_book)));
});

Router.put('/:id/publishers/:id2', AuthorizationFilter.authorizeRoles('ADMIN', 'MANAGER'), async (req, res) => {
    const publishersBooksBody = new PublishersBooksPutBody(req.body, req.params.id);
    const publisher_book = await PublishersBooksRepository.updateByIdAsync(publishersBooksBody.BookId, publishersBooksBody.PublisherId, publishersBooksBody.Price);

    if (publisher_book == null) {
        throw new ServerError(`Author with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, new PublishersBooksResponse(publisher_book));
});

Router.delete('/:id', AuthorizationFilter.authorizeRoles('ADMIN', 'MANAGER'), async (req, res) => {
    const {
        id
    } = req.params;

    if (id == null || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }

    const author = await AuthorsRepository.deleteByIdAsync(parseInt(id));

    if (!author) {
        throw new ServerError(`Author with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 204, "Entity deleted succesfully");
});

module.exports = Router;