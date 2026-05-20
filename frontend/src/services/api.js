import axios from "axios";
import toast from "react-hot-toast";

export const API_BASE = "http://localhost:5000";

const api = axios.create({ baseURL: API_BASE });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("sp_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (r) => r,
  (err) => {
    const msg = err?.response?.data?.message || err.message || "Request failed";
    toast.error(msg);
    if (err?.response?.status === 401) {
      localStorage.removeItem("sp_token");
    }
    return Promise.reject(err);
  }
);

export default api;
