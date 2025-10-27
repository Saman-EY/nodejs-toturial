const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "mongodb-test";
const client = new MongoClient(DB_URL);

const main = async () => {
  await client.connect();
  console.log("connected to mongodb");
  const db = client.db(DB_NAME);
  const userCollection = db.collection("user");

  const result = await userCollection.insertMany([
    {
      firstname: "Saman",
      lastname: "Ezzatabadi",
      birthday: new Date("1997-02-28"),
      skills: ["React", "Next.js", "Redux"],
      address: {
        city: "Tehran",
        street: "Valiasr",
        postalCode: "1598711111",
      },
    },
    {
      firstname: "Ava",
      lastname: "Johnson",
      birthday: new Date("1995-06-15"),
      skills: ["Node.js", "Express", "MongoDB"],
      address: {
        city: "New York",
        street: "5th Avenue",
        postalCode: "10001",
      },
    },
    {
      firstname: "Liam",
      lastname: "Smith",
      birthday: new Date("1992-11-22"),
      skills: ["Python", "Django", "Flask"],
      address: {
        city: "London",
        street: "Baker Street",
        postalCode: "NW1 6XE",
      },
    },
    {
      firstname: "Mina",
      lastname: "Karimi",
      birthday: new Date("2000-03-10"),
      skills: ["Vue.js", "Nuxt.js", "Tailwind"],
      address: {
        city: "Shiraz",
        street: "Zand",
        postalCode: "7134111111",
      },
    },
    {
      firstname: "Ethan",
      lastname: "Brown",
      birthday: new Date("1998-09-01"),
      skills: ["React", "TypeScript", "Redux Toolkit"],
      address: {
        city: "Toronto",
        street: "Queen St W",
        postalCode: "M5V 2B7",
      },
    },
    {
      firstname: "Sara",
      lastname: "Lee",
      birthday: new Date("1996-12-30"),
      skills: ["Angular", "RxJS", "NgRx"],
      address: {
        city: "Seoul",
        street: "Gangnam-daero",
        postalCode: "06100",
      },
    },
    {
      firstname: "Omid",
      lastname: "Ahmadi",
      birthday: new Date("1994-08-17"),
      skills: ["React Native", "Expo", "Firebase"],
      address: {
        city: "Mashhad",
        street: "Ahmadabad",
        postalCode: "9171111111",
      },
    },
    {
      firstname: "Isabella",
      lastname: "Martinez",
      birthday: new Date("1999-04-05"),
      skills: ["Next.js", "Prisma", "Tailwind"],
      address: {
        city: "Madrid",
        street: "Gran Via",
        postalCode: "28013",
      },
    },
    {
      firstname: "Noah",
      lastname: "Williams",
      birthday: new Date("2001-01-19"),
      skills: ["Go", "Docker", "Kubernetes"],
      address: {
        city: "San Francisco",
        street: "Market St",
        postalCode: "94103",
      },
    },
    {
      firstname: "Elina",
      lastname: "Petrova",
      birthday: new Date("1993-07-24"),
      skills: ["PHP", "Laravel", "MySQL"],
      address: {
        city: "Moscow",
        street: "Tverskaya",
        postalCode: "125009",
      },
    },
  ]);

  console.log("inserted doc", result);

  userCollection
    .find({})
    .toArray()
    .then((res) => console.log(res));
  userCollection.countDocuments({}).then((res) => console.log(res));
};

main();
