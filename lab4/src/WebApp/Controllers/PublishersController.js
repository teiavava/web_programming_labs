const express = require('express');

const publishersRepository = require('../../Infrastructure/PostgreSQL/Repository/PublishersRepository.js');
const ServerError = require('../Models/ServerError.js');
const { PublisherPostBody, PublisherPutBody } = require('../Models/Publisher.js');

const ResponseFilter = require('../Filters/ResponseFilter.js');

const Router = express.Router();

Router.post('/', async (req, res) => {
    
    const publisherBody = new PublisherPostBody(req.body);

    const publisher = await publishersRepository.addAsync(publisherBody.Name);

    ResponseFilter.setResponseDetails(res, 201, publisher, req.originalUrl);
});

Router.get('/', async (req, res) => {

    const publishers = await publishersRepository.getAllAsync();

    ResponseFilter.setResponseDetails(res, 200, publishers);
});

Router.get('/:id', async (req, res) => {
    let {
        id
    } = req.params;

    id = parseInt(id);

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }
       
    const publisher = await publishersRepository.getByIdAsync(id);
    
    if (!publisher) {
        throw new ServerError(`publisher with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, publisher);
});

Router.put('/:id', async (req, res) => {

    const publisherBody = new PublisherPutBody(req.body, req.params.id);

    const publisher = await publishersRepository.updateByIdAsync(publisherBody.Id, publisherBody.Name);
        
    if (!publisher) {
        throw new ServerError(`publisher with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 200, publisher);
});

Router.delete('/:id', async (req, res) => {
    const {
        id
    } = req.params;

    if (!id || id < 1) {
        throw new ServerError("Id should be a positive integer", 400);
    }
    
    const publisher = await publishersRepository.deleteByIdAsync(parseInt(id));
    
    if (!publisher) {
        throw new ServerError(`publisher with id ${id} does not exist!`, 404);
    }

    ResponseFilter.setResponseDetails(res, 204, "Entity deleted succesfully");
});

module.exports = Router;