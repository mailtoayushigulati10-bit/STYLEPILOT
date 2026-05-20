const {
  generateRecommendations,
} = require("../services/recommendationService");

exports.generateRecommendationsController =
  async (req, res) => {
    try {
      const {
        aesthetic,
        budget,
        occasion,
      } = req.body;

      const recommendations =
        await generateRecommendations({
          aesthetic,
          budget,
          occasion,
        });

      res.json({
        success: true,

        recommendations,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };