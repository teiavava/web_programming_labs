const express = require('express');

const UsersManager = require('../../WebCore/Managers/UsersManager.js');

const {
    UserBody,
    UserRegisterRepsonse,
    UserLoginResponse
} = require ('../Models/Users.js');
const ResponseFilter = require('../Filters/ResponseFilter.js');

const Router = express.Router();

Router.post('/register', async (req, res) => {

    const userBody = new UserBody(req.body);
    const user = await UsersManager.registerAsync(userBody.Username, userBody.password);

    ResponseFilter.setResponseDetails(res, 201, new UserRegisterRepsonse(user));
});

Router.post('/login', async (req, res) => {
    const userBody = new UserBody(req.body);
    const userDto = await UsersManager.authenticateAsync(userBody.Username, userBody.Password);
    const user = new UserLoginResponse(userDto.Token, userDto.Role);

    ResponseFilter.setResponseDetails(res, 200, user);
});

module.exports = Router;