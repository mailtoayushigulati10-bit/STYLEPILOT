const mongoose = require("mongoose");

const wardrobeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    image: String,

    category: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Wardrobe",
  wardrobeSchema
);