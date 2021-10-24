'use strict';

const { StatusCodes } = require('http-status-codes');
const { logger } = require('../../utils');

module.exports = async (req, res, next) => {
  try {
    const { username } = req.body;

    logger.info(`CONTROLLER: ${username}, logged in`);

    res.status(StatusCodes.ACCEPTED).json({
      success: true,
      message: `user: ${username}, logged in`,
    });
  } catch (err) {
    next(err);
  }
};
