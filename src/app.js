'use strict';

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const dbConnection = require('./config/db/connection');
const logger = require('./utils/logger');
const handleErrors = require('./middleware/errors/handleErrors');
const handleMongoErrors = require('./middleware/errors/handleMongoErrors');
const handleNotFound = require('./middleware/errors/handleNotFound');

const userRoutes = require('./routes/api/users');

dbConnection();

const app = express();

//

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRoutes);

//

app.use(handleNotFound);
app.use(handleMongoErrors);
app.use(handleErrors);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
