const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const NoteSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    user_id: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Note', NoteSchema);