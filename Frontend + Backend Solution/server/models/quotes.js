const mongoose = require("mongoose");

const quotesSchema = mongoose.Schema({
  text: {
    type: String,
    unique: true,
  },
  author: String,
});

module.exports = mongoose.model("Quotes", quotesSchema);
