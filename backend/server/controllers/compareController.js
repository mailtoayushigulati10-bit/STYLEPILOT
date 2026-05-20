const Product = require("../models/Product");

const {
  compareProductsService,
} = require("../services/compareService");

exports.compareProducts = async (
  req,
  res
) => {
  try {
    const products = await Product.find();

    const compared =
      compareProductsService(products);

    res.json(compared);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};