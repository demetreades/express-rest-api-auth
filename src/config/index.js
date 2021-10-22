const { corsOptions } = require('./cors/corsOptions');
const { limitOptions } = require('./limitOptions');
const { sessionOptions } = require('./passport/sessionOptions');

module.exports = {
  corsOptions,
  limitOptions,
  sessionOptions,
};
