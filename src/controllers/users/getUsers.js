'use strict';

const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const userService = require('../../services/userService');
const { logger } = require('../../utils');

module.exports = asyncHandler(async (req, res, next) => {
  const users = await userService.getAll();

  logger.info(`GET all users, count: ${users.length}`);

  res.status(StatusCodes.OK).json({
    success: true,
    data: users,
  });
});
