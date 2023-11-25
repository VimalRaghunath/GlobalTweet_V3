const mongoose = require("mongoose")

const TweetSchema = new mongoose.Schema({
    userId: { type : mongoose.Schema.Types.ObjectId, ref: "user"},
    text: String,
    likes: String,
})

module.exports = mongoose.model("Tweet",TweetSchema)