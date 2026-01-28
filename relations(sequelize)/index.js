const { sequelize } = require("./sequelize");
const { Task } = require("./task");
const { User, Profile } = require("./user");

require("./associations");

async function main() {
  await sequelize.sync({ force: true });
  const user = await User.create({
    email: "lorem@mail.com",
    password: "pass123456",
  });
  const profile = await Profile.create({
    firstname: "saman",
    lastname: "ezzaty",
    bio: "this is bio",
  });

  await user.setProfile(profile);
  //   const user1 = await User.findByPk(1, { include: ["profile"], raw: true });
  //   const user1 = await User.findByPk(1, {
  //     include: {
  //       model: Profile,
  //       attributes: ["firstname", "lastname", "bio"],
  //     },
  //     raw: true,
  //   });

  const user1 = await User.findByPk(1);
  //   console.log(user1);
  //   console.log(await user1.getProfile({ raw: true }));

  await Task.bulkCreate([
    { title: "title1", desc: "any1", userId: user.id },
    { title: "title2", desc: "any2", userId: user.id },
    { title: "title3", desc: "any3", userId: user.id },
    { title: "title4", desc: "any4", userId: user.id },
  ]);

  const tasks = await user.getTasks({ raw: true });

  console.log(tasks);
}

main();
