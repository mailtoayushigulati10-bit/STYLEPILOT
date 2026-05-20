import { useEffect, useState } from "react";
import { Shell } from "./dashboard";
import ComparisonCard from "../components/ComparisonCard";
import Loader from "../components/Loader";
import { compareProducts } from "../services/compare";
import { mockProducts } from "../data/mockProducts";

export default function Compare() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    compareProducts()
      .then((r) => setData(r.data))
      .catch(() => setData({ bestPick: mockProducts[0].id, budgetPick: mockProducts[2].id, products: mockProducts.slice(0, 4) }))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Shell><Loader label="Comparing 42 retailers…" /></Shell>;

  return (
    <Shell>
      <header className="mb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Compare</div>
        <h1 className="mt-2 font-display text-5xl">The same look, <em className="not-italic text-gradient-aurora">four</em> ways.</h1>
        <p className="mt-2 text-bone/60 max-w-xl">Pilot scanned 42 retailers. Ranked by quality, fit and budget.</p>
      </header>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {data.products.map((p) => (
          <ComparisonCard key={p.id} product={p}
            badge={p.id === data.bestPick ? "Pilot's Pick" : p.id === data.budgetPick ? "Budget Pick" : null} />
        ))}
      </div>
    </Shell>
  );
}
