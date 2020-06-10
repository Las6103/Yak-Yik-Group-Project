const mongoose = require('../db/OP.json');
const Schema = mongoose.Schema;

const Post = new Schema({
  post: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Post', Post);
