const express = require("express");
const router = express.Router();

const likesController = require("../controllers/likesController");
const authController = require("../controllers/authController");

router
  .route("/all-liked")
  .get(authController.protect, likesController.allLikedByUser);

module.exports = router;
