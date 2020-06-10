const express = require('express');
const router = express();
const Replys = require("../models/Reply");

router.get("/", (req, res) => {
    Replys.find({}).then((replys) => res.json(replys));
  });


module.exports = router;