'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const emailValidator = require('express-email-validation'); // mporei na einai kai lathos to path

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Username is required'],
      minlength: [3, 'Username cannot be less than 3 characters'],
      maxlength: [64, 'Username cannot exceed 64 characters'],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Email is required'],
      lowercase: true,
      maxlength: [100, 'Email cannot exceed 120 characters'],
      // validate: {
      //   validator: emailValidator.validate,
      //   message: (input) => `${input.value} is not a valid email address!`,
      // },
    },
    password: {
      type: String,
      trim: true,
      required: [true, 'Password is required'],
      maxlength: [25, 'Password cannot exceed 25 characters'],
      minlength: [6, 'Password cannot be less than 6 characters'],
      select: false,
    },

    // isActive: {
    //   type: Boolean,
    //   default: true,
    // },

    // role: {
    //   type: String,
    //   enum: ['user', 'publisher'],
    //   default: 'user',
    // },

    // resetPasswordToken: String,
    // resetPasswordExpire: Date,
  },

  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', userSchema);

// // Sign JWT and return
// UserSchema.methods.getSignedJwtToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRE,
//   });
// };

// // Match user entered password to hashed password in database
// UserSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// // Generate and hash password token
// UserSchema.methods.getResetPasswordToken = function () {
//   // Generate token
//   const resetToken = crypto.randomBytes(20).toString('hex');

//   // Hash token and set to resetPasswordToken field
//   this.resetPasswordToken = crypto
//     .createHash('sha256')
//     .update(resetToken)
//     .digest('hex');

//   // Set expire
//   this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

//   return resetToken;
// };
