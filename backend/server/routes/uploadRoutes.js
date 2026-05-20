const express = require("express");

const multer = require("multer");

const router = express.Router();

const {
  uploadImage,
} = require("../controllers/uploadController");

const protect = require("../middleware/authMiddleware");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() + "-" + file.originalname
    );
  },
});

const upload = multer({
  storage,
});

router.post(
  "/image",
  protect,
  upload.single("image"),
  uploadImage
);

module.exports = router;