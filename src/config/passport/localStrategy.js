'use strict';

const { StatusCodes } = require('http-status-codes');
const LocalStrategy = require('passport-local');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const userService = require('../../services/user');
const { logger } = require('../../utils');

passport.serializeUser((user, done) => {
  return done(null, user.username);
});

passport.deserializeUser(async (username, done) => {
  try {
    const result = await userService.getByProperty(username);
    return done(null, result);
  } catch (err) {
    logger.error(`LOCAL DESERIALIZE USER: ${err}`);
    return done(err, false);
  }
});

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const result = await userService.getByProperty(username, password);
      const matchPassword = await bcrypt.compare(password, result.password);

      if (result && matchPassword) {
        logger.info(`LOCAL STRATEGY: ${result.username} logged in`);
        return done(null, result);
      }

      logger.error('LOCAL STRATEGY: Wrong Username or Password');
      const message = 'Wrong Username or Password';

      return done({ message, statusCode: StatusCodes.UNAUTHORIZED }, false);
    } catch (err) {
      logger.error(`LOCAL STRATEGY: ${err}`);
      return done(err);
    }
  })
);
