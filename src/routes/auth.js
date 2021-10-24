'use strict';

const { Router } = require('express');
const passport = require('passport');

const {
  authController: { loginUser, logOutUser, getProfile },
} = require('../controllers');

const router = Router();

router.post('/login', loginUser, passport.authenticate('local'));
router.get('/logout', logOutUser);
router.get('/profile', getProfile);

module.exports = router;
