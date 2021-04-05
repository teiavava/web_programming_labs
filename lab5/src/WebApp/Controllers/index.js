const Router = require('express')();

const AuthorsController = require('./AuthorsController.js');

const RolesController = require('./RolesControllers.js');
const UsersController = require('./UsersController.js');
const AuthenticationController = require('./AuthenticationController.js');


const { authorizeAndExtractTokenAsync } = require('../Filters/JWTFilter.js');

/**
 * TODO import controllers
 */

Router.use('/v1/authors', authorizeAndExtractTokenAsync, AuthorsController);
Router.use('/v1/users', authorizeAndExtractTokenAsync, UsersController);
Router.use('/v1/roles', authorizeAndExtractTokenAsync, RolesController);
Router.use('/v1/authentication', AuthenticationController);


/**
 * TODO add controllers to main router
 */

module.exports = Router;