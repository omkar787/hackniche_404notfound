const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: "String",
  },
  password: {
    type: "String",
  },
  name: {
    type: "String",
  },
  category: {
    type: ["String"],
  },
});

module.exports = mongoose.model("news", UserSchema);
