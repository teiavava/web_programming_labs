const {
    queryAsync
} = require('..');

const addAsync = async (book_id, publisher_id, price) => {
    const publishers_books = await queryAsync('INSERT INTO publishers_books (book_id, publisher_id, price) \
                                               VALUES ($1, $2, $3) RETURNING *', [book_id, publisher_id, price]);
    return publishers_books[0];
};

const getAllAsync = async () => {
    return await queryAsync('SELECT * FROM publishers_books');
};

const getByIdAsync = async (book_id) => {
    const publishers_books = await queryAsync('SELECT * FROM publishers_books \
                                               WHERE book_id = $1 \
                                               RETURNING *', [book_id]);
    return publishers_books[0];
};

const updateByIdAsync = async (book_id, publisher_id, price) => {
    const publishers_books =  await queryAsync('UPDATE publishers_books SET price = $3 \
                                                WHERE book_id = $1 and publisher_id = $2 \
                                                RETURNING *', [book_id, publisher_id, price]);
    return publishers_books[0];
};

const deleteByIdAsync = async (book_id, publisher_id) => {
    const publishers_books = await queryAsync('DELETE FROM publishers_books \
                                               WHERE book_id = $1 and publisher_id = $2 \
                                               RETURNING *', [book_id, publisher_id]);
    return publishers_books[0];
};

module.exports = {
    addAsync,
    getAllAsync,
    getByIdAsync,
    updateByIdAsync,
    deleteByIdAsync
}