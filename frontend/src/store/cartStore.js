import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],
  add: (p) => set({ items: [...get().items, p] }),
  remove: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
  clear: () => set({ items: [] }),
  total: () => get().items.reduce((s, i) => s + (i.price || 0), 0),
}));
