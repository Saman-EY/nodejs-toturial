const { Article } = require("./articel");
const { sequelize } = require("./sequelize");
const { User } = require("./user");

async function initialDatabase() {
  User.hasMany(Article, { foreignKey: "userId", as: "articles", onDelete: "CASCADE" });
  Article.belongsTo(User, { foreignKey: "userId", as: "author" });
//   await sequelize.sync({ alter: true });
}

module.exports = {
  initialDatabase,
};
