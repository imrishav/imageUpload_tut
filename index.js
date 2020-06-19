const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const app = express();
const userUpload = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', userUpload);

app.listen(3001, () => {
  console.log('Running...');
});
