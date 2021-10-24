'use strict';

const { StatusCodes } = require('http-status-codes');
const userService = require('../../services/user');
const { validateId } = require('../../services/joiSchema');
const { logger, BaseError } = require('../../utils');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = { _id: id };

    const resultId = await validateId(userId);
    const user = await userService.getById(resultId);

    logger.info(
      `GET single user with username: ${user.username} id: ${user._id}`
    );

    res.status(StatusCodes.OK).json({
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
