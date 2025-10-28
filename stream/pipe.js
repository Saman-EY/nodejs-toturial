const fs = require("fs");
const http = require("http");

// const readStreamData = fs.createReadStream("./read.txt");
// const writeStreamData = fs.createWriteStream("./write.txt");

// readStreamData.pipe(writeStreamData);

http
  .createServer((req, res) => {
    const readStreamData = fs.createReadStream("./read.txt");
    res.writeHead(200, { "content-type": "text/plain" });
    readStreamData.pipe(res);
  })
  .listen(3000, () => {
    console.log("server running on 3000/ http://localhost:3000");
  });
