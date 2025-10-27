const notFound = (res) => {
  res.writeHead(404, { "content-type": "application/json" });
  res.write(
    JSON.stringify({
      message: "api not found",
    })
  );
  res.end();
};

const ErrorHandler = {
  notFound,
};

module.exports = ErrorHandler;
