const fs = require("fs");

const readStreamData = fs.createReadStream("./read.txt");
const writeStreamData = fs.createWriteStream("./write.txt");
let counter = 0;

readStreamData.on("ready", () => {
  console.log("data ready to stream");
});
readStreamData.on("data", (chunk) => {
  counter++;
  console.log(counter, chunk);
  writeStreamData.write(chunk);
});
readStreamData.on("error", (err) => {
  console.log(err);
});
readStreamData.on("end", () => {
  console.log("data of read stream ended");
  writeStreamData.end();
});

writeStreamData.on("finish", () => {
  console.log("data of write stream ended👏👏👏👏");
});