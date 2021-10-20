const corsOptions = require('./cors/corsOptions');
const limitOptions = require('./limitOptions');
const sessionOptions = require('./sessionOptions');
const dbConnection = require('./db/connection');
const passport = require('./passport');

module.exports = {
  corsOptions,
  limitOptions,
  dbConnection,
  passport,
};
