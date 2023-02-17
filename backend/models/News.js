const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: {
    type: "String",
  },
  link: {
    type: "String",
  },
  author: {
    type: "String",
  },

  description: {
    type: "String",
  },
  content: {
    type: "String",
  },
  pubDate: {
    type: "Date",
  },

  image_url: {
    type: "String",
  },
  source_name: {
    type: "String",
  },

  category_id: {
    type: mongoose.SchemaTypes.ObjectId,
  },
  category_name: {
    type: "String",
  },
  language: {
    type: "String",
  },
  like_count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("news", NewsSchema);
