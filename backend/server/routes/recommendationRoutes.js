const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  generateRecommendationsController,
} = require("../controllers/recommendationController");

router.post(
  "/generate",
  protect,
  generateRecommendationsController
);

module.exports = router;