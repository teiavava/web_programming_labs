const ServerError = require('../Models/ServerError.js');

const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        for (let i = 0; i < roles.length; i++) {
            if (req.user.role === roles[i]) { // observati cum in req exista obiectul user trimis la middlewareul anterior, de autorizare token
                    return next();
            }
        }
        throw new ServerError('Nu sunteti autorizat sa accesati resursa!', 401);
    }
};
 
module.exports = {
    authorizeRoles
}