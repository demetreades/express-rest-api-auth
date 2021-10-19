const corsOptions = require('./cors/corsOptions');
const limitOptions = require('./limitOptions');
const dbConnection = require('./db/connection');

module.exports = {
  corsOptions,
  limitOptions,
  dbConnection,
};
