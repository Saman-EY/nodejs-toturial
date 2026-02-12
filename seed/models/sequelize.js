const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  username: "root",
  password: "root",
  database: "seed",
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log("database connected 🟢"))
  .catch((err) => console.log("❌ Cannot Connect to Database", err));

module.exports = {
  sequelize,
};
