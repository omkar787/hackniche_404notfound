const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
    },
    link: {
      type: "String",
    },
    keywords: {
      type: ["String"],
    },
    creator: {
      type: ["String"],
    },
    video_url: {
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
    full_description: {
      type: "String",
    },
    image_url: {
      type: "String",
    },
    source_id: {
      type: "String",
    },
    country: {
      type: ["String"],
    },
    category: {
      type: ["String"],
    },
    language: {
      type: "String",
    },
    like_count: {
      type: Number,
      default: 0,
    },
    comment_count: {
      type: Number,
      default: 0,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("news", NewsSchema);
