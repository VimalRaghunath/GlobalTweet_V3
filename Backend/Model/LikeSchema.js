const mongoose = require("mongoose")

const LikeSchema = new mongoose.Schema({
    id: String,

})

module.exports = mongoose.model("Like",LikeSchema)