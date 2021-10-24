'use strict';

const { Router } = require('express');
const {
  usersController: {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUserById,
  },
} = require('../controllers');

const router = Router();

router
  .route('/')
  .get(getUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUserById);

module.exports = router;
