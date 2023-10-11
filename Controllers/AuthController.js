const crypto = require('crypto');
const { StatusCodes } = require('http-status-codes');
const users = require('../Models/Users');
const BadRequestError = require('../Errors/BadRequestError');
const UnAuthenticatedError = require('../Errors/UnAuthenticatedError');
const NotFoundError = require('../Errors/NotFoundError');
const Utils = require('../Utils');
const createTokenUser = require('../Utils/JWT/CreateTokenUser');
const Token = require('../Models/Token');

const RegisterUser = async (req, res) => {
  const { Name, Email, Password, Role } = req.body;

  // check if the user is already registered
  const emailAlreadyExists = await users.findOne({ Email });
  if (emailAlreadyExists) {
    throw new BadRequestError(`Already registered with email ${Email}`);
  }

  // Create User and register it
  const user = await users.create({
    Name,
    Email,
    Password,
    Role,
  });
  await user.save();
  res.status(201).json({ message: 'you have beenj registere mate!!! hooray' });
};

const GetAllUsers = async (req, res) => {
  const allUsers = await users.find();
  res.status(StatusCodes.OK).send(allUsers);
};

const GetUserById = async (req, res) => {
  const { id: userId } = req.params;
  try {
    const user = await users.findOne({ _id: userId });
    if (!user) {
      throw new NotFoundError(`No user with id : ${userId}`);
    }
    res.status(StatusCodes.OK).send(user);
  } catch (error) {
    throw new NotFoundError(`No user with id : ${userId}`);
  }
};

const SignInUser = async (req, res) => {
  const { Email, Password, Role } = req.body;

  const user = await users.findOne({ Email, Role: Role });

  if (!user) {
    throw new UnAuthenticatedError('invalid credentials');
  }
  const isPasswordCorrect = await user.comparePassword(Password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('invalid credentials');
  }

  const tokenUser = createTokenUser(user);

  // create refresh token
  let refreshToken = '';
  // check for existing token
  const existingToken = await Token.findOne({ user: user._id });

  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) {
      throw new UnAuthenticatedError('Invalid Credentials');
    }
    refreshToken = existingToken.refreshToken;
    Utils.AttachCookiesToResponse({ res, user: tokenUser, refreshToken });
    res
      .status(StatusCodes.OK)
      .json({ user: tokenUser, message: 'Logged In Successfully' });
    return;
  }
  refreshToken = crypto.randomBytes(40).toString('hex');
  const userAgent = req.headers['user-agent'];
  const ip = req.ip;
  const userToken = { refreshToken, ip, userAgent, user: user._id };

  await Token.create(userToken);

  Utils.AttachCookiesToResponse({ res, user: tokenUser, refreshToken });

  res
    .status(StatusCodes.OK)
    .json({ user: tokenUser, message: 'Logged In Successfully' });
};

const LogoutUser = async (req, res) => {
  await Token.findOneAndDelete({ user: req.user.userId });

  res.clearCookie('AccessToken');
  res.clearCookie('RefreshToken');

  // res.cookie('accessToken', 'logout', {
  //   httpOnly: true,
  //   expires: new Date(Date.now()),
  // });
  // res.cookie('refreshToken', 'logout', {
  //   httpOnly: true,
  //   expires: new Date(Date.now()),
  // });
  res.status(StatusCodes.OK).json({ message: 'user logged out!' });
};

module.exports = {
  RegisterUser,
  GetAllUsers,
  GetUserById,
  SignInUser,
  LogoutUser,
};
