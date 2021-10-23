'use strict';

const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { logger, BaseError } = require('../../utils');

module.exports = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  // if (req.user) {
  //   return next(new BaseError('You are already logged in'));
  // }

  logger.info(`CONTROLLER: ${username}, logged in`);

  res.status(StatusCodes.ACCEPTED).json({
    success: true,
    message: `user: ${username}, logged in`,
  });
});
