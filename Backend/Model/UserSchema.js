const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    email : {
        type: String,
        required: true,
    },

    mobilenumber : String,

    username : {
        type: String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    followers : Array,
    following: Array,
    block: Boolean,
})

module.exports = mongoose.model("User",)