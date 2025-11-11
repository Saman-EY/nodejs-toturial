class BlogController {
  getblogs(req, res, next) {
    res.send("get blogs");
  }
  getBlogById(req, res, next) {
    res.send(`get blog by id: ${req.params.id}`);
  }
  createBlog(req, res, next) {
    res.send(`create new blog `);
  }
  deleteBlog(req, res, next) {
    console.log(new Date(req.time).toLocaleString("fa-ir"));
    res.send(`delete blog by id: ${req.params.id}`);
  }
  patchBlog(req, res, next) {
    res.send(`update blog by id: ${req.params.id}`);
  }
}

module.exports = BlogController;
