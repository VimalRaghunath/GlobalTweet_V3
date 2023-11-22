const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    mobile: { type: String, required: true},
    username: { type: String, required: true},
    password: { type: String, required: true},
    id: { type: String, required: true},
    bio: { type: String, required: true},
    avatar : { type: String, required: true},
    following: { type: Array, required: true},
    followers:{ type: Array, required: true} ,
    isBlocked: { type: Boolean , default:false},
})

module.exports = mongoose.model("User",userSchema)