const crypto = require("crypto");
const fs = require("fs");
const filename = "index.txt";

const md5sum = crypto.createHash("md5");
const stream = fs.ReadStream(filename);
const md5 = require("md5");
let md5Result = "";

// streaming with two ways

stream.on("data", (chunk) => {
  md5sum.update(chunk);
  md5Result += md5(chunk);
  console.log("MD5: ", md5Result);
});
stream.on("end", () => {
  const hash = md5sum.digest("hex");
  fs.writeFile("hash.txt", hash, (err) => {
    if (err) {
      console.log(err);
    }
  });
  fs.writeFile("hash2.txt", md5Result, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
