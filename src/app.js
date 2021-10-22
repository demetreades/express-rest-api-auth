'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const passport = require('passport');

require('./config/passport/localStrategy');

const dbConnection = require('./services/database/connection');
const { handleErrors, handleMongoErrors, handleNotFound } = require('./utils');
const { corsOptions, limitOptions, sessionOptions } = require('./config');

const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

dbConnection();

const app = express();

app.use(session(sessionOptions));

app.use(helmet());
app.use(rateLimit(limitOptions));
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => res.json({ message: 'development root endpoint' }));

app.use(handleNotFound);
app.use(handleMongoErrors);
app.use(handleErrors);

//

module.exports = app;
