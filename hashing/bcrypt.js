const bcrypt = require("bcrypt");

// rounds => 1 - 13 ~ (0.1 - 1)/sec
// rounds => 13 - 15 ~ (1 - 3)/sec
// rounds => 15 - 18 ~ (3 - 90)/sec
// rounds => 20 - 25 ~ (3600)/sec
// rounds => 31 ~ (2-3)/day

function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

function verifyPassword(password, hashedPassword) {
  const result = bcrypt.compareSync(password, hashedPassword);
  return result;
}

const hashed = hashPassword("123456");
const result = verifyPassword("123456", hashed);
console.log(result);
