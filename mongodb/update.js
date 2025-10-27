const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017/mongodb-test";
const client = new MongoClient(DB_URL);

const main = async () => {
  await client.connect();
  console.log("connected to mongodb");
  const db = client.db();
  const userCollection = db.collection("user");

  //   const result = await userCollection.updateOne(
  //     {
  //       _id: new ObjectId("68fddfc47a7865035883f203"),
  //     },
  //     {
  //       $set: {
  //         lastname: "ezzaty",
  //         "address.street": "shademan",
  //       },
  //     }
  //   );

  //   const result = await userCollection.updateOne(
  //     {
  //       _id: new ObjectId("68fddfc47a7865035883f203"),
  //     },
  //     {
  //       $inc: {
  //         age: -20,
  //       },
  //     }
  //   );

  //   const result = await userCollection.updateOne(
  //     {
  //       _id: new ObjectId("68fddfc47a7865035883f203"),
  //     },
  //     {
  //       $unset: {
  //         age: 1,
  //       },
  //     }
  //   );

  //   const result = await userCollection.updateOne(
  //     {
  //       _id: new ObjectId("68fddfc47a7865035883f203"),
  //     },
  //     {
  //       $rename: {
  //         userAge: "age",
  //       },
  //     }
  //   );

  //   const result = await userCollection.updateOne(
  //     {
  //       _id: new ObjectId("68fddfc47a7865035883f203"),
  //     },
  //     {
  //       $push: {
  //         skills: "nestjs",
  //       },
  //     }
  //   );

  //   const result = await userCollection.updateOne(
  //     {
  //       _id: new ObjectId("68fddfc47a7865035883f203"),
  //     },
  //     {
  //       $push: {
  //         skills: {
  //           $each: ["nestjs", "fullstack"], // add multiple elements
  //         },
  //       },
  //     }
  //   );

  //   const result = await userCollection.updateOne(
  //     {
  //       _id: new ObjectId("68fddfc47a7865035883f203"),
  //     },
  //     {
  //       $pull: {
  //         skills: {
  //           $in: ["nestjs", "fullstack"], // add multiple elements
  //         },
  //       },
  //     }
  //   );

  console.log(result);
};

main();

// METHODS : $set $inc $unset $push $pull $rename
