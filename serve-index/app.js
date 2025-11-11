const express = require("express");
const { ErrorHandler, NotFoundError } = require("./util/errorHandlers");
const path = require("path");
const serveIndex = require("serve-index");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/ftp", express.static("public/ftp"));
// app.use(serveIndex("public/ftp", { icons: true, stylesheet: "/lorem.css" }));
app.use(serveIndex("public/ftp", { icons: true }));

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
