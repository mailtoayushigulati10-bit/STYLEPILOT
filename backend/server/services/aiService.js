const analyzeFashionAI = async ({
  aesthetic,
  occasion,
  budget,
}) => {
  return {
    detectedAesthetic:
      aesthetic || "Old Money",

    dominantColors: [
      "Beige",
      "Black",
      "Cream",
    ],

    confidence: 94,

    occasion,

    budget,

    aiReasoning:
      "Neutral luxury tones match your selected aesthetic.",

    recommendations: [
      {
        title: "Luxury Neutral Fit",

        products: [
          "Beige Blazer",
          "Cream Pants",
          "Leather Loafers",
        ],
      },

      {
        title: "Minimal Streetwear Fit",

        products: [
          "Oversized Tee",
          "Relaxed Denim",
          "Chunky Sneakers",
        ],
      },
    ],
  };
};

module.exports = {
  analyzeFashionAI,
};