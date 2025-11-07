const { Joi } = require("express-validation");

const loginValidator = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(6)
      .max(15)
      .required()
      .regex(/[a-zA-Z0-9]{6,10}/),
  }),
};
const registerValidator = {
  body: Joi.object({
    email: Joi.string().email().message("invalid email").required(),
    password: Joi.string()
      .min(6)
      .max(15)
      .required()
      .regex(/[a-zA-Z0-9]{6,10}/),
    passwordConfirm: Joi.string().valid(Joi.ref("password")).required(),
    // passwordConfirm: Joi.ref("password"),
    username: Joi.string().alphanum().min(3).max(30).required(),
    age: Joi.number().min(18).max(80).required(),
  }),
};

module.exports = {
  loginValidator,
  registerValidator,
};
