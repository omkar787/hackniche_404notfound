const News = require("../models/News");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");

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
  console.log({ id: req.params.id });
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
  const regexTitle = new RegExp(text);

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
  //
});
