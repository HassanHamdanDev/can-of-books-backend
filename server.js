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
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const {
  booksController,
  createBookController,
  removeBookController,
  updateBookController
} = require('./Controllers/Book.Controller');

mongoose.connect(`${MONGO_ATLAS}`, { useNewUrlParser: true, useUnifiedTopology: true });

const client = jwksClient({
  // this url comes from your app on the auth0 dashboard 
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
});

const getKey = (header, callback) => {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

server.get('/auth', (req, res) => {
  console.log("i was called")
  // getting the JWT from the request headers
  "Bearer ljdlasiudo87waudljaslidu"
  ["Bearer", "ljdlasiudo87waudljaslidu"]
  const token = req.headers.authorization.split(' ')[1];
  // token="ljdlasiudo87waudljaslidu"
  // checking the token if it is valid/verfied
  jwt.verify(token, getKey, {}, (err, user) => {
    if (err) {
      res.send('invalid token');
    }
    res.send("Your are authenticated/Authorized");
  })
});

server.get("/", (req, res) => { res.status(200).json({ message: "I'm working" }); });



server.get('/books', booksController);
server.post('/books', createBookController);
server.delete('/books/:id', removeBookController);
server.put('/books/:id', updateBookController);

server.listen(PORT, () => console.log(`listening on ${PORT}`));
