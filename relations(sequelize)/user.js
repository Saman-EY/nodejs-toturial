const { DataTypes } = require("@sequelize/core");
const { sequelize } = require("./sequelize");
const { Task } = require("./task");

const User = sequelize.define(
  "user",
  {
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: false },
);

const Profile = sequelize.define(
  "profile",
  {
    firstname: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { freezeTableName: true, timestamps: false },
);

module.exports = {
  User,
  Profile,
};
