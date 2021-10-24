'use strict';

require('module-alias/register');
const { StatusCodes } = require('http-status-codes');
const { BaseError } = require('@utils');
const User = require('@models');

module.exports = async () => {
  const users = await User.find({}, ['username', 'email']).sort({
    createdAt: -1,
  });

  if (!users) {
    throw new BaseError('Users not found', StatusCodes.NOT_FOUND);
  }

  return users;
};
