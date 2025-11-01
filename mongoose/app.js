const express = require("express");
const { ErrorHandler, NotFoundError } = require("./util/errorHandlers");
const BlogModel = require("./model/blog.model");
require("./config/mongo.config");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.post("/blogs", async (req, res, next) => {
  const { title, text } = req.body;

  try {
    const result = await BlogModel.create({
      title,
      text,
    });
    res.send(result);
  } catch (error) {
    next(error);
  }
});

// handle 404
app.use(NotFoundError);
// handle other errors
app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
