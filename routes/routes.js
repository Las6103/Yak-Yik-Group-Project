const express = require("express");
const router = express();


router.use("/posts", require("./postroutes"));
router.use("/replies", require("./replyroutes"));

module.exports = router;
