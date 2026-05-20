const express = require("express");

const router = express.Router();

const {
  analyzeStyle,
} = require("../controllers/stylistController");

const protect = require("../middleware/authMiddleware");

router.post("/analyze", protect, analyzeStyle);

module.exports = router;