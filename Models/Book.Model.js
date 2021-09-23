'use strict';

const mongoose = require('mongoose');

const bookSchema = require('../Schemas/Book.Schema');

const bookModel = mongoose.model('book', bookSchema);

module.exports = { bookModel };


