const express = require("express");

const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const stylistRoutes = require("./routes/stylistRoutes");

const uploadRoutes = require("./routes/uploadRoutes");

const compareRoutes = require("./routes/compareRoutes");

const wishlistRoutes = require("./routes/wishlistRoutes");

const recommendationRoutes = require("./routes/recommendationRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "StylePilot AI Backend Running",
  });
});

app.use("/api/auth", authRoutes);

app.use("/api/stylist", stylistRoutes);

app.use("/api/upload", uploadRoutes);

app.use("/api/compare", compareRoutes);

app.use("/api/wishlist", wishlistRoutes);

app.use(
  "/api/recommendations",
  recommendationRoutes
);

module.exports = app;