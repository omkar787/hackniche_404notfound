const mongoose = require("mongoose");

const LikesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
  },
  newsId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "news2",
  },
});

module.exports = mongoose.model("likes", LikesSchema);
