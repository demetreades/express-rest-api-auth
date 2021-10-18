'use strict';

const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const userService = require('../../services/userService');
const logger = require('../../utils/logger');

module.exports = asyncHandler(async (req, res, next) => {
  const { params: { id } } = req;
  await userService.deleteById(id);

  logger.info(`DELETE single user with id: ${id}`);

  res.status(StatusCodes.OK).json({
    success: true,
    data: {},
  });
});
