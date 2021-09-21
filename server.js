'use strict';

const express = require('express');
const server = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER;
const { seedBook } = require('./Models/Book.Model');
const { booksController, createBookController, removeBookController } = require('./Controllers/Book.Controller');

mongoose.connect(`${MONGO_SERVER}/CanBooksDB`, { useNewUrlParser: true, useUnifiedTopology: true });

server.get('/seed-data', (request, response) => {
  seedBook();
  response.json({
    "massage": "seed created"
  });
});

server.get('/books', booksController);
server.post('/books', createBookController);
server.delete('/books/:id', removeBookController);

server.listen(PORT, () => console.log(`listening on ${PORT}`));
