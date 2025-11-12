const crypto = require("crypto");
const pass = "123456";
const hash = crypto.createHash("sha512", { encoding: "utf-8" }).update(pass).digest("hex");
console.log("HASHED PASSWORD: ", hash);
