const Token = require('../Models/Token');
const CustomError = require('../Errors');
const { isTokenValid, AttachCookiesToResponse } = require('../Utils');

const IsItAuthenticatedMiddleware = async (req, res, next) => {
  const { AccessToken, RefreshToken } = req.signedCookies;

  try {
    if (AccessToken) {
      const { payload } = isTokenValid(AccessToken);
      req.user = payload.user;
      return next();
    }
    const { payload } = isTokenValid(RefreshToken);
    const ExistingToken = await Token.findOne({
      user: payload.user.userId,
      refreshToken: payload.refreshToken,
    });

    if (!ExistingToken || !ExistingToken?.isValid) {
      throw new CustomError.UnAuthenticatedError('UnAuthenticated');
    }
    AttachCookiesToResponse({
      res,
      user: payload.user,
      refreshToken: ExistingToken.refreshToken,
    });

    req.user = payload.user;
    next();
  } catch (e) {
    throw new CustomError.UnAuthenticatedError('UnAuthenticated');
  }
};

const AuthorizePermissionsMiddleware = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.NotAuthorizedError(
        'Unauthorized to access this route'
      );
    }
    next();
  };
};

module.exports = {
  IsItAuthenticatedMiddleware,
  AuthorizePermissionsMiddleware,
};
