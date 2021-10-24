'use strict';

require('dotenv').config();
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const dbConnection = require('../../services/database/connection');

const sessionStore = new MongoDBStore({
  uri: 'mongodb://localhost:27017/rest-api',
  mongooseConnection: dbConnection,
  collection: 'sessions',
});

module.exports = {
  sessionOptions: {
    secret: process.env.SESSION_SECRET || 'some little big secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      // secure: true,
    },
  },
};
