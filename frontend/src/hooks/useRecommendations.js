import { useState } from "react";
import { generateRecommendations } from "../services/stylist";

export const useRecommendations = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const run = async (payload) => {
    setLoading(true);
    try {
      const res = await generateRecommendations(payload);
      setData(res.data);
      return res.data;
    } finally {
      setLoading(false);
    }
  };

  return { run, loading, data };
};
