import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";

export default function ProductCard({ product, onWishlist }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-3xl glass-strong overflow-hidden">
      <div className="aspect-[4/5] overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <div className="text-[10px] uppercase tracking-[0.2em] text-bone/50">{product.brand}</div>
        <div className="mt-1 flex items-start justify-between gap-2">
          <h3 className="font-display text-lg leading-snug">{product.name}</h3>
          <button onClick={() => onWishlist?.(product)} className="text-bone/60 hover:text-gold">
            <Heart className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-3 flex items-end justify-between">
          <div className="font-display text-2xl text-gradient-gold">${product.price}</div>
          <div className="text-xs text-bone/60 flex items-center gap-1">
            <Star className="h-3 w-3 fill-gold text-gold" /> {product.rating}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
