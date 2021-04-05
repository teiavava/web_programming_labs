const express = require('express');

const UsersManager = require('../../WebCore/Managers/UsersManager.js');
const UsersRepository = require('../../Infrastructure/PostgreSQL/Repository/UsersRepository.js');

const {
    UserBody,
    UserRegisterRepsonse,
    UserLoginResponse
} = require ('../Models/Users.js');
const ResponseFilter = require('../Filters/ResponseFilter.js');
const AuthorizationFilter = require('../Filters/AuthorizationFilter.js');

const Router = express.Router();

Router.get('/', AuthorizationFilter.authorizeRoles('ADMIN'), async (req, res) => {

    const users = await UsersRepository.getAllAsync();

    ResponseFilter.setResponseDetails(res, 200, users.map(user => new UserRegisterRepsonse(user)));
});

Router.put('/:userId/role/:roleId', AuthorizationFilter.authorizeRoles('ADMIN'), async (req, res) => {
    let {
        userId,
        roleId
    } = req.params;

    userId = parseInt(userId);
    roleId = parseInt(roleId);

    const user = await UsersRepository.updateRoleAsync(userId, roleId);
});

module.exports = Router;