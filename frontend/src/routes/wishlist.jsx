import { useEffect, useState } from "react";
import { Shell } from "./dashboard";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { getWishlist } from "../services/wishlist";
import { mockProducts } from "../data/mockProducts";
import { Heart } from "lucide-react";

export default function Wishlist() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWishlist()
      .then((r) => setItems(r.data?.items || r.data || []))
      .catch(() => setItems(mockProducts))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Shell>
      <header className="mb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Wishlist</div>
        <h1 className="mt-2 font-display text-5xl">Pieces you're <em className="not-italic text-gradient-aurora">romancing</em>.</h1>
      </header>

      {loading ? <Loader /> : items.length ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      ) : (
        <Empty />
      )}
    </Shell>
  );
}

function Empty() {
  return (
    <div className="rounded-3xl glass-strong p-16 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-aurora">
        <Heart className="h-6 w-6 text-ink" />
      </div>
      <h3 className="mt-4 font-display text-2xl">Nothing saved yet</h3>
      <p className="text-sm text-bone/60 mt-2">Tap the heart on any piece to start collecting.</p>
    </div>
  );
}
