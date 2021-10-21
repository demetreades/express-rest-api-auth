const corsOptions = require('./cors/corsOptions');
const limitOptions = require('./limitOptions');
const sessionOptions = require('./sessionOptions');
const passport = require('./passport');

module.exports = {
  corsOptions,
  limitOptions,
  passport,
  sessionOptions,
};
