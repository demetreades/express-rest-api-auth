'use strict';

const { BaseError } = require('../../utils');
const { StatusCodes } = require('http-status-codes');

exports.isAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next(new BaseError('Unauthorized', StatusCodes.UNAUTHORIZED));
  }
  next();
};
