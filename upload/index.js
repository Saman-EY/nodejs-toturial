const multiparty = require("multiparty");
const { createWriteStream } = require("fs");
const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url == "/" && method == "POST") {
    let form = new multiparty.Form();
    form.parse(req);
    form.on("part", (part) => {
      part.pipe(createWriteStream("./files/" + part.filename)).on("close", () => {
        res.writeHead(200, { "content-type": "text/html" });

        res.end(`<h1>file uploaded: ${part.filename}</h1>`);
      });
    });
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`
      <form enctype="multipart/form-data" method="POST" action="/"> 
      <input type="file" name="file">
      <button type="submit">upload</button>
      </form>
      `);
    res.end();
  }
});

server.listen(PORT);
console.log(`running on http://localhost:${PORT}`);
