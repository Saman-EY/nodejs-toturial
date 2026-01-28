const { DataTypes } = require("@sequelize/core");
const { sequelize } = require("./sequelize");
const { User } = require("./user");

const Task = sequelize.define(
  "task",
  {
    title: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("pending", "done"),
      defaultValue: "pending",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  { freezeTableName: true, createdAt: "created_at", updatedAt: false },
);

module.exports = {
  Task,
};
