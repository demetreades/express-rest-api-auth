'use strict';

const { StatusCodes } = require('http-status-codes');
const { BaseError } = require('../utils');
const User = require('../models/User');

const create = async (body) => {
  const user = await User.create(body);

  if (!user) {
    throw new BaseError('User not found', StatusCodes.NOT_FOUND);
  }

  return user;
};

const getAll = async () => {
  const users = await User.find({}, ['username', 'email']).sort({
    createdAt: -1,
  });

  if (!users) {
    throw new BaseError('Users not found', StatusCodes.NOT_FOUND);
  }

  return users;
};

const getById = async (id) => {
  const user = await User.findById(id);

  if (!user) {
    throw new BaseError('User not found', StatusCodes.NOT_FOUND);
  }

  return user;
};

const updateById = async (id, body) => {
  const user = await User.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    throw new BaseError('User not found', StatusCodes.NOT_FOUND);
  }

  return user;
};

const deleteById = async (id) => {
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    throw new BaseError('User not found', StatusCodes.NOT_FOUND);
  }

  return user;
};

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
};
