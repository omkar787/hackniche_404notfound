const News = require("../models/News");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const Sources = require("../models/Sources");
exports.getSources = catchAsync(async (req, res, next) => {
	const srs = await Sources.find({}).lean().exec();
	console.log(srs);
	res.status(200).json({
		status: "success",
		results: srs,
	});
});
exports.getAllNews = catchAsync(async (req, res, next) => {
	const features = new APIFeatures(News.find(), req.query)
		.filter()
		.sort()
		.fieldLimit()
		.pagination();

	const news = await features.query;

	res.status(200).json({
		status: "success",
		results: news.length,
		data: {
			data: news,
		},
	});
});

exports.getNewsById = catchAsync(async (req, res, next) => {
	const document = await News.findById(req.params.id);

	if (!document) {
		return next(new AppError("No document found with that Id", 404));
	}

	res.status(200).json({
		status: "success",
		data: {
			data: document,
		},
	});
});

exports.getAllNewsMatchingTitle = catchAsync(async (req, res, next) => {
	const text = req.params.text;
	const regexTitle = new RegExp(text, "i");

	const features = new APIFeatures(News.find({ title: regexTitle }), req.query)
		.filter()
		.sort()
		.fieldLimit()
		.pagination();

	const news = await features.query;

	res.status(200).json({
		status: "success",
		results: news.length,
		data: {
			data: news,
		},
	});
});

exports.getAllTopNews = catchAsync(async (req, res, next) => {
	req.query.limit = "5";
	req.query.sort = "-like_count,-hits,-pubDate";
	req.query.fields =
		"category,keywords,like_count,hits,title,link,description,content,pubDate,image_url,source";
	next();
});
