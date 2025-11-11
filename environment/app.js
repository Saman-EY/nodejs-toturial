const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const NodeEnv = process.env.NODE_ENV;
dotenv.config({
  path: path.join(__dirname, `.env.${NodeEnv}`),
});

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  console.log(process.env.API_KEY);
  res.send("aaaa");
});

app.listen(process.env.PORT, () => {
  console.log(`running on http://localhost:${process.env.PORT}`);
});
