const {
    queryAsync
} = require('..');

const addAsync = async (name, author_id) => {
    const books = await queryAsync('INSERT INTO books \
                                    (name, author_id) VALUES ($1, $2) \
                                    RETURNING *', [name, author_id]);
    return books[0];
};

const getAllAsync = async () => {
    return await queryAsync('SELECT * FROM books');
};

const getByIdAsync = async (id) => {
    const books = await queryAsync(`SELECT b.id as book_id,\
                                            b.name as book_name,\
                                            a.id as author_id,\
                                            a.first_name as author_first_name,\
                                            a.last_name as author_last_name,\
                                            p.id as publisher_id,\
                                            p.name as publisher_name\
                                    FROM books b\
                                    JOIN authors a ON b.author_id = a.id\
                                    JOIN publishers_books pb ON b.id = pb.book_id\
                                    JOIN publishers p ON p.id = pb.publisher_id\
                                    WHERE b.id = $1`, [id]);
    return books[0];
};

const updateByIdAsync = async (id, name, author_id) => {
    const books =  await queryAsync('UPDATE books SET name = $1, \
                                                      author_id = $2 \
                                     WHERE id = $3 \
                                     RETURNING *', [name, author_id, id]);
    return books[0];
};

const deleteByIdAsync = async (id) => {
    const books = await queryAsync('DELETE FROM books WHERE id = $1 \
                                    RETURNING *', [id]);
    return books[0];
};

module.exports = {
    addAsync,
    getAllAsync,
    getByIdAsync,
    updateByIdAsync,
    deleteByIdAsync
}