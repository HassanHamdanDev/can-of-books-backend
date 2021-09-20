'use strict';

const  userModel  = require('../Models/User.Modal');

let usersController = (req, res) => {
    userModel.find().then(data => {
        res.json(data)
    });
};

let getUserController = (req, res) => {
    let userId = req.query.id
    userModel.findOne({ _id: userId }).then(data => {
        res.json(data)
    });
};

module.exports = usersController;


