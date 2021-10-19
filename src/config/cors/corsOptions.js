'use strict';

const { StatusCodes } = require('http-status-codes');

const { BaseError } = require('../../utils');
const allowedOrigins = require('./allowedOrigins');

module.exports = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new BaseError(StatusCodes.UNAUTHORIZED, 'Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: StatusCodes.OK,
};
