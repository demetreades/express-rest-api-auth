'use strict';

const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const userService = require('../../services/user');
const { logger, BaseError } = require('../../utils');

module.exports = asyncHandler(async (req, res, next) => {
  if (!req?.user?.username) {
    return next(new BaseError('No user to logout', StatusCodes.NOT_FOUND));
  }

  logger.info(`USER: ${req?.user?.username} logged out`);

  res
    .status(StatusCodes.OK)
    .clearCookie('connect.sid', {
      httpOnly: true,
      expires: new Date(Date.now() + 1000),
      // path: '/',
    })
    .json({
      success: true,
      message: `user: ${req?.user?.username} logged out`,
    });
});
