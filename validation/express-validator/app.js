const express = require("express");
const { ErrorHandler, NotFoundError } = require("./util/errorHandlers");
const { loginValidator, registerValidator } = require("./validators/auth.validator");
const { validationResult } = require("express-validator");
const checkValidation = require("./middleware/validator");
const IdValidator = require("./validators/param.validator");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.post("/login", loginValidator(), checkValidation, (req, res) => {
  res.send(req.body);
});

app.post("/register", registerValidator(), checkValidation, (req, res) => {
  res.send(req.body);
});
app.get("/blogs/:id", IdValidator, checkValidation, (req, res) => {
  res.send(req.body);
});

// handle 404
app.use(NotFoundError);
// handle other errors
app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
