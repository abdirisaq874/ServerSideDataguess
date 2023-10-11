const NotFoundError = require('./../Errors/NotFoundError');

const NotFoundMiddleware = (req, res) => {
  throw new NotFoundError('Route does not exist');
};

module.exports = NotFoundMiddleware;
