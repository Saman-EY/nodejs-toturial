const fs = require("fs");
// const products = require("../data/products.json");
const { ObjectId } = require("mongodb");
const ConnectToMongoDB = require("../utils/mongodb-connection");
const db = new ConnectToMongoDB();

async function find() {
  await db.GET();
  return new Promise((resolve, reject) => {
    const products = db
      .collection("products")
      .find({}, { sort: { id: -1 } })
      .toArray();

    resolve(products);
  });
}

const findById = async (id) => {
  await db.GET();

  return new Promise((resolve, reject) => {
    const result = db.collection("products").findOne({ _id: new ObjectId(id) });

    resolve(result);
  });
};

const create = async (body) => {
  await db.GET();

  return new Promise((resolve, reject) => {
    products.push(body);
    fs.writeFile(`${process.cwd()}/data/products.json`, JSON.stringify(products), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          message: "new product created",
          data: body,
        });
      }
    });
  });
};

const update = async (id, payload) => {
  return new Promise((resolve, reject) => {
    products.map((item) => {
      if (+item.id == +id) {
        Object.assign(item, payload);
      }
      return item;
    });

    fs.writeFile(`${process.cwd()}/data/products.json`, JSON.stringify(products), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          message: "product updated",
        });
      }
    });
  });
};

const remove = async (id) => {
  return new Promise((resolve, reject) => {
    const newProducts = products.filter((item) => +item.id !== +id);

    fs.writeFile(`${process.cwd()}/data/products.json`, JSON.stringify(newProducts), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          message: "product deleted",
        });
      }
    });
  });
};

const productModel = { find, findById, create, update, remove };

module.exports = productModel;
