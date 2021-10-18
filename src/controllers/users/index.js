const createUser = require('./createUser');
const getUsers = require('./getUsers');
const getUserById = require('./getUserById');
const updateUser = require('./updateUser');
const deleteUserById = require('./deleteUserById');
// const revokeUserRole = require('./revokeUserRole');
// const assignUserRole = require('./assignUserRole');

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUserById,
  // revokeUserRole,
  // assignUserRole,
}