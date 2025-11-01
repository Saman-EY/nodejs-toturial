const express = require("express");
const morgan = require("morgan");
const { default: camelCase } = require("camelcase-keys");
const app = express();

// const camelCase = (...args) => import("camelcase-keys").then((m) => m.default(...args));

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use(express.json());
app.use(express.urlencoded());

function getTime(req, res, next) {
  req.time = new Date().toDateString("");
  next();
}

function checkAuth(req, res, next) {
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    return next();
  }

  res.status(401).json({
    message: "unauthorized",
  });
}

function camelCaseMiddleware(req, res, next) {
  req.body = camelCase(req.body, { deep: true });

  next();
}

app.use(camelCaseMiddleware);

app.post("/", checkAuth, getTime, (req, res) => {
  res.json({
    data: req.body,
    time: req.time,
  });
});

app.get("/blogs", (req, res) => {
  console.log(aaaaa);
  res.json({
    message: "success",
    data: null,
  });
});
app.post("/blogs", (req, res) => {
  console.log(aaaaa);
  res.json({
    message: "success",
    data: {
      params: req.params,
      query: req.query,
      body: req.body,
    },
  });
});

// handle 404
app.use((req, res) => {
  return res.status(404).json({
    status: res.statusCode,
    message: "not found route: " + req.url,
  });
});

// handle other errors
app.use((err, req, res, next) => {
  return res.json({
    status: err.status || 500,
    message: err.message || "internal server error",
  });
});

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
