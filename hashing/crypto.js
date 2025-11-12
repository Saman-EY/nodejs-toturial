const crypto = require("crypto");

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 32, "sha512").toString("hex");
  const newHash = `$2a.${salt}.${hash}`;

  console.log("SALT ==> ", salt, salt.length);
  console.log("HASH ==> ", hash, hash.length);
  console.log("NEW HASH ==> ", newHash);
  return newHash;
}

function verifyPassword(password, hashPassword) {
  const salt = hashPassword.split(".")?.[1];
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 32, "sha512").toString("hex");
  const newHash = `$2a.${salt}.${hash}`;

  return newHash === hashPassword;
}

const hashPass = hashPassword("123456");
const result = verifyPassword("123456", hashPass);
console.log(result);
