const express = require('express');
const router = express.Router();
const Joi = require('joi');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { display422 } = require('../helpers');
const jwt = require('jsonwebtoken');
const config = require('config');

// secret code
const secret = config.get('jwtSecrete');


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
                display422(res, next, `${username} is already token.`);
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

// POST /auth/signup
router.post('/login', (req, res, next) => {

    const { username, password } = req.body;

    const result = Joi.validate(req.body, schema);

    if(result.error === null) {

        User.findOne({ username }, function (err, user) {

            if(err) {
                next(err);
            };
    
            // check user is in database
            if(user){
                // compare password
                bcrypt.compare(password, user.password).then(result => {
                    // if result is true, the password is correct
                    if(result){
                        // create token for user
                        const payload = {
                            _id: user._id,
                            username: user.username
                        };
                        // sign Token
                        jwt.sign(payload, secret, { expiresIn: '1d' }, (err, token) => {
                            if(err){
                                display422(res, next, "You couldn't create TOKEN.");
                            }
                            
                            res.json({token});
                        });
                    } else {
                        // else return error
                        display422(res, next, 'Password is incorrect.');
                    }
                });
            } else {
                // user not existe
                display422(res, next, `${username} Not Found.`);
            } 
        });

    } else {
        res.status(422);
        const error = new Error('Unable to login.');
        next(error);
    }
});

module.exports = router;