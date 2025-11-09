const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdirSync("./public/uploads", { recursive: true });
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}${ext}`;
    // const whiteListFormat = [".jpg", ".png", ".jpeg", ".webp"];
    const whiteListFormat = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
    // if (whiteListFormat.includes(ext)) {
    if (whiteListFormat.includes(file.mimetype)) {
      cb(null, filename);
    } else {
      cb(new Error("only jpg, png, jpeg, webp"));
    }
  },
});

const _1MB = 1 * 1000 * 1000;
const _2MB = 2 * 1000 * 1000;
const _3MB = 3 * 1000 * 1000;
const _750KB = 150000;

const uploadfile = multer({ storage, limits: { fileSize: _3MB } });

module.exports = uploadfile;
