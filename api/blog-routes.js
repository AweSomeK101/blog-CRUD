const express = require("express");
const blogController = require("./Controller/blogController");

// initialize router
const router = express.Router()

// making routes
router.route("/")
    .get(blogController.getAllBlogs)
    .post(blogController.createBlog);

router.route("/:id")
    .get(blogController.getBlog)
    .delete(blogController.removeBlog)
    .post(blogController.updateBlog);

module.exports = router;