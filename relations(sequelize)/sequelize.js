const { Sequelize } = require("@sequelize/core");
const { MySqlDialect } = require("@sequelize/mysql");
const sequelize = new Sequelize({
  dialect: MySqlDialect,
  host: "localhost",
  port: 3306,
  user: "root",
  password: "SamanNova_80",
  database: "relations",
  logging: false,
});

sequelize
  .authenticate()
  .then(async () => {
    // await sequelize.sync({ force: true });
    console.log("connected to MySql");
  })
  .catch((err) => console.log("Cannot connect to MySQL", err));

module.exports = { sequelize };
