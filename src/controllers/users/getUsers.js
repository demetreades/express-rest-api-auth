'use strict';

const { StatusCodes } = require('http-status-codes');
const userService = require('@services/user');
const { logger } = require('@utils');

module.exports = async (req, res, next) => {
  try {
    const users = await userService.getAll();

    logger.info(`GET all users, count: ${users.length}`);

    res.status(StatusCodes.OK).json({
      success: true,
      data: users,
    });
  } catch (err) {
    // if (err.isJoi === true) {
    //   next(
    //     new BaseError(err.details[0].message, StatusCodes.UNPROCESSABLE_ENTITY)
    //   );
    // }

    next(err);
  }
};
