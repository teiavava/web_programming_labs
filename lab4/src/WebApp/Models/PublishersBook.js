const ServerError = require('./ServerError.js');

class PublishersBookPostBody {
    constructor (body) {
        this.bookId = body.bookId;
        this.publisherId = body.publisherId;
        this.price = body.price;
    }

    get BookId () {
        return this.bookId;
    }

    get PublisherId () {
        return this.publisherId;
    }

    get Price () {
        return this.price;
    }
}

class PublishersBookPutBody extends PublishersBookPostBody {
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
    PublishersBookPostBody,
    PublishersBookPutBody
}