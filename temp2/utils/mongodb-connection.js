const { MongoClient } = require("mongodb");
module.exports = class ConnectToMongoDB {
  #DB_URL = "mongodb://localhost:27017/lesson-5";
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
};
