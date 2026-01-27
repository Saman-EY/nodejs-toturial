const { DataTypes } = require("@sequelize/core");
const { sequelize } = require("../../configs/db.config");

const User = sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING(50),
      unique: true,
    },
    fullname: DataTypes.STRING(50),
    password: DataTypes.STRING(16),
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

async function main() {
  await User.sync({ force: true });

  //////////////////////////////////// 1
  const user1 = await User.create(
    {
      username: "nova80",
      fullname: "saman ezzaty",
      password: "23123",
    },
    { fields: ["fullname", "username"] } //only set these two fields
  );
  // console.log(user1.dataValues);

  //////////////////////////////////// 2
  const user2 = await User.create({
    username: "nova82",
    fullname: "ami mohammadi",
    password: "23123",
  });
  await user2.save().catch((err) => console.log(JSON.stringify(err, null, 4)));
  // console.log(user2.dataValues);

  //////////////////////////////////// 3
  const result = await User.bulkCreate([
    { fullname: "amir", username: "amirUser", password: "asdwqda" },
    { fullname: "mohsen", username: "mohsenUser", password: "fasdqwds" },
    { fullname: "reza", username: "rezaUser", password: "asdwqwesadqweqda" },
    { fullname: "ahmad", username: "ahamdUser", password: "asdwqsdf23123da" },
  ]);
  const userList = result.map((user) => user.dataValues);
  // console.log(userList);

  //////////////////////////////////// 4
  const [user4, isCreated] = await User.findOrCreate({
    where: { username: "tempo" }, // if no user exist with this username it will create will given infos
    defaults: {
      fullname: "sasan",
      password: "123123wdasd",
    },
  });

  console.log(user4.dataValues, isCreated);
}
main();
