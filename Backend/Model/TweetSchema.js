const mongoose = require("mongoose")

const TweetSchema = new mongoose.Schema({
    id: String,
    text: String,
    likes: String,
})

module.exports = mongoose.model("Tweet",TweetSchema)