"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(id, author, title, price, status) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.price = price;
        this.status = status;
    }
    return Book;
}());
exports.default = Book;
