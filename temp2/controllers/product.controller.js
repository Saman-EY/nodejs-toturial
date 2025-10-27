const productModel = require("../model/products.model");

async function get(req, res) {
  try {
    const products = await productModel.find();

    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {
    console.log(error);
  }
}

const getById = async (req, res) => {
  try {
    const id = req.url.split("/")[3];
    const product = await productModel.findById(id);

    if (!product) {
      res.writeHead(404, { "content-type": "application/json" });
      res.write(
        JSON.stringify({
          message: "product not found!",
        })
      );
      res.end();
    } else {
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify(product));
      res.end();
    }
  } catch (error) {
    console.log(error);
  }
};

async function create(req, res) {
  try {
    let body = "";
    req.on("data", function (chunk) {
      body += chunk.toString();
      console.log(chunk.toString());
    });

    req.on("end", async () => {
      const result = await productModel.create({
        id: Date.now(),
        ...JSON.parse(body),
      });

      res.writeHead(201, { "content-type": "application/json" });
      res.write(JSON.stringify(result));
      res.end();
    });
  } catch (error) {
    console.log(error);
  }
}
async function update(req, res) {
  try {
    const id = req.url.split("/")[3];

    let body = "";
    req.on("data", function (chunk) {
      body += chunk.toString();
    });

    req.on("end", async () => {
      const parsedBody = { ...JSON.parse(body) };
      const product = await productModel.findById(id);

      if (!product) {
        res.writeHead(404, { "content-type": "application/json" });
        res.write(
          JSON.stringify({
            message: "product not found!",
          })
        );
        res.end();
      } else {
        const result = await productModel.update(id, parsedBody);

        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify(result));
        res.end();
      }
    });
  } catch (error) {
    console.log(error);
  }
}
async function remove(req, res) {
  try {
    const id = req.url.split("/")[3];
    const product = await productModel.findById(id);

    if (!product) {
      res.writeHead(404, { "content-type": "application/json" });
      res.write(
        JSON.stringify({
          message: "product not found!",
        })
      );
      res.end();
    } else {
      const result = await productModel.remove(id);
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify(result));
      res.end();
    }
  } catch (error) {
    console.log(error);
  }
}

const productController = { get, getById, create, update, remove };
module.exports = productController;
