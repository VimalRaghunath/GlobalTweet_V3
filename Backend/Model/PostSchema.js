const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema({

    userId: { type : mongoose.Schema.Types.ObjectId, ref: "user"},
    title:String,
    description: String,
    image: String,
    category: String,
    likes: String,
    
})

module.exports = mongoose.model("Post",PostSchema)