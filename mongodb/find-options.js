const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017/mongodb-test";
const client = new MongoClient(DB_URL);

const main = async () => {
  await client.connect();
  console.log("connected to mongodb");
  const db = client.db();
  const userCollection = db.collection("user");

  //   const result = await userCollection.findOne(
  //     { _id: new ObjectId("68fddfc47a7865035883f208") },
  //     {
  //       projection: {
  //         // _id: 0,
  //         address: 1,
  //         skills: 1,
  //       },
  //     }
  //   );
  //   const result = await userCollection.find({}, { limit: 3, skip: 3 }).toArray();
  //   const result = await userCollection.find({}, { sort: { age: -1 } }).toArray();
  const result = await userCollection.find({}, { sort: { age: -1 } }).toArray();

  console.log(result, result.length);
};

main();
