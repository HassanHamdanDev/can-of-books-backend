'use strict';

const express = require('express');
const server = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT;
const MONGO_ATLAS = process.env.MONGO_ATLAS;
// const { seedBook } = require('./Models/Book.Model');
const {
  booksController,
  createBookController,
  removeBookController,
  updateBookController
} = require('./Controllers/Book.Controller');


mongoose.connect(`${MONGO_ATLAS}`, { useNewUrlParser: true, useUnifiedTopology: true });

server.get("/", (req, res) => { res.status(200).json({ message: "I'm working" }); });

// server.get('/seed-data', (request, response) => {
//   let data=seedBook();
//   response.status(200).json(data);
// });

server.get('/books', booksController);
server.post('/books', createBookController);
server.delete('/books/:id', removeBookController);
server.put('/books/:id', updateBookController);

server.listen(PORT, () => console.log(`listening on ${PORT}`));
