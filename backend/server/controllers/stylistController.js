const {
  analyzeFashionAI,
} = require("../services/aiService");

exports.analyzeStyle = async (
  req,
  res
) => {
  try {
    const {
      aesthetic,
      occasion,
      budget,
    } = req.body;

    const analysis =
      await analyzeFashionAI({
        aesthetic,
        occasion,
        budget,
      });

    res.json(analysis);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};