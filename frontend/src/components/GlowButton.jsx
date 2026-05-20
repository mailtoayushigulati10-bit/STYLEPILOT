import { motion } from "framer-motion";

export default function GlowButton({ children, variant = "gold", className = "", ...props }) {
  const base = "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition";
  const styles =
    variant === "gold"
      ? "bg-gold text-ink shadow-gold hover:brightness-110"
      : variant === "ghost"
      ? "border border-white/15 text-bone hover:bg-white/5"
      : "bg-aurora text-ink shadow-glow hover:brightness-110";
  return (
    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </motion.button>
  );
}
