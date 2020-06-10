const express = require("express");
const router = express();


router.use("/posts", require("./postroutes"));
router.use("/memes", require("./memeroutes"));

module.exports = router;
