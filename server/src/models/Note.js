const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const requiredString = {
  type: String,
  require: true,
};

const NoteSchema = new Schema({
  title: requiredString,
  description: requiredString,
  email: requiredString,
  user_id: requiredString,
  __v: {
    type: Number,
    select: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('Note', NoteSchema);
