const Likes = require("../models/Likes");
const News = require("../models/News");
const catchAsync = require("../utils/catchAsync");

exports.allLikedByUser = catchAsync(async (req, res) => {
  const userId = req.user._id;

  const result = await Likes.find({ userId }).lean().exec();

  res.json(result);
});

exports.like = catchAsync(async (req, res) => {
  const userId = req.user._id;
  let queryString = JSON.stringify(req.query);
  queryString = queryString.replace(
    /\b(gte|gt|lte|lt|eq)\b/g,
    (match) => `$${match}`
  );

  queryString = JSON.parse(queryString);

  console.log(queryString, userId);

  const hasLiked = await Likes.find({
    userId: userId,
    newsId: queryString.likeId,
  })
    .lean()
    .exec();
  console.log({ hasLiked });
  if (!hasLiked || !hasLiked.length) {
    await Likes.create({ userId, newsId: queryString.likeId });
    await News.findByIdAndUpdate(queryString.likeId, {
      $inc: { like_count: 1 },
    });
  } else {
    await Likes.deleteOne({ userId, newsId: queryString.likeId });
    await News.findByIdAndUpdate(queryString.likeId, {
      $inc: { like_count: -1 },
    });
  }

  return res.sendStatus(200);
});
