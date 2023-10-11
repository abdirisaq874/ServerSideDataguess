const {
  CreateJwt,
  isTokenValid,
  AttachCookiesToResponse,
} = require('./JWT/jwt');
const {
  RegistrationValidatorSchema,
  LoginValidatorSchema,
} = require('./Validations/AuthValidations');

const {
  CategoryValidatorSchema,
} = require('./Validations/CategoryValidations');
const { CourseValidatorSchema } = require('./Validations/CourseValidations');

const SendVerificationEmail = require('./Emails/SendVerificationEmail');

module.exports = {
  RegistrationValidatorSchema,
  LoginValidatorSchema,
  CreateJwt,
  isTokenValid,
  AttachCookiesToResponse,
  SendVerificationEmail,
  CategoryValidatorSchema,
  CourseValidatorSchema,
};
