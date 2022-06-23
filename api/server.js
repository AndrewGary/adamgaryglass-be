const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const connectDB = require('../config/db');
const dotenv = require('dotenv').config();

const productRouter = require('./products/products-router');

connectDB();

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/products', productRouter);

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
