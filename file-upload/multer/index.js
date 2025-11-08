const express = require("express");
const app = express();
const { ErrorHandler, NotFoundError } = require("./util/errorHandlers");
const multer = require("multer");

app.use(express.json());
app.use(express.urlencoded());

const uploadFile = multer({ dest: "./uploads" });

app.post("/upload", uploadFile.single("file"), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

// handle 404
app.use(NotFoundError);
// handle other errors
app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
