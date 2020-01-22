const express = require("express");
const router = express.Router();
const Joi = require("joi");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { display422, createTokenSendResponse } = require("../helpers");
const config = require("config");
const jwt = require("jsonwebtoken");

// secret code
const secret = config.get("jwtSecrete");

const token_error = "You couldn't create TOKEN.";

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
router.post("/signup", (req, res, next) => {
  const { username, password } = req.body;

  const result = Joi.validate(req.body, schema);

  if (result.error === null) {
    User.findOne({ username }, function(err, user) {
      if (err) {
        next(err);
      }

      // make username is unique
      if (user) {
        display422(res, next, `${username} is already token.`);
      } else {
        // hash password before save it
        // Auto-gen a salt and hash
        bcrypt.hash(password, 12).then(hash => {
          // create token to new user
          jwt.sign(
            { username, hash },
            secret,
            { expiresIn: "1d" },
            (err, token) => {
              if (err) {
                display422(res, next, message);
              }

              // create new user
              const newUser = new User({ username, password: hash });

              // insert user to db
              newUser.save();

              res.status(200).json({
                message: "Signup is passed!",
                token,
                user: newUser
              });
            }
          );
        });
      }
    });
  } else {
    const error = new Error(result.error.details[0].message);
    res.status(422);
    next(error);
  }
});

// POST /auth/signup
router.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  const result = Joi.validate(req.body, schema);

  if (result.error === null) {
    User.findOne({ username }, function(err, user) {
      if (err) {
        next(err);
      }

      // check user is in database
      if (user) {
        // compare password
        bcrypt.compare(password, user.password).then(result => {
          // if result is true, the password is correct
          if (result) {
            createTokenSendResponse(user, secret, res, next, token_error);
          } else {
            // else return error
            display422(res, next, "Password is incorrect.");
          }
        });
      } else {
        // user not existe
        display422(res, next, `${username} Not Found.`);
      }
    });
  } else {
    res.status(422);
    const error = new Error("Unable to login.");
    next(error);
  }
});

module.exports = router;
