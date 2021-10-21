'use strict';

const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const userService = require('../../services/user');
const { logger } = require('../../utils');

module.exports = asyncHandler(async (req, res, next) => {
  const { body } = req;
  const user = await userService.create(body);

  logger.info(
    `POST user created with, username: ${user.username} id: ${user._id}`
  );

  res.status(StatusCodes.CREATED).json({
    success: true,
    data: user,
  });
});
