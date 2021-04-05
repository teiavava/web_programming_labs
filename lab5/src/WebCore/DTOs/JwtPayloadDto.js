class JwtPayloadDto {

    constructor(userId, userRole, userRoleId) {
        this.userId = userId;
        this.userRole = userRole;
        this.userRoleId = userRoleId;
    }

    get UserId () {
        return this.userId;
    }

    get UserRole () {
        return this.userRole;
    }

    get UserRoleId () {
        return this.userRoleId;
    }
}

module.exports = JwtPayloadDto;