const Post = require("../models/Post");
const postData = require("./OP.json");
const Meme = require("../models/Meme");
const memeData = require("../db/Memes.json");

Post.deleteMany({}).then(() => {
  Post.create(postData)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

Meme.deleteMany({}).then(() => {
  Meme.create(memeData)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
