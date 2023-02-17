const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const userIntrestController = require("../controllers/userIntrestController");
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/logout").get(authController.logout);

router.route("/verifyLoggedIn").get(authController.verifyLoggedIn);

router
	.route("/update-intrest")
	.patch(authController.protect, userIntrestController.update_intrest);


router
	.route("/get-intrest")
	.patch(authController.protect, userIntrestController.get_intrest);
module.exports = router;
