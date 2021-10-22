/* eslint-disable max-statements */
'use strict';

const { StatusCodes } = require('http-status-codes');
const LocalStrategy = require('passport-local');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const userService = require('../../services/user');
const { logger } = require('../../utils');

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser(async (username, done) => {
  try {
    const result = await userService.getByProperty(username);
    if (result) {
      done(null, result);
    }
  } catch (error) {
    logger.error(`LOCAL DESERIALIZE USER: ${error}`);
    done(error, false);
  }
});

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const result = await userService.getByProperty(username, password);
      const matchPassword = await bcrypt.compare(password, result.password);

      if (result && matchPassword) {
        logger.info(`LOCAL STRATEGY: ${result.username} logged in`);
        done(null, result);
      } else {
        logger.error('LOCAL STRATEGY: Wrong Username or Password');
        const message = 'Wrong Username or Password';
        done({ message, statusCode: StatusCodes.UNAUTHORIZED }, false);
      }
    } catch (error) {
      logger.error(`LOCAL STRATEGY: ${error}`);
      done(error, false);
    }
  })
);
