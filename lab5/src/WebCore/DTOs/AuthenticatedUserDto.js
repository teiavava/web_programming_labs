class AuthenticatedUserDto {
    constructor (token, username, role) {
        this.token = token;
        this.role = role;
        this.role_id;
    }

    get Token() {
        return this.token;
    }

    get Role() {
        return this.role;
    }

    get RoleId() {
        return this.role_id;
    }
}

module.exports = AuthenticatedUserDto;