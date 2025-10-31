const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded())

app.post("/", (req, res) => {
  const body = req.body;
  res.json({
    data: body,
  });
});

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
