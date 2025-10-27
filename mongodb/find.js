const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017/mongodb-test";
const client = new MongoClient(DB_URL);

const main = async () => {
  await client.connect();
  console.log("connected to mongodb");
  const db = client.db();
  const userCollection = db.collection("user");

  //   const result = await userCollection.find({ "address.country": "Iran" }).toArray();
  //   const result = await userCollection.find({ birthday: { $gte: "2000-02-29" } }).toArray();
  //   const result = await userCollection.find({ birthday: { $lte: "1997-02-29" } }).toArray();
  //   const result = await userCollection.find({ birthday: { $lte: new Date("1997-02-02") } }).toArray();
  const result = await userCollection.findOne({ birthday: { $lte: new Date("1997-02-02") } });

  console.log(result, result.length);
};

main();

