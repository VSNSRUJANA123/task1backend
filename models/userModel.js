const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  handle: String,
  images: [String],
});

module.exports = mongoose.model("User", userSchema);
