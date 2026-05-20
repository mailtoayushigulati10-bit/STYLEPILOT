const compareProductsService = (products) => {
  const compared = products.map((product) => {
    let score = 0;

    score += product.rating * 20;

    if (product.price < 5000) {
      score += 20;
    }

    if (product.delivery === "2 days") {
      score += 15;
    }

    return {
      ...product,

      compatibility: score,
    };
  });

  compared.sort(
    (a, b) => b.compatibility - a.compatibility
  );

  return {
    bestPick: compared[0],

    budgetPick: [...compared].sort(
      (a, b) => a.price - b.price
    )[0],

    compared,
  };
};

module.exports = {
  compareProductsService,
};