const express = require("express");

const router = express.Router();

const {
  compareProducts,
} = require("../controllers/compareController");

const protect = require("../middleware/authMiddleware");

router.get(
  "/products",
  protect,
  compareProducts
);

module.exports = router;