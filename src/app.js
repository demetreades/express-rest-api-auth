'use strict';

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const {
  handleErrors,
  handleMongoErrors,
  handleNotFound,
} = require('./middleware');
const { dbConnection, corsOptions, limitOptions } = require('./config');

const userRoutes = require('./routes/users');

dbConnection();

const app = express();

app.use(helmet());
app.use(rateLimit(limitOptions));
app.use(cors(corsOptions));

// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.json({ message: 'App is working' }));
app.use('/api/users', userRoutes);

app.use(handleNotFound);
app.use(handleMongoErrors);
app.use(handleErrors);

//

module.exports = app;
