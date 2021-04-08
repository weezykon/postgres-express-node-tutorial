/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// eslint-disable-next-line consistent-return
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // for preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.get('/', (req, res, next) => {
  res.status(200).send({
    message: 'Welcome to the beginning of asana api.',
  });
  next();
});

module.exports = app;
