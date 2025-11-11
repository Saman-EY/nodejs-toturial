const express = require("express");
const { ErrorHandler, NotFoundError } = require("./util/errorHandlers");
const allRouters = require("./routers/index");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(allRouters);

// handle 404
app.use(NotFoundError);
// handle other errors
app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
