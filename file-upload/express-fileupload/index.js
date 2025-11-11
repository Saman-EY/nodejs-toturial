const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const { ErrorHandler, NotFoundError } = require("./util/errorHandlers");
const fileUpload = require("express-fileupload");
const { rejects } = require("assert");



app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
// app.use(fileUpload({abortOnLimit: true, limits: {fileSize: 150000}}))
app.use(fileUpload());

app.post("/uploads-buffer", (req, res, next) => {
  if (!req.files || Object.keys(req.files).length == 0) {
    throw { status: 400, message: "no file were uploaded" };
  }
  const image = req.files.image;
  const ext = path.extname(image.name);
  const destPath = path.join(__dirname, "public", "upload", Date.now() + ext);
  const buffer = Buffer.from(image.data);
  fs.writeFileSync(destPath, buffer);

  res.send(req.files);
});

app.post("/uploads-mv", async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length == 0) {
    throw { status: 400, message: "no file were uploaded" };
  }

  for (const key in req.files) {
    let file = req.files[key];
    const ext = path.extname(file.name);
    const destPath = path.join("public", "upload", Date.now() + ext);
    await new Promise((resolve, rejects) => {
      file.mv(destPath, (err) => {
        if (err) rejects(err);
        else resolve(true);
      });
    });
  }

  res.send("file uploaded");
});

// handle 404
app.use(NotFoundError);
// handle other errors
app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
