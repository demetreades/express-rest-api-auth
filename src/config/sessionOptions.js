'use strict';

require('dotenv').config();
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const dbConnection = require('../services/database/connection');

const sessionStore = new MongoDBStore({
  uri: process.env.MONGO_URI,
  mongooseConnection: dbConnection,
  collection: 'sessions',
});

module.exports = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    secure: false,
  },
};
