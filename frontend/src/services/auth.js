import api from "./api";
export const registerUser = (data) => api.post("/api/auth/register", data);
export const verifyOtp = (data) => api.post("/api/auth/verify-otp", data);
export const loginUser = (data) => api.post("/api/auth/login", data);
