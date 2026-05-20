import { Outlet, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import AIChatWidget from "./components/AIChatWidget";

export default function RootLayout() {
  const location = useLocation();
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* floating gradients */}
      <div className="pointer-events-none fixed -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-neon/20 blur-3xl animate-float" />
      <div className="pointer-events-none fixed top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-gold/15 blur-3xl animate-float" />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <AIChatWidget />
    </div>
  );
}
