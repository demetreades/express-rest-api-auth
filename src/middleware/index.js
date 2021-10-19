const handleErrors = require('./errors/handleErrors')
const handleMongoErrors = require('./errors/handleMongoErrors')
const handleNotFound = require('./errors/handleNotFound')

module.exports = {
  handleErrors,
  handleMongoErrors,
  handleNotFound
}