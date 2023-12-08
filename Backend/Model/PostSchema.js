const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema({

    userId: { type : mongoose.Schema.Types.ObjectId, ref: "User"},
    title: { type: String, },
    description: { type: String},
    image: { type: String},
    category: { type: String },
    likes: { type: String}, //like details about users,count
    tweet: { type: String }
})

module.exports = mongoose.model("Post",PostSchema)