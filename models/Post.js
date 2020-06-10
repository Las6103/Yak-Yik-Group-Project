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
  reply: [Reply],
});

module.exports = mongoose.model("Post", Post);
