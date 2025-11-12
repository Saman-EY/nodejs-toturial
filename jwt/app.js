const jwt = require("jsonwebtoken");

const Secret = "lkasdlkqwelkjijwefiuh23u23r90erihuwerf83lrtg830rtih";

const token = jwt.sign({ id: 5, email: "lorem@mail.com" }, Secret, {
  algorithm: "HS384",
  expiresIn: 1000 * 60 * 60 * 24 * 30, //20s-3d-1y
});

console.log(token);
