/* eslint-disable newline-per-chained-call */
const Joi = require('@hapi/joi');

// Validation login data
const validateLogin = (data) => {
  const schema = {
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  };
  return Joi.validate(data, schema);
};
module.exports.validateLogin = validateLogin;
