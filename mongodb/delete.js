const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "mongodb-test";
const client = new MongoClient(DB_URL);

const main = async () => {
  await client.connect();
  console.log("connected to mongodb");
  const db = client.db(DB_NAME);
  const userCollection = db.collection("user");

  //   const result = await userCollection.deleteOne({
  //     _id: new ObjectId("68fd04fbb5bb64ca9ac7c4c2"),
  //   });
  //   const result = await userCollection.deleteMany({
  //     "address.city": "tehran",
  //   });
  // const result = await userCollection.findOneAndDelete({
  //   stack: "front end developer",
  // });
  const result = await userCollection.deleteMany({});

  console.log("deleted doc", result);
};

main();
