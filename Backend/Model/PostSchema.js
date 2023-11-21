const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema({
   
    title:String,
    description: String,
    image: String,
    category: String,
    likes: String,
})

module.exports = mongoose.model("Post",PostSchema)