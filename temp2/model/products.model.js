const { ObjectId } = require("mongodb");
const ConnectToMongoDB = require("../utils/mongodb-connection");

const ProductColelction = "products";

async function find() {
  const db = await new ConnectToMongoDB().GET();

  return new Promise(async (resolve, reject) => {
    const products = await db
      .collection(ProductColelction)
      .find({}, { sort: { id: -1 } })
      .toArray();

    resolve(products);
  });
}

const findById = async (id) => {
  const db = await new ConnectToMongoDB().GET();

  return new Promise(async (resolve, reject) => {
    const result = await db.collection(ProductColelction).findOne({ _id: new ObjectId(id) });

    resolve(result);
  });
};

const create = async (body) => {
  const db = await new ConnectToMongoDB().GET();

  return new Promise(async (resolve, reject) => {
    const result = await db.collection(ProductColelction).insertOne(body);
    resolve(result);
  });
};

const update = async (id, payload) => {
  const db = await new ConnectToMongoDB().GET();

  return new Promise(async (resolve, reject) => {
    const result = await db.collection(ProductColelction).updateOne(
      { _id: new ObjectId(id) },
      {
        $set: { ...payload },
      }
    );

    resolve(result);
  });
};

const remove = async (id) => {
  const db = await new ConnectToMongoDB().GET();

  return new Promise(async (resolve, reject) => {
    const result = await db.collection(ProductColelction).deleteOne({ _id: new ObjectId(id) });
    resolve(result);
  });
};

const productModel = { find, findById, create, update, remove };

module.exports = productModel;
