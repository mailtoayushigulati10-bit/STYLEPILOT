import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function OutfitCard({ outfit }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-3xl glass-strong overflow-hidden">
      <div className="aspect-[5/6] overflow-hidden relative">
        <img src={outfit.image} alt={outfit.title} className="h-full w-full object-cover" />
        <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-widest text-gold">
          <Sparkles className="h-3 w-3" /> {outfit.aesthetic}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl">{outfit.title}</h3>
        <p className="mt-2 text-sm text-bone/60 leading-relaxed">{outfit.explanation}</p>
        <div className="mt-4">
          <div className="mb-1 flex justify-between text-[10px] uppercase tracking-widest text-bone/50">
            <span>Compatibility</span><span className="text-bone">{outfit.compatibility}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${outfit.compatibility}%` }}
              transition={{ duration: 1 }} className="h-full bg-gold" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
