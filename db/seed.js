const Post = require("../models/Post")
const postData = require("./OP.json")

Post.deleteMany({}).then(() => {
    Post.create(postData)
    .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
})