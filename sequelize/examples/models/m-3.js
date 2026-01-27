const { DataTypes } = require("@sequelize/core");
const { sequelize } = require("../../configs/db.config");

const Blog = sequelize.define(
  "blog",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(250),
      allowNull: false,
      // unique: true,
      unique: "slug_idx", // create index name
    },
    content: {
      type: DataTypes.TEXT,
      defaultValue: "content examples",
      allowNull: true,
    },
    author: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    image: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    show: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true, // set to not change the name
  }
);

async function main() {
  await Blog.sync({ force: true });
  const blog = await Blog.create({
    title: "node js structure",
    slug: "nodejs-structure",
    content: "this is nodejs content",
    image: "https://lorem.png",
    author: "saman ezzaty",
  });

  // overwriting data
  blog.show = true;
  await blog.save();
  
  await blog.reload();
  console.log(blog.dataValues)
}
main();
