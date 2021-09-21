'use strict';

const { bookModel } = require('../Models/Book.Model');
const bookSchema = require('../Schemas/Book.Schema');

let booksController = (req, res) => {
    bookModel.find({}).then(data => {
        res.json(data)
    });
};

let getBookController = (req, res) => {
    let bookId = req.query.id
    bookModel.findOne({ _id: bookId }).then(data => {
        res.json(data)
    });
};

let createBookController = (req, res) => {
    let { title, description, status, email } = req.body;
    let addBook = new bookModel({
        title: title,
        description: description,
        status: status,
        email: email
    });
    addBook.save();
    res.status(201).json(addBook);
};

const removeBookController = (req, res) => {
    let bookId = req.params.id;
    bookModel.findByIdAndDelete(bookId, async (err) => {
        if (err) {
            res.status(500).send("not deleted");
        }
        let booksData = await bookModel.find({});
        res.status(200).json(booksData);
    });
}
let updateBookController = async (req, res) => {
    let bookId = req.params.id;
    let updateBook = req.body;
    bookModel.findOne({ _id: bookId }).then(book => {
        book.title = updateBook.title;
        book.description = updateBook.description;
        book.status = updateBook.status;
        book.email = updateBook.email;
        book.save();
    });
    let afterUpdate = await bookModel.find({});
    res.status(200).send(afterUpdate);
}

module.exports = { booksController, createBookController, removeBookController, updateBookController };