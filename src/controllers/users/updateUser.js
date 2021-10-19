'use strict';

const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const userService = require('../../services/userService');
const { logger } = require('../../utils');

module.exports = asyncHandler(async (req, res, next) => {
  const { body, params: { id } } = req;
  const user = await userService.updateById(id, body);

  logger.info(`POST update user with id: ${user._id}`);

  res.status(StatusCodes.OK).json({
    success: true,
    data: user,
  });
});
