const express = require("express");
const router = express();
const Memes = require("../models/Meme");

/**
 * GET ROUTES
 */
router.get("/", (req, res) => {
  Memes.find({}).then((memes) => res.json(memes));
});

router.get("/id/:id", (req, res) => {
  Memes.findById(req.params.id).then((memes) => res.json(memes));
});

/**
 * POST ROUTES
 */
router.post("/", (req, res) => {
  Memes.create(req.body)
    .then((memes) => res.json(memes))
    .catch((err) => console.log("Error :", err));
});

/**
 * PUT ROUTES
 */
router.put("/id/:id", (req, res) => {
  Memes.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((memes) => res.json(memes))
    .catch((err) => console.log("Error :", err));
});

/**
 * DELETE ROUTES
 */
router.delete("/id/:id", (req, res) => {
  Memes.findByIdAndRemove({ _id: req.params.id }).then((memes) =>
    res.json(memes)
  );
});

module.exports = router;
