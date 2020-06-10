const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Meme = new Schema({
  image_url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Meme", Meme);
