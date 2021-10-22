const { corsOptions } = require('./cors/corsOptions');
const { limitOptions } = require('./limitOptions');
const { sessionOptions } = require('./passport/sessionOptions');
const passport = require('./passport/passport');

module.exports = {
  corsOptions,
  limitOptions,
  passport,
  sessionOptions,
};
