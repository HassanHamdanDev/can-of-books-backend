'use strict';

const mongoose = require('mongoose');
const bookSchema = require('../Schemas/Book.Schema');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    books: [bookSchema]
});

module.exports = userSchema;