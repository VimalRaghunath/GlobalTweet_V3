const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema({

    userId: { type : mongoose.Schema.Types.ObjectId, ref: "User"},
    title: { type: String,},
    description: { type: String},
    image: { type: String, required: true},
    category: { type: String, },
    likes: { type: String},
    
})

module.exports = mongoose.model("Post",PostSchema)