const express = require("express");
const router = express();
const Posts = require("../models/Post");

/**
 * GET ROUTES
 */
router.get("/", (req, res) => {
  Posts.find({}).then((posts) => res.json(posts));
});

// Create
router.post("/", (req, res) => {
  Posts.create(req.body)
    .then((posts) => res.json(posts))
    .catch((err) => console.log("Error :", err));
});

module.exports = router;