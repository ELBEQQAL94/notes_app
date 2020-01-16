const express = require('express');
const router = express.Router();
const Joi = require('joi');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const schema = Joi.object({
    username: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
    password: Joi.string()
                .trim()
                .min(6)
                .required()
});


// POST /auth/signup
router.post('/signup', (req, res, next) => {

    const { username, password } = req.body;

    const result = Joi.validate(req.body, schema);

    if(result.error === null) {

        User.findOne({ username }, function (err, user) {

            if(err) {
                next(err);
            };
    
            // make username is unique
            if(user){
                const error = new Error(`${username} is already token.`);
                next(error);

            } else {        
                // hash password before save it
                // Auto-gen a salt and hash
                bcrypt.hash(password, 12).then(hash => {

                    // create new user
                    const newUser = new User({username, password: hash});

                    // save user into db
                    newUser.save();

                    res.status(200).json({
                        message: 'Signup is passed!',
                        user: newUser
                    });

                });
            };
        });

    } else {
        next(result.error.details[0].message);
    };
    
});

module.exports = router;