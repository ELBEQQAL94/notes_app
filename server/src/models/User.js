const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const requiredString = {
  type: String,
  require: true,
};

const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: requiredString,
  username: requiredString,
  active: {
    type: Boolean,
  },
  role: requiredString,
  __v: {
    type: Number,
    select: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('User', UserSchema);
