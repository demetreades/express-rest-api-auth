'use strict';

const { StatusCodes } = require('http-status-codes');
const { logger, BaseError } = require('../../utils');

module.exports = async (req, res, next) => {
  try {
    logger.info(`User profile: ${req?.user?.username}`);

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
