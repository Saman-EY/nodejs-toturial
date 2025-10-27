const fs = require("fs");

const streamData = fs.createReadStream("./file.txt");
let counter = 0;

streamData.on("ready", () => {
  console.log("data ready to stream");
});
streamData.on("data", (chunk) => {
  counter++;
  console.log(counter, chunk);
});
streamData.on("error", (err) => {
  console.log(err);
});
streamData.on("end", () => {
  console.log("data of read stream ended");
});
