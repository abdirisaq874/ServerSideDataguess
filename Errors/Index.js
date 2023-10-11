const BadRequestError = require('./BadRequestError');
const UnAuthenticatedError = require('./UnAuthenticatedError');
const NotAuthorizedError = require('./NotAuthorizedError');
const NotFoundError = require('./NotFoundError');
const ValidationError = require('./ValidationError');

module.exports = {
  BadRequestError,
  UnAuthenticatedError,
  NotAuthorizedError,
  NotFoundError,
  ValidationError,
};
