const createUser = require('./users/createUser');
const getUsers = require('./users/getUsers');
const getUserById = require('./users/getUserById');
const updateUser = require('./users/updateUser');
const deleteUserById = require('./users/deleteUserById');
// const revokeUserRole = require('./users/revokeUserRole');
// const assignUserRole = require('./users/assignUserRole');

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUserById,
  // revokeUserRole,
  // assignUserRole,
};
