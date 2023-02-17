const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const userIntrestController = require("../controllers/userIntrestController");
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/logout").get(authController.logout);
router
	.route("/update-intrest")
	// .get(authController.protect)
	.patch(authController.protect, userIntrestController.update_intrest);
module.exports = router;
