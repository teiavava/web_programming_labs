const ServerError = require('./ServerError.js');

class PublisherPostBody {
    constructor (body) {
        this.name = body.name;

        if (!this.name || this.name.length < 4) {
            throw new ServerError("Publisher name is missing", 400);
        }
    }

    get Name () {
        return this.name;
    }
}

class PublisherPutBody extends PublisherPostBody {
    constructor (body, id) {
        super(body);
        this.id = parseInt(id);

        if (this.id == null || this.id < 1) {
            throw new ServerError("Id should be a positive integer", 400);
        }
    }

    get Id () {
        return this.id;
    }
}

class PublisherResponse {
    constructor(publisher) {
        this.id = publisher.id;
        this.name = publisher.name;
        this.bookName = publisher.book_name;
        this.bookId = publisher.book_id;
        this.authorId = publisher.author_id;
        this.lastName = publisher.last_name;
        this.firstName = publisher.first_name;
    }
}

module.exports =  {
    PublisherPostBody,
    PublisherPutBody,
    PublisherResponse
}