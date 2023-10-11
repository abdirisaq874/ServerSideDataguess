const express = require('express');
const router = express.Router();
const {
  AuthorizePermissionsMiddleware,
  IsItAuthenticatedMiddleware,
  ValidationMiddleware,
  CheckPermissions,
} = require('../Middlewares');
const RolesEnum = require('../Constants/Roles');
const AuthController = require('../Controllers/AuthController');
const AuthValidations = require('../Utils');
//------------------------------------------------- Student routes ------------------------------------------------
router.post(
  '/RegisterUser',
  ValidationMiddleware(AuthValidations.RegistrationValidatorSchema),
  AuthController.RegisterUser
);
router.post(
  '/Login',
  ValidationMiddleware(AuthValidations.LoginValidatorSchema),
  AuthController.SignInUser
);
router.get(
  '/users',
  IsItAuthenticatedMiddleware,
  AuthorizePermissionsMiddleware(RolesEnum.ADMIN),
  AuthController.GetAllUsers
);
router
  .route('/users/:id')
  .get(
    IsItAuthenticatedMiddleware,
    CheckPermissions,
    AuthController.GetUserById
  );
router.post('/Logout',IsItAuthenticatedMiddleware, AuthController.LogoutUser);

module.exports = router;
