'use strict';

const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const userService = require('../../services/userService');
const logger = require('../../utils/logger');

module.exports = asyncHandler(async (req, res, next) => {
  await userService.deleteById(req.params.id);

  logger.info(`DELETE single user with id: ${req.params.id}`);

  res.status(StatusCodes.OK).json({
    success: true,
    data: {},
  });
});
