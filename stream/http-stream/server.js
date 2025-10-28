const { createReadStream, statSync, readFileSync } = require("fs");
const http = require("http");
const fileName = "./dance.mp4";

http
  .createServer((req, res) => {
    const { size } = statSync(fileName);
    const range = req.headers.range;

    if (range) {
      let [start, end] = range.replace(/bytes=/, "").split("-");
      start = parseInt(start, 10);
      end = end ? parseInt(end, 10) : size - 1;

      if (start >= size || end >= size) {
        res.writeHead(416, { "Content-Range": `bytes */${size}` });
        return res.end();
      }

      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": end - start + 1,
        "Content-Type": "video/mp4",
      });

      const readStream = createReadStream(fileName, { start, end });
      readStream.pipe(res);
    } else {
      res.writeHead(200, {
        "Content-Length": size,
        "Content-Type": "video/mp4",
      });
      createReadStream(fileName).pipe(res);
    }
  })
  .listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
