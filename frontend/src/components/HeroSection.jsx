import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import GlowButton from "./GlowButton";

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.3em] text-gold">
            <Sparkles className="h-3 w-3" /> AI Couture · Beta
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-6xl md:text-7xl leading-[1.05] mt-6">
            Your Autonomous <br />
            <em className="not-italic text-gradient-aurora">AI Fashion</em> <br />
            Concierge.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-6 max-w-md text-bone/70">
            Upload a moodboard. Tell us the occasion. StylePilot scans 40+ luxury retailers,
            curates four perfect outfits, and ships you the best one — automatically.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3">
            <Link to="/stylist"><GlowButton variant="gold">Start styling <ArrowRight className="h-4 w-4" /></GlowButton></Link>
            <Link to="/register"><GlowButton variant="ghost">Create atelier account</GlowButton></Link>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-bone/40">
            <span>Vogue</span><span>Hypebeast</span><span>SSENSE</span><span>Farfetch</span>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }}
          className="relative">
          <div className="absolute -inset-6 bg-aurora opacity-30 blur-3xl rounded-[3rem]" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] glass-strong">
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200"
              alt="" className="h-full w-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-2xl p-4 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-aurora grid place-items-center">
                <Sparkles className="h-4 w-4 text-ink" />
              </div>
              <div className="text-xs">
                <div className="text-gold uppercase tracking-widest">Pilot suggests</div>
                <div className="text-bone">"Try a silk slip with the cashmere overcoat — 96% match."</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
