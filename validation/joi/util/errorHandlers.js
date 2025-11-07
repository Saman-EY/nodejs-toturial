const validationMapper = require("./joi-validation-mapper");

const NotFoundError = (req, res) => {
  return res.status(404).json({
    status: res.statusCode,
    message: "not found route: " + req.url,
  });
};

const ErrorHandler = (err, req, res, next) => {
  console.log(JSON.stringify(err, null, 4));
  return res.json({
    status: err.status || 500,
    message: err.message.replace(/[\'\"\\]*/g, "") || "internal server error",
    errors: err.errors,
    // invalidParams: validationMapper(err),
  });
};

module.exports = {
  NotFoundError,
  ErrorHandler,
};
