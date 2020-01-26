const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { display422, createTokenSendResponse } = require('../../helpers');
const User = require('../../models/User');

// secret code
const secret = process.env.jwtSecrete;

const tokenError = "You couldn't create TOKEN.";

const schema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi.string()
    .trim()
    .min(6)
    .required(),
});

// POST /auth/signup
exports.signUp = (req, res, next) => {
  const { username, password } = req.body;

  const result = Joi.validate(req.body, schema);

  if (result.error === null) {
    User.findOne({ username }, (err, user) => {
      if (err) {
        next(err);
      }

      // make username is unique
      if (user) {
        display422(res, next, `${username} is already token.`);
      } else {
        // hash password before save it
        // Auto-gen a salt and hash
        bcrypt.hash(password, 12).then((hash) => {
          // create token to new user
          jwt.sign(
            { username, hash },
            secret,
            { expiresIn: '1d' },
            (error, token) => {
              if (error) {
                display422(res, next, tokenError);
              }

              // create new user
              const newUser = new User({
                username,
                password: hash,
                active: true,
                role: 'user',
              });

              // insert user to db
              newUser.save().then((data) => {
                data.password = undefined;
                data.__v = undefined;

                res.status(200).json({
                  message: 'Signup is passed.',
                  token,
                  user: newUser,
                });
              });
            },
          );
        });
      }
    });
  } else {
    const error = new Error(result.error.details[0].message);
    res.status(422);
    next(error);
  }
};

// POST /auth/signup
exports.logIn = (req, res, next) => {
  const { username, password } = req.body;

  const result = Joi.validate(req.body, schema);

  if (result.error === null) {
    User.findOne({ username }, (err, user) => {
      if (err) {
        next(err);
      }

      // check user is in database
      if (user && user.active) {
        // compare password
        bcrypt.compare(password, user.password).then((data) => {
          // if result is true, the password is correct
          if (data) {
            createTokenSendResponse(user, secret, res, next, tokenError);
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
};
