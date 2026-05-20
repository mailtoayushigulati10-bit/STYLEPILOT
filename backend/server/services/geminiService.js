const axios = require("axios");

const generateGeminiResponse = async (
  prompt
) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }
    );

    return response.data.candidates[0].content
      .parts[0].text;
  } catch (error) {
    console.log(error.message);

    return "AI styling assistant unavailable";
  }
};

module.exports = {
  generateGeminiResponse,
};