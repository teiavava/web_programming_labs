const Router = require('express')();

const AuthorsController = require('./AuthorsController.js');

const RolesController = require('./RolesControllers.js');
const UsersController = require('./UsersController.js');
const AuthenticationController = require('./AuthenticationController.js');
const BooksController = require('./BooksController.js');
const PublishersController = require('./PublishersController.js');
const PublishersBooksController = require('./PublishersBooksController');

const { authorizeAndExtractTokenAsync } = require('../Filters/JWTFilter.js');

/**
 * TODO import controllers
 */

Router.use('/v1/authors', authorizeAndExtractTokenAsync, AuthorsController);
Router.use('/v1/users', authorizeAndExtractTokenAsync, UsersController);
Router.use('/v1/roles', authorizeAndExtractTokenAsync, RolesController);
Router.use('/v1/authentication', AuthenticationController);
Router.use('/v1/books', authorizeAndExtractTokenAsync, BooksController);
Router.use('/v1/publishers', authorizeAndExtractTokenAsync, PublishersController);
Router.use('/v1/books', authorizeAndExtractTokenAsync, PublishersBooksController);


/**
 * TODO add controllers to main router
 */

module.exports = Router;