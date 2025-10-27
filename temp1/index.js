const http = require("http");

http
  .createServer(function (req, res) {
    // res.writeHead(200, { "content-type": "text/plain" });
    // res.write("aaaaaa")
    // res.writeHead(200, { "content-type": "text/html" });
    // res.write("<h1>hiiiii</h1>")
    // res.writeHead(200, { "content-type": "application/json" });
    // res.write(JSON.stringify({name: "saman", age: 20}))
    res.writeHead(200, { "content-type": "text/xml" });
    res.write("<XML><Key>adqwdasd</Key></XML>");

    res.end();
  })
  .listen(3000, () => {
    console.log("server running on 3000!");
  });
