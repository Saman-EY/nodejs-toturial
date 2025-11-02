const express = require("express");
const { ErrorHandler, NotFoundError } = require("./util/errorHandlers");
const BlogModel = require("./model/blog.model");
const { isValidObjectId } = require("mongoose");
const omitEmpty = require("omit-empty");
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
app.post("/new", async (req, res, next) => {
  const { title, text } = req.body;

  try {
    const newBlog = new BlogModel({
      title,
      text,
    });

    await newBlog.save();

    res.send(newBlog);
  } catch (error) {
    next(error);
  }
});
app.get("/insertManyBlog", async (req, res, next) => {
  try {
    const result = await BlogModel.insertMany([
      {
        title: "title3",
        text: "text3",
      },
      {
        title: "title4",
        text: "text4",
      },
      {
        title: "title5",
        text: "text5",
      },
    ]);

    res.send(result);
  } catch (error) {
    next(error);
  }
});
app.get("/blogs", async (req, res, next) => {
  try {
    const blogs = await BlogModel.find();

    res.json({
      status: 200,
      data: blogs,
    });
  } catch (error) {
    next(error);
  }
});
app.get("/blogs/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    throw {
      status: 400,
      message: "invalid id",
    };
  }

  try {
    const result = await BlogModel.findById({
      _id: id,
    });
    if (!result) {
      throw {
        status: 404,
        message: "blog not found",
      };
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
});
app.delete("/blogs/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    throw {
      status: 400,
      message: "invalid id",
    };
  }

  try {
    const result = await BlogModel.deleteOne({
      _id: id,
    });

    res.send(result);
  } catch (error) {
    next(error);
  }
});
app.delete("/blogs", async (req, res, next) => {
  try {
    const result = await BlogModel.deleteMany();

    res.send(result);
  } catch (error) {
    next(error);
  }
});
app.put("/blogs/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    throw {
      status: 400,
      message: "invalid id",
    };
  }

  // OPTION 1

  // try {
  //   const newBodyObject = omitEmpty(req.body);
  //   const blog = await BlogModel.findById({
  //     _id: id,
  //   });
  //   if (!blog) {
  //     throw {
  //       status: 404,
  //       message: "blog not found",
  //     };
  //   }
  //   console.log(blog);
  //   Object.assign(blog, newBodyObject);
  //   await blog.save();

  //   res.send(blog);
  // } catch (error) {
  //   next(error);
  // }

  // OPTION 2
  try {
    const newBodyObject = omitEmpty(req.body);

    const result = await BlogModel.updateOne(
      {
        _id: id,
      },
      {
        $set: newBodyObject,
      }
    );

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
