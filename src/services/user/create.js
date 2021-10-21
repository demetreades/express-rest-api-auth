'use strict';

const { StatusCodes } = require('http-status-codes');
const { BaseError } = require('../../utils');
const User = require('../models/User');

module.exports = async (body) => {
  const user = await User.create(body);

  if (!user) {
    throw new BaseError('User not found', StatusCodes.NOT_FOUND);
  }

  return user;
};
