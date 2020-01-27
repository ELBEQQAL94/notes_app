const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { showError, createTokenSendResponse } = require('../../helpers');
const User = require('../../models/User');

// secret code
const secret = process.env.jwtSecrete;

const tokenError = "You couldn't create TOKEN.";

exports.getAuth = (req, res) => {
  res.json({
    message: 'hello, auth route',
  });
};

// POST /auth/signup
exports.signUp = (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ username }, (err, user) => {
    if (err) {
      next(err);
    }

    // make username is unique
    if (user) {
      showError(res, next, `${username} is already token.`);
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
              showError(res, next, tokenError);
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
};

// POST /auth/signup
exports.logIn = (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ username }, (err, user) => {
    if (err) {
      next(err);
    }

    // check user is in db
    if (user && user.active) {
      // compare password
      bcrypt.compare(password, user.password).then((data) => {
        // if result is true, the password is correct
        if (data) {
          createTokenSendResponse(user, secret, res, next, tokenError);
        } else {
          // else return error
          showError(res, next, 'Password is incorrect.');
        }
      });
    } else {
      // user not existe
      showError(res, next, `${username} Not Found.`);
    }
  });
};
