const express = require("express");
const router = express();
const Posts = require("../models/Post");

/**
 * GET ROUTES
 */
router.get("/", (req, res) => {
  Posts.find({}).then((posts) => res.json(posts));
});

module.exports = router;