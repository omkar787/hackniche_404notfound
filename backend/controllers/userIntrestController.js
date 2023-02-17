const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");

exports.update_intrest = catchAsync(async (req, res, next) => {
	const { intrest } = req.body;

	req.user.category = intrest;

	await User.findByIdAndUpdate({ _id: req.user._id }, req.user, {
		new: true,
		runValidators: true,
	});

	res.status(200).json({
		status: "success",
		msg: "Update successfully",
	});
});

exports.get_intrest = catchAsync(async (req, res, next) => {
	const { category } = req.user;
	res.status(200).json({
		status: "success",
		intrest: category,
	});
});
