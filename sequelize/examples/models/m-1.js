const { Model, DataTypes } = require("@sequelize/core");
const { sequelize } = require("../../configs/db.config");

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING, // or STRING(50) = varchar(50)
    birthday: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "user",
    // timestamps:false,
    // updatedAt: "updated_date" // for editing the field
    // createdAt: false
  }
);

async function main() {
  await User.sync({ force: true });
  const user = await User.create({
    username: "saman",
    birthday: new Date("2000-01-01"),
  });
  console.log(user);
}
main();
