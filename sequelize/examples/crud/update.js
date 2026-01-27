const { DataTypes, Op, sql, where } = require("@sequelize/core");
const { sequelize } = require("../../configs/db.config");

const userList = [
  {
    firstname: "Jane",
    lastname: "Smith",
    username: "janeSmith",
    bio: "marketing manager",
    age: 28,
    birthday: new Date("1996-05-15"),
  },
  {
    firstname: "John",
    lastname: "Doe",
    username: "johnDoe",
    bio: "frontend developer",
    age: 31,
    birthday: new Date("1993-02-10"),
  },
  {
    firstname: "Sara",
    lastname: "Johnson",
    username: "saraJ",
    bio: "ui ux designer",
    age: 26,
    birthday: new Date("1998-07-21"),
  },
  {
    firstname: "Ali",
    lastname: "Rezaei",
    username: "aliRezaei",
    bio: "backend developer",
    age: 34,
    birthday: new Date("1990-01-18"),
  },
  {
    firstname: "Emily",
    lastname: "Brown",
    username: "emilyBrown",
    bio: "content writer",
    age: 29,
    birthday: new Date("1995-11-04"),
  },
  {
    firstname: "David",
    lastname: "Wilson",
    username: "davidW",
    bio: "project manager",
    age: 38,
    birthday: new Date("1986-06-09"),
  },
  {
    firstname: "Mina",
    lastname: "Karimi",
    username: "minaKarimi",
    bio: "digital marketer",
    age: 27,
    birthday: new Date("1997-09-12"),
  },
  {
    firstname: "Michael",
    lastname: "Lee",
    username: "mikeLee",
    bio: "software engineer",
    age: 35,
    birthday: new Date("1989-03-27"),
  },
  {
    firstname: "Nina",
    lastname: "Clark",
    username: "ninaClark",
    bio: "hr specialist",
    age: 32,
    birthday: new Date("1992-08-30"),
  },
  {
    firstname: "Reza",
    lastname: "Ahmadi",
    username: "rezaAhmadi",
    bio: "devops engineer",
    age: 36,
    birthday: new Date("1988-12-14"),
  },

  {
    firstname: "Olivia",
    lastname: "Martinez",
    username: "oliviaM",
    bio: "product owner",
    age: 33,
    birthday: new Date("1991-04-19"),
  },
  {
    firstname: "Arman",
    lastname: "Hosseini",
    username: "armanH",
    bio: "mobile developer",
    age: 25,
    birthday: new Date("1999-06-23"),
  },
  {
    firstname: "Sophia",
    lastname: "Taylor",
    username: "sophiaT",
    bio: "qa engineer",
    age: 30,
    birthday: new Date("1994-10-08"),
  },
  {
    firstname: "Daniel",
    lastname: "Anderson",
    username: "danAnderson",
    bio: "business analyst",
    age: 37,
    birthday: new Date("1987-05-02"),
  },
  {
    firstname: "Leila",
    lastname: "Moradi",
    username: "leilaMoradi",
    bio: "graphic designer",
    age: 27,
    birthday: new Date("1997-01-25"),
  },
  {
    firstname: "Kevin",
    lastname: "Walker",
    username: "kevinW",
    bio: "system administrator",
    age: 41,
    birthday: new Date("1983-09-17"),
  },
  {
    firstname: "Hamed",
    lastname: "Jafari",
    username: "hamedJ",
    bio: "data analyst",
    age: 34,
    birthday: new Date("1990-02-11"),
  },
  {
    firstname: "Emma",
    lastname: "White",
    username: "emmaWhite",
    bio: "seo specialist",
    age: 29,
    birthday: new Date("1995-12-03"),
  },
  {
    firstname: "Ryan",
    lastname: "Harris",
    username: "ryanH",
    bio: "technical lead",
    age: 39,
    birthday: new Date("1985-07-28"),
  },
  {
    firstname: "Parsa",
    lastname: "Kazemi",
    username: "parsaK",
    bio: "junior frontend developer",
    age: 23,
    birthday: new Date("2001-04-06"),
  },

  {
    firstname: "Lucas",
    lastname: "Young",
    username: "lucasY",
    bio: "startup founder",
    age: 42,
    birthday: new Date("1982-11-20"),
  },
  {
    firstname: "Maryam",
    lastname: "Ebrahimi",
    username: "maryamE",
    bio: "accountant",
    age: 35,
    birthday: new Date("1989-08-15"),
  },
  {
    firstname: "Noah",
    lastname: "King",
    username: "noahKing",
    bio: "cloud engineer",
    age: 31,
    birthday: new Date("1993-03-09"),
  },
  {
    firstname: "Fatemeh",
    lastname: "Sadeghi",
    username: "fatemehS",
    bio: "office manager",
    age: 40,
    birthday: new Date("1984-05-13"),
  },
  {
    firstname: "Ethan",
    lastname: "Scott",
    username: "ethanS",
    bio: "security specialist",
    age: 36,
    birthday: new Date("1988-01-30"),
  },
  {
    firstname: "Hossein",
    lastname: "Rahimi",
    username: "hosseinR",
    bio: "it support",
    age: 29,
    birthday: new Date("1995-06-17"),
  },
  {
    firstname: "Ava",
    lastname: "Green",
    username: "avaGreen",
    bio: "brand strategist",
    age: 34,
    birthday: new Date("1990-10-26"),
  },
  {
    firstname: "Benjamin",
    lastname: "Adams",
    username: "benAdams",
    bio: "solution architect",
    age: 44,
    birthday: new Date("1980-02-08"),
  },
  {
    firstname: "Zahra",
    lastname: "Shirazi",
    username: "zahraS",
    bio: "public relations",
    age: 28,
    birthday: new Date("1996-09-05"),
  },

  {
    firstname: "Henry",
    lastname: "Baker",
    username: "henryB",
    bio: "operations manager",
    age: 46,
    birthday: new Date("1978-12-18"),
  },
  {
    firstname: "Narges",
    lastname: "Mahdavi",
    username: "nargesM",
    bio: "customer success",
    age: 31,
    birthday: new Date("1993-07-01"),
  },
  {
    firstname: "Jack",
    lastname: "Carter",
    username: "jackC",
    bio: "sales executive",
    age: 35,
    birthday: new Date("1989-04-14"),
  },
  {
    firstname: "Pouya",
    lastname: "Azizi",
    username: "pouyaA",
    bio: "game developer",
    age: 27,
    birthday: new Date("1997-11-11"),
  },
  {
    firstname: "Liam",
    lastname: "Turner",
    username: "liamT",
    bio: "ai engineer",
    age: 33,
    birthday: new Date("1991-06-29"),
  },
  {
    firstname: "Elham",
    lastname: "Rostami",
    username: "elhamR",
    bio: "product marketer",
    age: 38,
    birthday: new Date("1986-03-03"),
  },
  {
    firstname: "Oscar",
    lastname: "Perez",
    username: "oscarP",
    bio: "international sales",
    age: 41,
    birthday: new Date("1983-08-24"),
  },
  {
    firstname: "gholami",
    lastname: "Gholami",
    username: "sinaG",
    bio: "network engineer",
    age: 36,
    birthday: new Date("1988-10-02"),
  },
  {
    firstname: "Chloe",
    lastname: "Hall",
    username: "chloeH",
    bio: "social media manager",
    age: 26,
    birthday: new Date("1998-02-16"),
  },
];

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "users",
    freezeTableName: true,
  }
);

async function main() {
  await User.sync({ force: true }).then(() => console.log("synced user"));
  await User.bulkCreate(userList);
  const user1 = await User.findOne({ where: { id: 1 } });

  ////////////////////////////////////// 1
  //   user1.firstname = "saman";
  //   user1.lastname = "ezzaty";
  //   await user1.save();

  ////////////////////////////////////// 2
  //   await user1.update({
  //     firstname: "saman",
  //     lastname: "ezzaty",
  //     username: "nova",
  //   });

  ////////////////////////////////////// 3
  await User.update(
    { firstname: "loremsss" },
    // { /
    //   where: { / for one
    //     id: 1,
    //   },
    // }
    {
      where: {
        // for multiple
        age: {
          [Op.gt]: 18,
        },
      },
    }
  );

  await user1.reload();
  console.log(user1.toJSON());
}
main();
