'use strict';

const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const userService = require('../../services/userService');
const logger = require('../../utils/logger');

module.exports = asyncHandler(async (req, res, next) => {
  const user = await userService.getById(req.params.id);

  logger.info(
    `GET single user with username: ${user.username} id: ${user._id}`
  );

  res.status(StatusCodes.OK).json({
    success: true,
    data: user,
  });
});
