const Router = require('express')();

const AuthorsController = require('./AuthorsController.js');

const { authorizeAndExtractTokenAsync } = require('../Filters/JWTFilter.js');

/**
 * TODO import controllers
 */

Router.use('/v1/authors', authorizeAndExtractTokenAsync, AuthorsController);

/**
 * TODO add controllers to main router
 */

module.exports = Router;