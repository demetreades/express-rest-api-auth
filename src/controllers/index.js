const createUser = require('./users/createUser');
const getUsers = require('./users/getUsers');
const getUserById = require('./users/getUserById');
const updateUser = require('./users/updateUser');
const deleteUserById = require('./users/deleteUserById');
// const revokeUserRole = require('./users/revokeUserRole');
// const assignUserRole = require('./users/assignUserRole');

const loginUser = require('./auth/loginUser');
const logOutUser = require('./auth/logOutUser');
const getProfile = require('./auth/getProfile');

module.exports = {
  authController: {
    loginUser,
    logOutUser,
    getProfile,
  },
  usersController: {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUserById,
    // revokeUserRole,
    // assignUserRole,}
  },
};
