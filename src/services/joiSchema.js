'use strict';

const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const validateId = (id) => {
  const idValidationSchema = Joi.object({
    _id: Joi.objectId().required(),
  });

  return idValidationSchema.validateAsync(id);
};

const validateUser = (user) => {
  const userValidationSchema = Joi.object({
    username: Joi.string().lowercase().min(3).max(64).required(),
    email: Joi.string().email().lowercase().max(120).required(),
    password: Joi.string().min(8).max(25).required(),
  });

  return userValidationSchema.validateAsync(user);
};

const validateUsername = (username) => {
  const usernameValidationSchema = Joi.object({
    username: Joi.string().lowercase().min(3).max(64).required(),
  });

  return usernameValidationSchema.validateAsync(username);
};

module.exports = {
  validateId,
  validateUser,
  validateUsername,
};
