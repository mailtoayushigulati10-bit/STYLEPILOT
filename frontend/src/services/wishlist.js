import api from "./api";
export const addToWishlist = (data) => api.post("/api/wishlist/add", data);
export const getWishlist = () => api.get("/api/wishlist");
