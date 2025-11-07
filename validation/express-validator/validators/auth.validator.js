const { body } = require("express-validator");

const loginValidator = () => [
  body("email").isEmail().withMessage("invalid email"),
  body("password")
    .isLength({ min: 6, max: 15 })
    .withMessage("password must be at least 6 characters and max 15 characters"),
];

const registerValidator = () => [
  body("fullname").isLength({ min: 5, max: 35 }).withMessage("fullname is required"),
  // body("age").isNumeric().withMessage("age must be a number"),
  body("age").custom((value, { req }) => {
    if (isNaN(value)) {
      throw new Error("age must be a number");
    }
    if (+value < 18 || +value > 80) {
      throw new Error("age must be between 18 and 80");
    } else {
      return true;
    }
  }),
  body("mobile").isMobilePhone(["fa-IR", "en-US"]).withMessage("mobile format is invalid"),
  body("email").isEmail().withMessage("email is invalid"),
  body("password").isLength({ min: 6, max: 15 }).withMessage("password is must between 6 and 15 characters"),
  // body("passwordConfirm").custom((value, { req }) => {
  //   if (value !== req.body.password) {
  //     throw new Error("pass doesnt match");
  //   }
  //   return true;
  // }),
  body("passwordConfirm")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("passwords do not match"),
];

module.exports = {
  loginValidator,
  registerValidator,
};
