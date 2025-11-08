
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
    message: err.message || "internal server error",
    errors: err.errors,
  });
};

module.exports = {
  NotFoundError,
  ErrorHandler,
};
