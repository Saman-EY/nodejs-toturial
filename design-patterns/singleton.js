const { MongoClient } = require("mongodb");
class ConnectToMongoDB {
  #DB_URL = "mongodb://localhost:27017/mongodb-test";
  #db = null;

  async #connect() {
    try {
      let client = new MongoClient(this.#DB_URL);
      let db = client.db();
      return db;
    } catch (error) {
      console.log(error);
    }
  }

  async GET() {
    try {
      if (this.#db) {
        console.log("db already connected");
        return this.#db;
      }

      return (this.#db = await this.#connect());
    } catch (error) {
      console.log(error);
    }
  }
}

async function main() {
  const db = await new ConnectToMongoDB().GET();
  const result = await db.collection("user").find({}).toArray();

  console.log(result);
}

main();
