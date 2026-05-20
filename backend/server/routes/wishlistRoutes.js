const express = require("express");

const router = express.Router();

const {
  addToWishlist,
  getWishlist,
} = require("../controllers/wishlistController");

const protect = require("../middleware/authMiddleware");

router.post(
  "/add",
  protect,
  addToWishlist
);

router.get(
  "/",
  protect,
  getWishlist
);

module.exports = router;