const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

const User = sequelize.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { freezeTableName: true },
);

module.exports = {
  User,
};
