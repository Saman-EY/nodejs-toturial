const express = require("express");
const app = express();

// IN EXRESS V4 :

// app.get("/file.txt", (req, res) => {
//   res.status(200).send("Accepted: " + req.url);
// });
// app.get("/ab?cd", (req, res) => {
//   res.status(200).send("Accepted: " + req.url + " ab?cd");
// });
// app.get("/ab+cd", (req, res) => {
//   res.status(200).send("Accepted: " + req.url + " ab+cd");
// });
// app.get("/ab*cd", (req, res) => {
//   res.status(200).send("Accepted: " + req.url + " ab*cd");
// });
// app.get(/.*nodejs$/gi, (req, res) => {
//   res.status(200).send("Accepted: " + req.url + " .*nodejs");
// });
app.get(/[a-z0-9_\.]{5,50}@[a-z]{2,6}.[a-z]{2,10}/gi, (req, res) => {
  res.status(200).send("Accepted: " + req.url + " EMAIL VERFIY");
});

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
