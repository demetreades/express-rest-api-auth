'use strict';

const { logger } = require('../utils');

module.exports = (req, res, next) => {
  logger.warn(`ACTIVE USER: ${req?.user?.username || 'no user!'}`); // test
  next();
};
