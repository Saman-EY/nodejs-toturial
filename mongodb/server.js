const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "mongodb-test";
const client = new MongoClient(DB_URL);

const main = async () => {
  await client.connect();
  console.log("connected to mongodb");
  const db = client.db(DB_NAME);
  const userCollection = db.collection("user");

  //   const result = await userCollection.insertOne({
  //     fistname: "saman2",
  //     skills: ["html", "css", "js"],
  //     stack: "front end developer",
  //     address: {
  //       city: "tehran",
  //       country: "iran",
  //     },
  //   });

  userCollection
    .find({})
    .toArray()
    .then((res) => console.log(res));
};

main();
