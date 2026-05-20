import { motion } from "framer-motion";
import { Sparkles, Star, Truck, TrendingUp } from "lucide-react";

export default function ComparisonCard({ product, badge }) {
  return (
    <motion.div whileHover={{ y: -4 }}
      className={`relative rounded-3xl glass-strong overflow-hidden ${badge ? "ring-1 ring-gold/60 shadow-gold" : ""}`}>
      {badge && (
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-widest text-ink">
          <Sparkles className="h-3 w-3" /> {badge}
        </div>
      )}
      <div className="aspect-[4/5]">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
      </div>
      <div className="p-5">
        <div className="text-[11px] uppercase tracking-[0.2em] text-bone/50">{product.brand}</div>
        <h3 className="font-display text-xl mt-1">{product.name}</h3>
        <div className="mt-3 flex items-end justify-between">
          <div className="font-display text-3xl text-gradient-gold">${product.price}</div>
          <div className="text-right text-xs text-bone/60">
            <div className="flex items-center gap-1"><Star className="h-3 w-3 fill-gold text-gold" /> {product.rating}</div>
            <div className="mt-1 flex items-center gap-1"><Truck className="h-3 w-3" /> {product.delivery}</div>
          </div>
        </div>
        <Bar label="Style match" value={product.styleScore} />
        <Bar label="Budget fit"  value={product.budgetScore} />
        <button className="mt-5 w-full rounded-full border border-white/10 py-2 text-xs hover:bg-white/5">
          <TrendingUp className="mr-1 inline h-3 w-3" /> View at retailer
        </button>
      </div>
    </motion.div>
  );
}

function Bar({ label, value }) {
  return (
    <div className="mt-4">
      <div className="mb-1 flex justify-between text-[10px] uppercase tracking-widest text-bone/50">
        <span>{label}</span><span className="text-bone">{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={{ width: `${value}%` }}
          transition={{ duration: 1 }} className="h-full bg-gold" />
      </div>
    </div>
  );
}
