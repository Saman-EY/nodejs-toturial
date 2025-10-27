const http = require("http");
const products = require("./data/products.json");
const productController = require("./controllers/product.controller");
const ErrorHandler = require("./controllers/errorHandler.controller");
const PORT = 3000;

const server = http.createServer((req, res) => {
  const apiRoute = "api";
  const productsRoute = `/${apiRoute}/products`;
  const matchedRoute = /\/api\/products\/\d+/;
  const { url, method } = req;

  if (url === productsRoute && method === "GET") {
    productController.get(req, res);
  } else if (url.match(matchedRoute) && method === "GET") {
    productController.getById(req, res);
  } else if (url === productsRoute && method === "POST") {
    productController.create(req, res);
  } else if (url.match(matchedRoute) && method === "PUT") {
    productController.update(req, res);
  } else if (url.match(matchedRoute) && method === "DELETE") {
    productController.remove(req, res);
  } else {
    ErrorHandler.notFound(res);
  }
});

server.listen(PORT);
console.log(`running on http://localhost:${PORT}`);
