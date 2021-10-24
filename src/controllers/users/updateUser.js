'use strict';

const { StatusCodes } = require('http-status-codes');
const userService = require('../../services/user');
const { validateUser, validateId } = require('../../services/joiSchema');
const { logger, BaseError } = require('../../utils');

module.exports = async (req, res, next) => {
  try {
    const { body, params: { id } } = req;
    const userId = { _id: id };

    const resultId = await validateId(userId);
    const resultBody = await validateUser(body);

    const user = await userService.updateById(resultId, resultBody);

    logger.info(
      `POST update user with name: ${user.username}, id: ${user._id}`
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
