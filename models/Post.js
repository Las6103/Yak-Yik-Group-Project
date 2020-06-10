const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Post = new Schema({
  post: {
    type: String,
    required: true,
  },
  reply: [String],
});

module.exports = mongoose.model("Post", Post);
