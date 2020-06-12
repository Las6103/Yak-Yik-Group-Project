const express = require("express");
const router = express.Router();
const Posts = require("../models/Post");

/**
 * GET ROUTES
 */
router.get("/", (req, res) => {
  Posts.find({}).then((posts) => res.json(posts));
});

router.get("/id/:id", (req, res) => {
  Posts.findById(req.params.id).then((posts) => res.json(posts));
});

/**
 * POST ROUTES
 */
router.post("/", (req, res) => {
  Posts.create(req.body)
    .then((posts) => res.json(posts))
    .catch((err) => console.log("Error :", err));
});

/**
 * PUT ROUTES
 */
router.put("/id/:id", (req, res) => {
  Posts.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((posts) => res.json(posts))
    .catch((err) => console.log("Error :", err));
});

/**
 * DELETE ROUTES
 */
router.delete("/id/:id", (req, res) => {
  Posts.findByIdAndRemove({ _id: req.params.id }).then((posts) =>
    res.json(posts)
  );
});

module.exports = router;
