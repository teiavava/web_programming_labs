const ServerError = require('./ServerError.js');

class BookPostBody {
    constructor (body) {
        this.name = body.name;
        this.authorId = body.authorId;

        if (this.name == null || this.name.length < 4) {
            throw new ServerError("Book name is missing", 400);
        }

        if (!this.authorId || this.authorId < 1) {
            throw new ServerError("Author id should be a positive integer", 400);
        }
    }

    get Name () {
        return this.name;
    }

    get AuthorId () {
        return this.authorId;
    }
}
class BookPutBody extends BookPostBody {
    constructor (body, id) {
        super(body);
        this.id = parseInt(id);

        if (!this.id || this.id < 1) {
            throw new ServerError("Id should be a positive integer", 400);
        }
    }

    get Id () {
        return this.id;
    }
}

class BookResponse {
    constructor(book) {
        this.id = book.id;
        this.name = book.name;
        this.lastName = book.last_name;
        this.firstName = book.first_name;
        this.authorId = book.author_id;
        this.publisherName = book.publisher_name;
        this.publisherId = book.publisher_id;
    }
}

module.exports =  {
    BookPostBody,
    BookPutBody,
    BookResponse
}