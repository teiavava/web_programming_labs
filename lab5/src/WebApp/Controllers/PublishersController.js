const express = require('express');

const PublishersRepository = require('../../Infrastructure/PostgreSQL/Repository/PublishersRepository.js');
const ServerError = require('../Models/ServerError.js');
const { PublisherPostBody, PublisherPutBody, PublisherResponse } = require('../Models/Publisher.js');

const ResponseFilter = require('../Filters/ResponseFilter.js');
const AuthorizationFilter = require('../Filters/AuthorizationFilter.js');

const Router = express.Router();

Router.post('/', AuthorizationFilter.authorizeRoles('ADMIN', 'MANAGER'), async (req, res) => {
    const publisherBody = new PublisherPostBody(req.body);
    const publisher = await PublishersRepository.addAsync(publisherBody.Name);
    ResponseFilter.setResponseDetails(res, 201, new PublisherResponse(publisher), req.originalUrl);
});

Router.get('/', async (req, res) => {
    const publishers = await PublishersRepository.getAllAsync();
    ResponseFilter.setResponseDetails(res,
        200,
        publishers.map(publisher => new PublisherResponse(publisher)));
});

Router.get('/:id', async (req, res) => {
    let {
        id
    } = req.params;

    id = parseInt(id);

    if (id == null || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }
    const publisher = await PublishersRepository.getByIdAsync(id);

    if (publisher == null) {
        throw new ServerError(`Publisher with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, new PublisherResponse(publisher));
});

Router.put('/:id', AuthorizationFilter.authorizeRoles('ADMIN', 'MANAGER'), async (req, res) => {
    const publisherBody = new PublisherPutBody(req.body, req.params.id);
    const publisher = await PublishersRepository.updateByIdAsync(publisherBody.Id, publisherBody.Name);

    if (publisher == null) {
        throw new ServerError(`Publisher with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, new PublisherResponse(publisher));
});

Router.delete('/:id', AuthorizationFilter.authorizeRoles('ADMIN', 'MANAGER'), async (req, res) => {
    const {
        id
    } = req.params;

    if (id == null || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }

    const publisher = await PublishersRepository.deleteByIdAsync(parseInt(id));

    if (!publisher) {
        throw new ServerError(`Publisher with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 204, "Entity deleted succesfully");
});

module.exports = Router;