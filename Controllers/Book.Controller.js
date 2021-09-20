'use strict';

const  bookModel  = require('../Models/Book.Model');

let booksController = (req, res) => {
    bookModel.find().then(data => {
        res.json(data)
    });
}

module.exports = booksController;