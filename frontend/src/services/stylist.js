import api from "./api";
export const analyzeStyle = (data) => api.post("/api/stylist/analyze", data);
export const generateRecommendations = (data) =>
  api.post("/api/recommendations/generate", data);
export const uploadImage = (file) => {
  const fd = new FormData();
  fd.append("image", file);
  return api.post("/api/upload/image", fd, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
