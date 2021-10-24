'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      required: [true, 'Username is required'],
      minlength: [3, 'Username cannot be less than 3 characters'],
      maxlength: [64, 'Username cannot exceed 64 characters'],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      required: [true, 'Email is required'],
      maxlength: [120, 'Email cannot exceed 120 characters'],
    },
    password: {
      type: String,
      trim: true,
      required: [true, 'Password is required'],
      maxlength: [25, 'Password cannot exceed 25 characters'],
      minlength: [8, 'Password cannot be less than 8 characters'],
      select: false,
    },

    // isActive: {
    //   type: Boolean,
    //   default: true,
    // },

    // role: {
    //   type: String,
    //   enum: ['User', 'Editor', 'Admin'],
    //   default: 'User',
    // },
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
