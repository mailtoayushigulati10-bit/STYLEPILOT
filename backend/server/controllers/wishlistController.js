const Wishlist = require("../models/Wishlist");

exports.addToWishlist = async (req, res) => {
  try {
    const item = await Wishlist.create({
      user: req.user._id,

      product: req.body.productId,
    });

    res.json(item);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getWishlist = async (req, res) => {
  try {
    const items = await Wishlist.find({
      user: req.user._id,
    }).populate("product");

    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};