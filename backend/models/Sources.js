const mongoose = require("mongoose");

const SourcesSchema = new mongoose.Schema({
	name: {
		type: "String",
	},
	description: {
		type: "String",
	},
});

module.exports = mongoose.model("sources", SourcesSchema);
