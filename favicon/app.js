const express = require("express");
const { ErrorHandler, NotFoundError } = require("./util/errorHandlers");
const path = require("path");
const serveFavicon = require("serve-favicon");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(serveFavicon(path.join(__dirname, "favicon.ico")));

app.get("/", (req, res) => {
  res.send("hello");
});

// handle 404
app.use(NotFoundError);
// handle other errors
app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
