const sha1 = require("sha1");
const md5 = require("md5");

const password = "pass1234";
console.log("MD5: ", md5(password));
console.log("SHA1: ", sha1(password));
