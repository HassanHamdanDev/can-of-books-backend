'use strict';

const mongoose = require('mongoose');

const userSchema = require('../Schemas/User.Schema');

const userModel = mongoose.model('user', userSchema);

let seedUser = () => {
    let bookList = [
        {
            title: "Notes From the Bathroom",
            description: "A collection of never-before-seen humor pieces—essays, satire, short stories, poetry, cartoons, artwork",
            status: "avalibale",
        },
        {
            title: "I Am Not a Wolf",
            description: "You are a HUMAN MAN navigating every day life, dating, bus etiquette, and other important human concerns. You are definitely NOT A WOLF. ",
            status: "avalibale",
        },
        {
            title: "Yearbook",
            description: "A collection of funny personal essays from one of the writers of Superbad and Pineapple Express and one of the producers of The Disaster Artist, Neighbors, and The Boys.",
            status: "avalibale",
        }
    ];

    let newUser = new userModel({
        name: "Hassan Hamdan",
        email: "hassanhamdandev@gmail.com",
        books: bookList
    });
    newUser.save();
};

module.exports = userModel;
