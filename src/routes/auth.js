'use strict';

const { Router } = require('express');
const passport = require('passport');

const loginUser = require('../controllers/auth/loginUser');
const logOutUser = require('../controllers/auth/logOutUser');

const router = Router();

router.post('/login', passport.authenticate('local'), loginUser);
router.get('/logout', logOutUser);

module.exports = router;
