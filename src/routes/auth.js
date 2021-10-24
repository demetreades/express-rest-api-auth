'use strict';

require('module-alias/register');
const { Router } = require('express');
const passport = require('passport');

const {
  authController: { loginUser, logOutUser, getProfile },
} = require('@controllers');
const { isAuthenticated } = require('./utils/isAuthenticated');

const router = Router();

router.post('/login', passport.authenticate('local'), loginUser);
router.get('/logout', logOutUser);
router.get('/profile', isAuthenticated, getProfile);

module.exports = router;
