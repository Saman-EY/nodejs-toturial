const express = require("express");
const app = express();
const products = [
  {
    id: 1,
    name: "lorem1",
  },
  {
    id: 2,
    name: "lorem2",
  },
  {
    id: 3,
    name: "lorem3",
  },
];
const users = [
  {
    id: 1,
    name: "user1",
  },
  {
    id: 2,
    name: "user2",
  },
  {
    id: 3,
    name: "user3",
  },
];

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.send("<h1>hello there</h1>");
});

// optional parameter (ONLY IN EXPRESS V4! for double actions)
// app.get("/products/:id?", (req, res) => {
app.get("/products", (req, res) => {
  // No ID → return all products
  res.status(200).json({
    status: 200,
    data: products,
  });
});

app.get("/users", (req, res) => {
  res.statusCode = 200;

  res.json({
    status: res.statusCode,
    data: users,
  });
});

app.get("/users/:userId", (req, res) => {
  const paramId = req.params.userId;

  const user = users.find((item) => item.id == paramId);

  if (user) {
    res.statusCode = 200;
    res.json({
      status: res.statusCode,
      data: user,
    });
  } else {
    res.statusCode = 404;
    res.json({
      status: res.statusCode,
      data: null,
      message: "user not found!",
    });
  }
});

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
