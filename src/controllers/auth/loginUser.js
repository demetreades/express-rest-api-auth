'use strict';

const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const userService = require('../../services/user');
const { logger } = require('../../utils');

module.exports = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  logger.info(`CONTROLLER: ${username}, logged in`);

  // console.log(username);
  // console.log(password);

  res.status(StatusCodes.ACCEPTED).json({
    success: true,
    message: `user: ${username}, logged in`,
  });
});
