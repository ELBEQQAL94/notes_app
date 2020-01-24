const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    active: {
        type: Boolean
    },
    role: {
        type: String
    },
    __v: { 
        type: Number, 
        select: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('User', UserSchema);