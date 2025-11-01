const express = require("express");
const path = require("path");
const app = express();
const { ErrorHandler, NotFoundError } = require("./util/errorHandlers");

app.use(express.json());
app.use(express.urlencoded());

// tell express to use static (css, js, images)
app.use("/static", express.static("public"));
// tell express to use pug
app.set("view engine", "pug");
// tell express where to find views
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", {
    link: "https://google.com",
    title: "Home page",
  });
});

// handle 404
app.use(NotFoundError);

// handle other errors
app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
