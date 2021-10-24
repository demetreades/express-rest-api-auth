'use strict';

const { StatusCodes } = require('http-status-codes');
const userService = require('../../services/user');
const { validateUser } = require('../../services/joiSchema');
const { logger, BaseError } = require('../../utils');

module.exports = async (req, res, next) => {
  try {
    const { body } = req;

    const result = await validateUser(body);
    const user = await userService.create(result);

    logger.info(
      `POST user created with, username: ${user.username} id: ${user._id}`
    );

    res.status(StatusCodes.CREATED).json({
      success: true,
      data: user,
    });
  } catch (err) {
    if (err.isJoi === true) {
      next(
        new BaseError(err.details[0].message, StatusCodes.UNPROCESSABLE_ENTITY)
      );
    }

    next(err);
  }
};
