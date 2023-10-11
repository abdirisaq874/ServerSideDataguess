const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const RolesEnum = require('../Constants/Roles');

const UserSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: (value) => {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid Email address');
        }
      },
    },
    Password: {
      type: String,
      required: true,
      minLength: 8,
      validate: (value) => {
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(value)) {
          throw new Error(
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
          );
        }
      },
    },
    Role: {
      type: String,
      required: true,
      enum: [RolesEnum.ADMIN, RolesEnum.User],
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('Password')) return next();

  this.Password = await bcrypt.hash(this.Password, 12);
  next();
});

UserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.Password);
  return isMatch;
};

UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  user.UserId = user._id;
  delete user._id;
  // Remove sensitive properties
  delete user.Password;
  delete user.__v;
  return user;
};


module.exports = mongoose.model('User', UserSchema);
