'use strict';

const { StatusCodes } = require('http-status-codes');
const { validateUsername } = require('../../services/joiSchema');
const userService = require('../../services/user');
const { logger, BaseError } = require('../../utils');

module.exports = async (req, res, next) => {
  try {
    const { username } = req.body;

    const { username: result } = await validateUsername({ username });

    const user = await userService.getByProperty(result);

    logger.info(`CONTROLLER: ${username}, logged in`);

    req.login(user, (err) => {
      if (err) {
        if (err.isJoi === true) {
          return next(
            new BaseError(
              err.details[0].message,
              StatusCodes.UNPROCESSABLE_ENTITY
            )
          );
        }

        return next(err);
      }
    });

    res.status(StatusCodes.ACCEPTED).json({
      success: true,
      message: `user: ${username}, logged in`,
    });
  } catch (err) {
    next(err);
  }
};
