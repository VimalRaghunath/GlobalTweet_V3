const mongoose = require("mongoose")

const AdminSchema = mongoose.Schema({
    name: { type: String, required: true },
    avatar: String,
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  bio: { type: String },
  isBlocked: { type: Boolean, default: false },
})

module.exports = mongoose.model("Admin",AdminSchema);