const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema({

    userId: { type : mongoose.Schema.Types.ObjectId, ref: "user"},
    title: { type: String, required: true},
    description: { type: String, required: true},
    image: { type: String, required: true},
    category: { type: String, required: true},
    likes: { type: String},
    
})

module.exports = mongoose.model("Post",PostSchema)