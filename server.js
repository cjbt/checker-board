const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan('dev'));

server.use('/', (req, res) => {
  res.send(`<h1>API WORKS</h1>`);
});

module.exports = server;
