'use strict';

require('module-alias/register');
const { StatusCodes } = require('http-status-codes');
const { logger, BaseError } = require('@utils');

module.exports = async (req, res, next) => {
  try {
    logger.info(`User profile: ${req?.user?.username || 'no profile'}`);

    if (!req.user) {
      return next(
        new BaseError('You need to loggin', StatusCodes.NOT_ACCEPTABLE)
      );
    }

    res.status(StatusCodes.ACCEPTED).json({
      success: true,
      data: req.user,
    });
  } catch (err) {
    next(err);
  }
};
