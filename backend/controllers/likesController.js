const Likes = require("../models/Likes");
const catchAsync = require("../utils/catchAsync");

exports.allLikedByUser = catchAsync(async (req, res) => {
  const userId = req.user._id;

  const result = await Likes.find({ _id: userId }).lean().exec();

  res.json(result);
});
