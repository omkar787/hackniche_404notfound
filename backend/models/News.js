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
  source: {
    type: "String",
    lowercase: true,
  },

  category: {
    type: ["String"],
    lowercase: true,
  },
  keywords: {
    type: ["String"],
    lowercase: true,
  },

  like_count: {
    type: Number,
    default: 0,
  },
  hits: {
    type: Number,
    default: 0,
  },
});

NewsSchema.pre(/^find/, function (next) {
  this.find({ image_url: { $ne: null } });
  next();
});

NewsSchema.pre(/^find/, function (next) {
	this.find({ image_url: { $ne: null } });
	next();
  });
  

module.exports = mongoose.model("news2", NewsSchema);
