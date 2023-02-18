const mongoose = require("mongoose");

const SourcesSchema = new mongoose.Schema({
	name: {
		type: "String",
		unique: true,
	},
	description: {
		type: "String",
	},
});

module.exports = mongoose.model("sources", SourcesSchema);
