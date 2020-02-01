const Joi = require("joi");

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

module.exports = schema;
