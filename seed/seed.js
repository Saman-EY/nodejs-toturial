const { Article } = require("./models/articel");
const { sequelize } = require("./models/sequelize");
const { User } = require("./models/user");

async function Seed() {
  try {
    await sequelize.sync();
    await User.destroy({ where: {} });
    await Article.destroy({ where: {} });

    const [alice, bob, charlie] = await User.bulkCreate(
      [
        { name: "Alice", email: "alice@example.com" },
        { name: "Bob", email: "bob@example.com" },
        { name: "Charlie", email: "charlie@example.com" },
      ],
      { returning: true },
    );

    await Article.bulkCreate([
      { title: "Alice's First Article", content: "This is Alice's first article.", userId: alice.id },
      { title: "Bob's First Article", content: "This is Bob's first article.", userId: bob.id },
      { title: "Charlie's First Article", content: "This is Charlie's first article.", userId: charlie.id },
    ]);

    console.log("Seed data created!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
Seed();
