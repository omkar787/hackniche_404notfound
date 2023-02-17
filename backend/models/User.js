const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

UserSchema.methods.verifyPassword = async function (password, hashPassword) {
  return await bcrypt.compare(password, hashPassword);
};

UserSchema.pre("save", async function (next) {
  // Only run this function if password is actually modified
  if (!this.isModified("password")) return next();

  // Hash the password
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("users", UserSchema);
