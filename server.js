'use strict';

const express = require('express');
const server = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
server.use(cors());
const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER;
// const  seedBook  = require('./Models/Book.Model');
// const  seedUser  = require('./Models/User.Modal');
const usersController = require('./Controllers/User.Controller');
const booksController = require('./Controllers/Book.Controller');


mongoose.connect(`${MONGO_SERVER}/CanBooksDB`, { useNewUrlParser: true, useUnifiedTopology: true });

// server.get('/seed-data', (request, response) => {
//   seedBook();
//   seedUser();
//   response.json({
//     "massage": "seed created"
//   });
// });

server.get('/users', usersController);
server.get('/books', booksController);

server.listen(PORT, () => console.log(`listening on ${PORT}`));
