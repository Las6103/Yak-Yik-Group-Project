const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Reply = new Schema ({
    reply: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Reply', Reply);