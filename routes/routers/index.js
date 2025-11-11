const { Router } = require("express");
const userRouter = require("./user.router");
const blogRouter = require("./blog.router");

const router = Router();

function setTime(req, res, next) {
  req.time = Date.now();
  next();
}

router.use("/users", setTime, userRouter);
router.use("/blogs", blogRouter);

module.exports = router;
