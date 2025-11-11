const { Router } = require("express");
const { getUsers, createUser, getUserById, patchUser, deleteUser } = require("../controllers/user.controller");

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);
router.patch("/:id", patchUser);

module.exports = router;
