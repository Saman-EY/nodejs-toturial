const { Task } = require("./task");
const { User, Profile } = require("./user");

User.hasOne(Profile, {
  foreignKey: {
    name: "userId",
    unique: true,
    onDelete: "CASCADE",
  },
});

User.hasMany(Task);
