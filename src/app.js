'use strict';

require('dotenv').config();
const express = require('express');
// const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const passport = require('passport');

const {
  handleErrors,
  handleMongoErrors,
  handleNotFound,
} = require('./middleware');
const {
  dbConnection,
  corsOptions,
  limitOptions,
  sessionOptions,
} = require('./config');

const userRoutes = require('./routes/users');

dbConnection();

const app = express();

app.use(helmet());
app.use(rateLimit(limitOptions));
app.use(cors(corsOptions));

// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.json({ message: 'development root endpoint' }));
app.use('/api/users', userRoutes);

app.use(handleNotFound);
app.use(handleMongoErrors);
app.use(handleErrors);

//

module.exports = app;
