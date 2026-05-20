const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: String,

    brand: String,

    category: String,

    price: Number,

    rating: Number,

    aesthetic: String,

    image: String,

    colors: [String],

    delivery: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Product",
  productSchema
);