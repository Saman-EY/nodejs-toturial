const { Router } = require("express");
const BlogController = require("../controllers/blog.controller");

const router = Router();

const blogController = new BlogController();

router.get("/", blogController.getblogs);
router.post("/", blogController.createBlog);
router.get("/:id", blogController.getBlogById);
router.delete("/:id", blogController.deleteBlog);
router.patch("/:id", blogController.patchBlog);

module.exports = router;
