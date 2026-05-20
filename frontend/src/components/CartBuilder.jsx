import { Trash2 } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import GlowButton from "./GlowButton";

export default function CartBuilder() {
  const { items, remove, total, clear } = useCartStore();
  if (!items.length) return null;
  return (
    <div className="rounded-3xl glass-strong p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-xl">Your cart</h3>
        <button onClick={clear} className="text-xs text-bone/50 hover:text-bone">Clear</button>
      </div>
      <div className="space-y-3">
        {items.map((p) => (
          <div key={p.id} className="flex items-center gap-3">
            <img src={p.image} alt="" className="h-12 w-12 rounded-lg object-cover" />
            <div className="flex-1">
              <div className="text-sm">{p.name}</div>
              <div className="text-xs text-bone/50">${p.price}</div>
            </div>
            <button onClick={() => remove(p.id)} className="text-bone/40 hover:text-red-400">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="font-display text-2xl text-gradient-gold">${total()}</div>
        <GlowButton variant="gold">Checkout</GlowButton>
      </div>
    </div>
  );
}
