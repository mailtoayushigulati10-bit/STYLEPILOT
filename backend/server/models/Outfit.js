const mongoose = require("mongoose");

const outfitSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    aesthetic: String,

    occasion: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Outfit",
  outfitSchema
);