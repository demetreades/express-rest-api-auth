const logger = require('./logger');
const BaseError = require('./errors/BaseError');
const handleNotFound = require('./errors/handleNotFound');
const handleMongoErrors = require('./errors/handleMongoErrors');
const handleErrors = require('./errors/handleErrors');
const handleExit = require('./handleExit');
const normalizePort = require('./normalizePort');

module.exports = {
  logger,
  BaseError,
  handleNotFound,
  handleMongoErrors,
  handleErrors,
  handleExit,
  normalizePort,
};
