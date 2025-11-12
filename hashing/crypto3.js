const crypto = require("crypto");
const secret = crypto.randomBytes(16).toString("hex");
const password = "pass1234";
const hash = crypto.createHmac("sha512", secret).update(password).digest("hex");

console.log(hash);
