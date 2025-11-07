const express = require("express");
const { ErrorHandler, NotFoundError } = require("./util/errorHandlers");
const { registerSchema } = require("./validators/auth.validator");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.post("/register", async (req, res, next) => {
  try {
    const [error] = registerSchema.validate(req.body);
    if (error) throw error;
    res.send(req.body);
  } catch (error) {
    next(error);
  }
});

// handle 404
app.use(NotFoundError);
// handle other errors
app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
