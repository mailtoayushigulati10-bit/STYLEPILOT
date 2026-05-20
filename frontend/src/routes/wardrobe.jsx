import { Shell } from "./dashboard";
import ProductCard from "../components/ProductCard";
import { mockProducts } from "../data/mockProducts";

export default function Wardrobe() {
  return (
    <Shell>
      <header className="mb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Wardrobe</div>
        <h1 className="mt-2 font-display text-5xl">Your <em className="not-italic text-gradient-aurora">digital</em> closet.</h1>
      </header>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockProducts.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </Shell>
  );
}
