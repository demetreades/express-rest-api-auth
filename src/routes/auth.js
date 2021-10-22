'use strict';

const { Router } = require('express');
const passport = require('passport');

const loginUser = require('../controllers/auth/loginUser');

const router = Router();

router.post('/login', passport.authenticate('local'), loginUser);

module.exports = router;
