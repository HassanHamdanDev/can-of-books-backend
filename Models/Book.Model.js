'use strict';

const mongoose = require('mongoose');

const bookSchema = require('../Schemas/Book.Schema');

const bookModel = mongoose.model('book', bookSchema);

let seedBook = () => {
    let fistBook = new bookModel(
        {
            title: "Notes From the Bathroom",
            description: "A collection of never-before-seen humor pieces—essays, satire, short stories, poetry, cartoons, artwork",
            status: "avalibale",
        });
    let secondBook = new bookModel(
        {
            title: "I Am Not a Wolf",
            description: "You are a HUMAN MAN navigating every day life, dating, bus etiquette, and other important human concerns. You are definitely NOT A WOLF. ",
            status: "avalibale",
        }
    );
    let thirdBook = new bookModel(
        {
            title: "Yearbook",
            description: "A collection of funny personal essays from one of the writers of Superbad and Pineapple Express and one of the producers of The Disaster Artist, Neighbors, and The Boys.",
            status: "avalibale",
        }
    );
    fistBook.save();
    secondBook.save();
    thirdBook.save();
};

module.exports = bookModel;