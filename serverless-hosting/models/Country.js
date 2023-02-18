const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema(
  {
    name: {
      type: "String",
    },
    code: {
      type: "String",
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

module.exports = mongoose.model("country", CountrySchema);
