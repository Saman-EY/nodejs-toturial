const jwt = require("jsonwebtoken");

const Secret = "lkasdlkqwelkjijwefiuh23u23r90erihuwerf83lrtg830rtih";

const token = jwt.sign({ id: 5, email: "lorem@mail.com" }, Secret, {
  algorithm: "HS384",
  //   expiresIn: 1000 * 60 * 60 * 24 * 30, //20s-3d-1y
  expiresIn: 1,
});

setTimeout(() => {
  try {
    const verifiedData = jwt.verify(token, Secret);
    console.log("verified: ", verifiedData);
  } catch (error) {
    console.log(error.message);
  }
}, 1500);
setTimeout(() => {
  try {
    const decodedData = jwt.decode(token);
    console.log("decoded data: ", decodedData);
  } catch (error) {
    console.log(error.message);
  }
}, 1500);
