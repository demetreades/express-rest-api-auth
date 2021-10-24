'use strict';

const { StatusCodes } = require('http-status-codes');
const { logger, BaseError } = require('../../utils');

module.exports = async (req, res, next) => {
  try {
    if (!req?.user?.username) {
      return next(new BaseError('No user to logout', StatusCodes.NOT_FOUND));
    }

    logger.info(`USER: ${req?.user?.username} logged out`);

    req.logout();

    res.status(StatusCodes.OK).json({
      success: true,
      message: `user logged out`,
    });
  } catch (err) {
    next(err);
  }
};
