const express = require("express");
const router = express();


router.use("/posts", require("./postroutes"));


module.exports = router;
