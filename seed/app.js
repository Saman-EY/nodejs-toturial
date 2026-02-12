const express = require("express");
const { initialDatabase } = require("./models");
const { User } = require("./models/user");
const { Article } = require("./models/articel");
require("./models/sequelize");

const app = express();

app.use(express.json());
const PORT = 3000;

app.get("/users", async (req, res) => {
  const users =  await User.findAll({
    include: [{ model: Article, as: "articles" }],
  });
  console.log(users)
  res.json(users);
});
app.get("/articles", async (req, res) => {
  const articles =  await Article.findAll({
    include: [{ model: User, as: "author" }],
  });
  console.log(articles)
  res.json(articles);
});

app.listen(PORT, async () => {
  try {
    await initialDatabase();
    console.log(`Server running on http://localhost:${PORT}`);
  } catch (error) {
    console.log("Connection Failed", error);
  }
});
