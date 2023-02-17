const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
  name: {
    type: "String",
  },
  code: {
    type: "String",
  },
});

module.exports = mongoose.model("country", CountrySchema);
