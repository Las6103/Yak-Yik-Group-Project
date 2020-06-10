const Post = require("../models/Post")
const Reply = require("../models/Reply")
const postData = require("./OP.json")
const replyData = require("./RP.json")

Post.deleteMany({}).then(() => {
    Post.create(postData)
    .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
})

Reply.deleteMany({}).then(() => {
    Reply.create(replyData)
    .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
})