'use strict';

const { bookModel } = require('../Models/Book.Model');

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
    })
    addBook.save();
    res.status(200).json(addBook);
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

module.exports = { booksController, createBookController, removeBookController };