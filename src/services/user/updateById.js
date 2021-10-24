'use strict';

require('module-alias/register');
const { StatusCodes } = require('http-status-codes');
const { BaseError } = require('@utils');
const User = require('@models');

module.exports = async (id, body) => {
  const user = await User.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    throw new BaseError('User not found', StatusCodes.NOT_FOUND);
  }

  return user;
};
