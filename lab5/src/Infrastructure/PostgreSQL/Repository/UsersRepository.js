const {
    queryAsync
} = require('..');

const getAllAsync = async() => {
    console.info ('Getting all users from database');

    return await queryAsync('SELECT id, username, role_id FROM users');
};

const addAsync = async (username, password, role_id) => {
    console.info(`Adding user ${username}`);

    const users = await queryAsync('INSERT INTO users (username, password, role_id) VALUES ($1, $2, $3) RETURNING id, username, role_id', [username, password, role_id]);
    return users[0];
};

const updateRoleAsync = async (userId, roleId) => {
    console.info(`Updating user role for user with id ${userId}`);

    const users =  await queryAsync('UPDATE users SET roleId = $1 WHERE id = $2 RETURNING *', [roleId, userId]);
    return users[0];
};

const getByUsernameWithRoleAsync = async (username) => {
    console.info(`Getting user with username ${username}`);

    const users = await queryAsync(`SELECT u.id, u.password, r.value as role FROM users u 
                                JOIN roles r ON r.id = u.role_id
                                WHERE u.username = $1`, [username]);
    return users[0];
};

module.exports = {
    getAllAsync,
    addAsync,
    getByUsernameWithRoleAsync,
    updateRoleAsync
}