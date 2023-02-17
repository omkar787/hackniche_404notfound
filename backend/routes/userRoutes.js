const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/logout").get(authController.logout);
router.route("/verifyLoggedIn").get(authController.verifyLoggedIn);

module.exports = router;
