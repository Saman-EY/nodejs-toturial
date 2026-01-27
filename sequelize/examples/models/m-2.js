const {  DataTypes } = require("@sequelize/core");
const { sequelize } = require("../../configs/db.config");

const User = sequelize.define(
  "user",
  {
    username: DataTypes.STRING, // or STRING(50) = varchar(50)
    birthday: DataTypes.DATE,
  },
  {
    modelName: "user",
    // timestamps:false,
    // updatedAt: "updated_date" // for editing the field
    // createdAt: false
    // freezeTableName: true, // set to not change the name
    tableName: "user-of-node"

  }
);

async function main() {
  await User.sync({ force: true });
  const user = await User.create({
    username: "saman2",
    birthday: new Date("2000-01-01"),
  });
  console.log(user.dataValues);
}
main();
