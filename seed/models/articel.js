const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

const Article = sequelize.define(
  "article",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { freezeTableName: true },
);

module.exports = {
  Article,
};
