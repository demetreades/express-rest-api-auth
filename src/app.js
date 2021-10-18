'use strict';

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const dbConnection = require('./config/db/connection');
const handleErrors = require('./middleware/errors/handleErrors');
const handleMongoErrors = require('./middleware/errors/handleMongoErrors');
const handleNotFound = require('./middleware/errors/handleNotFound');
// const logger = require('./utils/logger');

const userRoutes = require('./routes/api/users');

dbConnection();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRoutes);

app.use(handleNotFound);
app.use(handleMongoErrors);
app.use(handleErrors);

//

module.exports = app;
