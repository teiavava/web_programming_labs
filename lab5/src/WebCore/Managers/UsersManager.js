const UsersRepository = require('../../Infrastructure/PostgreSQL/Repository/UsersRepository.js');
const AuthenticatedUserDto = require('../DTOs/AuthenticatedUserDto.js');
const RegisteredUserDto = require('../DTOs/RegisteredUserDto.js');
const JwtPayloadDto = require('../DTOs/JwtPayloadDto.js');
const { generateTokenAsync } = require('../Security/JWT');
const ServerError = require('../../WebApp/Models/ServerError');


var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const authenticateAsync = async (username, plainTextPassword) => {

    console.info(`Authenticates user with username ${username}`);

    const user = await UsersRepository.getByUsernameWithRoleAsync(username);

    if (!user) {
        throw new ServerError(`Utilizatorul cu username ${username} nu exista in sistem!`, 404);
    }

    /**
     * TODO
     * 
     * pas 1: verifica daca parola este buna (hint: functia compareAsync)
     * pas 1.1.: compare returneaza true sau false. Daca parola nu e buna, arunca eroare
     * pas 2: genereaza token cu payload-ul JwtPayload
     * pas 3: returneaza AuthenticatedUserDto
     */

    // var salt = bcrypt.genSaltSync(10);
    // var encryptedPassword = await bcrypt.hash(plainTextPassword, salt)

    if (await bcrypt.compare(plainTextPassword, user.password)) {
        var token = await generateTokenAsync(new JwtPayloadDto(user.id, user.role, user.role_id));
        return new AuthenticatedUserDto(token, user.username, user.role, user.role_id)
    } else {
        throw new ServerError(`Parola incorecta!`, 403);
    }
};

const registerAsync = async (username, plainTextPassword) => {
    /**
     * TODO
     * 
     * pas 1: cripteaza parola
     * pas 2: adauga (username, parola criptata) in baza de date folosind UsersRepository.addAsync
     * pas 3: returneaza RegisteredUserDto
     * 
     */
    var salt = bcrypt.genSaltSync(10);
    var encryptedPassword = await bcrypt.hash(plainTextPassword, salt)

    var user = await UsersRepository.addAsync(username, encryptedPassword, 3)

    return new RegisteredUserDto(user.id, user.username, user.role_id)
};

module.exports = {
    authenticateAsync,
    registerAsync
}