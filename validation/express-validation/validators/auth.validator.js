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


module.exports = {
  loginValidator,
};