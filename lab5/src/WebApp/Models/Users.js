const ServerError = require('./ServerError.js');

class UserBody {
    constructor (body) {

        if (!body.username) {
            throw new ServerError("Username is missing", 400);
        }
    
        if (!body.password) {
            throw new ServerError("Password is missing", 400);
        }

        if (body.password.length < 4) {
            throw new ServerError("Password is too short!", 400);
        }

        this.username = body.username;
        this.password = body.password;
    }

    get Username () {
        return this.username;
    }

    get Password () {
        return this.password;
    }
}

class UserRegisterRepsonse {
    constructor(user) {
        this.username = user.username;
        this.id = user.id;
        this.roleId = user.role_id;
    }
}
class UserLoginResponse {
    constructor(token, role, role_id) {
        this.role = role;
        this.token = token;
        this.role_id = role_id
    }
}
module.exports =  {
    UserBody,
    UserLoginResponse,
    UserRegisterRepsonse
}