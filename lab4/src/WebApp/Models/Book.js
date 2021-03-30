const ServerError = require('./ServerError.js');

class BookPostBody {
    constructor (body) {
        this.name = body.name;
        this.authorId = body.authorId;

        if (this.name == null || this.name.length < 4) {
            throw new ServerError("Book name is missing", 400);
        }
    
        if (!this.authorId || this.authorId < 1) {
            throw new ServerError("authorId should be a positive integer", 400);
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

module.exports =  {
    BookPostBody,
    BookPutBody
}