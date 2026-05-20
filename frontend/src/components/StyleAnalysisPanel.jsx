import { motion } from "framer-motion";

export default function StyleAnalysisPanel({ analysis }) {
  if (!analysis) return null;
  const { aesthetic, dominantColors = [], confidence = 0, styleAdvice } = analysis;
  return (
    <div className="rounded-3xl glass-strong p-6">
      <div className="text-xs uppercase tracking-[0.3em] text-gold">Style analysis</div>
      <h2 className="mt-2 font-display text-3xl">{aesthetic || "Quiet Luxury"}</h2>
      <p className="mt-3 text-sm text-bone/70 leading-relaxed">{styleAdvice}</p>

      <div className="mt-6">
        <div className="text-[10px] uppercase tracking-widest text-bone/50 mb-2">Dominant palette</div>
        <div className="flex gap-2">
          {dominantColors.map((c, i) => (
            <div key={i} className="h-10 w-10 rounded-xl border border-white/10" style={{ background: c }} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-[10px] uppercase tracking-widest text-bone/50 mb-2">
          <span>AI confidence</span><span className="text-bone">{Math.round(confidence * 100)}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
          <motion.div initial={{ width: 0 }} animate={{ width: `${confidence * 100}%` }}
            transition={{ duration: 1 }} className="h-full bg-aurora" />
        </div>
      </div>
    </div>
  );
}
