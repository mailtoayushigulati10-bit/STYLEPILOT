const Product = require("../models/Product");

const generateRecommendations = async ({
  aesthetic,
  budget,
  occasion,
}) => {
  const products = await Product.find();

  const recommendations = products.map(
    (product) => {
      let score = 0;

      if (
        product.aesthetic
          .toLowerCase()
          .includes(aesthetic.toLowerCase())
      ) {
        score += 40;
      }

      if (product.price <= budget) {
        score += 30;
      }

      if (product.rating >= 4.5) {
        score += 20;
      }

      if (
        occasion === "party" &&
        product.category === "Blazer"
      ) {
        score += 10;
      }

      return {
        ...product._doc,

        compatibilityScore: score,
      };
    }
  );

  recommendations.sort(
    (a, b) =>
      b.compatibilityScore -
      a.compatibilityScore
  );

  return recommendations.slice(0, 10);
};

module.exports = {
  generateRecommendations,
};