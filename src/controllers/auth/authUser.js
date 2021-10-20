'use strict';

const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const userService = require('../../services/userService');
const { logger } = require('../../utils');

module.exports = asyncHandler(async (req, res, next) => {
  logger.info('auth user');

  res.status(StatusCodes.OK).json({
    success: true,
    data: {},
  });
});
