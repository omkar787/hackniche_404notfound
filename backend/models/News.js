const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
	title: {
		type: "String",
	},
	link: {
		type: "String",
	},
	// keywords: {
	//   type: ["String"],
	// },
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
	source_id: {
		type: mongoose.Types.ObjectId,
	},

	category: {
		type: mongoose.SchemaTypes.ObjectId,
	},
	language: {
		type: "String",
	},
	like_count: {
		type: Number,
		default: 0,
	},
	// comment_count: {
	// 	type: Number,
	// 	default: 0,
	// },
});

module.exports = mongoose.model("news", NewsSchema);
