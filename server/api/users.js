const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Joi = require("joi");
const bcrypt = require("bcryptjs");

// Route to list all users
// GET /api/v1/users
router.get("/", (req, res, next) => {
  User.find()
    .select("-password")
    .sort({ date: -1 })
    .then(users => {
      if (!users) {
        res.json({
          message: "No Users Found."
        });
      } else {
        res.json(users);
      }
    })
    .catch(err => next(err));
});

const schema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30),
  password: Joi.string()
    .trim()
    .min(6),
  role: Joi.string().valid("user", "admin"),
  active: Joi.bool()
});

// Route to update the user
// PUT /api/v1/users/:id
router.put("/:id", (req, res, next) => {
  const { username } = req.body;
  const result = Joi.validate(req.body, schema);
  const { id } = req.params;
  // validate the id params
  // find the user with the request id

  // validate the req.body
  if (result.error === null) {
    User.findById(id)
      .then(user => {
        // if not exists - send 4040 error (with user not found)
        if (!user) {
          const error = new Error("User Not Found.");
          res.status(404);
          next(error);
        } else {
          // check if user enter a username already existe
          // I'am HERE..
          User.findOne({ username }, async function(err, result) {
            if (result) {
              // if there is a user
              const error = new Error("This username already token.");
              res.status(422);
              next(error);
            } else {
              // hashed password before insert it to db
              if (req.body.password) {
                req.body.password = await bcrypt.hash(req.body.password, 12);
              }

              // if valid update the user in db

              let updateUser = await User.findOneAndUpdate(
                { _id: id },
                { $set: req.body },
                { useFindAndModify: false }
              );

              updateUser.password = undefined;

              res.json({
                message: "User updated.",
                updateUser
              });
            }
          });
        }
      })
      .catch(err => console.log(err));
  } else {
    // if not valid - send an error with the reason
    const error = new Error(result.error.details[0].message);
    res.status(422);
    next(error);
  }
});

module.exports = router;
