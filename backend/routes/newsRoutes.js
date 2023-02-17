const express = require("express");
const router = express.Router();

const newsController = require("../controllers/newsController");

router.route("/").get(newsController.getAllNews);

router
  .route("/top-5-news")
  .get(newsController.getAllTopNews, newsController.getAllNews);

router.route("/match-text/:text").get(newsController.getAllNewsMatchingTitle);

router.route("/:id").get(newsController.getNewsById);

module.exports = router;
