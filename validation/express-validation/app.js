const express = require("express");
const { ErrorHandler, NotFoundError } = require("./util/errorHandlers");
const { loginValidator } = require("./validators/auth.validator");
const { validate } = require("express-validation");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.post("/login", validate(loginValidator), (req, res) => {
  res.send(req.body);
});

// handle 404
app.use(NotFoundError);
// handle other errors
app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
