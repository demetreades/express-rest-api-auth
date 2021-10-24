'use strict';

require('module-alias/register');
const { Router } = require('express');
const {
  usersController: {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUserById,
  },
} = require('@controllers');
const { isAuthenticated } = require('./utils/isAuthenticated');

const router = Router();

router.route('/').get(getUsers).post(isAuthenticated, createUser);

router
  .route('/:id')
  .get(getUserById)
  .put(isAuthenticated, updateUser)
  .delete(isAuthenticated, deleteUserById);

module.exports = router;
