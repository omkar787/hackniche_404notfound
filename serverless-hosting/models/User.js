const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a valid name"],
      trim: true,
      maxlength: [30, "Name must have less or equal then 30 characters"],
      validate: {
        validator: (value) =>
          validator.isAlpha(value, "en-US", { ignore: " " }),
        message: "A name should only contain alphabets",
      },
    },
    email: {
      type: String,
      required: [true, "Please tell us your email address"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Please enter a valid email address",
      },
    },
    password: {
      type: String,
      trim: true,
      minlength: [8, "Please provide a password with minimum length 8."],
      required: [true, "Please provide your password"],
      select: false,
      validate: {
        validator: (value) => validator.isStrongPassword(value),
        message:
          "A password must contain 8 character, 1 uppercase, 1 lowercase and 1 special character",
      },
    },
    category: {
      type: ["String"],
      lowercase: true,
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
