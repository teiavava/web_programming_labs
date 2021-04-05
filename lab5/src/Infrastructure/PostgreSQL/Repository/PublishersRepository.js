const {
    queryAsync
} = require('..');

const addAsync = async (name) => {
    const publishers = await queryAsync('INSERT INTO publishers (name) VALUES ($1) \
                                         RETURNING *', [name]);
    return publishers[0];
};

const getAllAsync = async () => {
    return await queryAsync('SELECT * FROM publishers');
};

const getByIdAsync = async (id) => {
    const publishers = await queryAsync('SELECT * FROM publishers \
                                         WHERE id = $1', [id]);
    return publishers[0];
};

const updateByIdAsync = async (id, name) => {
    const publishers =  await queryAsync('UPDATE publishers SET name = $1 \
                                          WHERE id = $2 RETURNING *', [name, id]);
    return publishers[0];
};

const deleteByIdAsync = async (id) => {
    const publishers = await queryAsync('DELETE FROM publishers WHERE id = $1 \
                                         RETURNING *', [id]);
};

module.exports = {
    addAsync,
    getAllAsync,
    getByIdAsync,
    updateByIdAsync,
    deleteByIdAsync
}