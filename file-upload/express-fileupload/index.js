const express = require("express");
const app = express();
const { ErrorHandler, NotFoundError } = require("./util/errorHandlers");
const uploadfile = require("./middleware/multer");

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));




// handle 404
app.use(NotFoundError);
// handle other errors
app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
