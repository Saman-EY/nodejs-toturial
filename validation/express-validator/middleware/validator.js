const { validationResult } = require("express-validator");

function checkValidation(req, res, next) {
  const error = validationResult(req);
  let obj = {};
  error?.errors?.map((item) => {
    obj[item.path] = item.msg;
  });
  console.log(error?.errors, obj);

  if (Object.keys(obj).length > 0) {
    throw {
      status: 400,
      errors: obj,
      message: "validation error",
    };
  } else {
    next();
  }
}

module.exports = checkValidation;
