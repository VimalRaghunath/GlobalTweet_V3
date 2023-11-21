const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema({
    id: {type:String, required:true},
    title:{type:String, required:true},
    description: {type:String, required:true},
    image: {type:String, required:true},
    category: {type:String, required:true},
    likes: String,
})

module.exports = mongoose.model("Post",PostSchema)