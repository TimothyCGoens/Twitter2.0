const mongoose = require("mongoose");

const kittenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Kitten", kittenSchema);
