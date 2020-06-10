const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Reply = new Schema({
  reply: {
    type: String,
    required: true,
  },
});

const Post = new Schema({
  post: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
  reply: [String],
=======

  reply: [Reply]
>>>>>>> feature
});

module.exports = mongoose.model("Post", Post);
