const mongoose = require("mongoose")

const FollowSchema = new mongoose.Schema({
    id : String,

})

module.exports = mongoose.model("Follow",FollowSchema)