import { create } from "zustand";

export const useStylistStore = create((set) => ({
  analysis: null,
  outfits: [],
  setAnalysis: (data) =>
    set({ analysis: data, outfits: data?.outfits || [] }),
  reset: () => set({ analysis: null, outfits: [] }),
}));
