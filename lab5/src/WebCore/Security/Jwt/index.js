const jwt = require('jsonwebtoken');

const ServerError = require('../../../WebApp/Models/ServerError.js');

const options = {
    issuer: process.env.JWT_ISSUER,
    subject: process.env.JWT_SUBJECT,
    audience: process.env.JWT_AUDIENCE
};

const generateTokenAsync = async (payload) => {
    // to be done
    // HINT: folositi functia "sign" din biblioteca jsonwebtoken
    // HINT2: seamana cu functia verify folosita mai jos ;)
    /*
     payload este JwtPayloadDto
    */
   try {
        var token = jwt.sign({userId: payload.userId, userRole: payload.userRole}, process.env.JWT_SECRET_KEY);
        return token;
    } catch (err) {
        console.trace(err);
        throw new ServerError("Eroare la generarea tokenului!", 400);
    }
};

const verifyAndDecodeDataAsync = async (token) => {
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY, options);
        return decoded;
    } catch (err) {
        console.trace(err);
        throw new ServerError("Eroare la decriptarea tokenului!", 400);
    }
};

module.exports = {
    generateTokenAsync,
    verifyAndDecodeDataAsync
};