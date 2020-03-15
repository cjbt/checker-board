require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const stateRouter = require('./api/stateRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

server.use('/api/state', stateRouter);

server.use('/', (req, res) => {
  res.send(`<h1>API WORKS</h1>`);
});

module.exports = server;
