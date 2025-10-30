const express = require("express");
const app = express();
const queryString = require("querystring");
const posts = require("./posts.json");

app.get("/", (req, res) => {
  // key1,key2,key3
  console.log(queryString.parse("key1=11111&key2=aaaa&key3=ffffffff"));
  console.log(
    queryString.stringify({
      key1: "11111",
      key2: "aaaa",
      key3: "ffffffff",
    })
  );
  const { key1, key2, key3 } = req.query;

  res.json({ key1, key2, key3 });
});

app.get("/posts", (req, res) => {
  const { title, desc } = req.query;

  const regexpTitle = new RegExp(title ?? "", "gi");
  const regexpDesc = new RegExp(desc ?? "", "gi");
  const filter = posts.filter((item) => item.title.match(regexpTitle) || item.body.match(regexpDesc));
  res.send({
    data: filter,
  });
});

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
