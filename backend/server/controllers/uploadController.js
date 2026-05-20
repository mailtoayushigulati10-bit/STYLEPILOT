exports.uploadImage = async (req, res) => {
  try {
    res.json({
      message: "Image uploaded",
      image: req.file.path,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};