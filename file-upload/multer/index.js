const express = require("express");
const app = express();
const { ErrorHandler, NotFoundError } = require("./util/errorHandlers");
const uploadfile = require("./middleware/multer");

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.post("/upload-single", uploadfile.single("image"), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});
app.post("/upload-multiple", uploadfile.array("image", 3), (req, res) => {
  console.log(req.files);
  res.send(req.files);
});
app.post(
  "/upload-imageAndFile",
  uploadfile.fields([
    { name: "image", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  (req, res) => {
    console.log(req.files);
    res.send(req.files);
  }
);
app.post("/upload-any", uploadfile.any(), (req, res) => {
  console.log(req.files);
  res.send(req.files);
});

// handle 404
app.use(NotFoundError);
// handle other errors
app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
