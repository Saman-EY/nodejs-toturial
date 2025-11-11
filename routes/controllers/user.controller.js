function getUsers(req, res, next) {
  res.send("get users");
}
function getUserById(req, res, next) {
  res.send(`get user by id: ${req.params.id}`);
}
function createUser(req, res, next) {
  res.send(`create new user `);
}
function deleteUser(req, res, next) {
  console.log(new Date(req.time).toLocaleString("fa-ir"));
  res.send(`delete user by id: ${req.params.id}`);
}
function patchUser(req, res, next) {
  res.send(`update user by id: ${req.params.id}`);
}

module.exports = { getUsers, createUser, deleteUser, patchUser, getUserById };
