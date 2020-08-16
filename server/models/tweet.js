const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Tweet", tweetSchema);
