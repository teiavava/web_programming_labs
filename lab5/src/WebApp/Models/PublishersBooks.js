const ServerError = require('./ServerError.js');

class PublishersBooksPostBody {
    constructor (body) {
        this.bookId = body.bookId;
        this.publisherId = body.publisherId;
        this.price = body.price;

        if (this.bookId == null || this.bookId < 1) {
            throw new ServerError("Book id should be a positive integer", 400);
        }

        if (this.price == null || this.price < 1) {
            throw new ServerError("Book price should be a positive integer", 400);
        }

        if (this.publisherId == null || this.publisherId < 1) {
            throw new ServerError("Publisher id should be a positive integer", 400);
        }
    }

    get BookId () {
        return this.bookId;
    }

    get Price () {
        return this.price;
    }

    get PublisherId () {
        return this.publisherId;
    }
}

class PublishersBooksPutBody extends PublishersBooksPostBody {
    constructor (body) {
        super(body);
        this.price = body.price;

        if (!this.price || this.price < 1) {
            throw new ServerError("Book price should be a positive integer", 400);
        }
    }

    get Price () {
        return this.price;
    }
}

class PublishersBooksResponse {
    constructor(publisherBook) {
        this.bookId = publisherBook.book_id;
        this.publisherId = publisherBook.publisher_id;
        this.price = publisherBook.price;
    }
}

module.exports =  {
    PublishersBooksPostBody,
    PublishersBooksPutBody,
    PublishersBooksResponse
}