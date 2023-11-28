const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    mobile: { type: String, required: true},
    username: { type: String, required: true},
    password: { type: String, required: true},
    bio: { type: String, required: true},
    avatar : { type: String, required: true},
    following: Array,
    followers: Array,
    //   { type: Array, required: true} ,
    isBlocked: { type: Boolean , default:false},
})

module.exports = mongoose.model("User",userSchema)