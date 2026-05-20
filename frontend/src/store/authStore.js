import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: localStorage.getItem("sp_token") || null,
  user: JSON.parse(localStorage.getItem("sp_user") || "null"),
  setAuth: (token, user) => {
    if (token) localStorage.setItem("sp_token", token);
    if (user) localStorage.setItem("sp_user", JSON.stringify(user));
    set({ token, user });
  },
  logout: () => {
    localStorage.removeItem("sp_token");
    localStorage.removeItem("sp_user");
    set({ token: null, user: null });
  },
}));
