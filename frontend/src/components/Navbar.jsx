import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import GlowButton from "./GlowButton";

export default function Navbar() {
  const authed = !!localStorage.getItem("sp_token");
  return (
    <header className="sticky top-0 z-40 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-2xl bg-aurora">
            <Sparkles className="h-4 w-4 text-ink" />
          </div>
          <span className="font-display text-lg">StylePilot <span className="text-gradient-gold">AI</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-bone/70">
          <Link to="/stylist" className="hover:text-bone">Stylist</Link>
          <Link to="/compare" className="hover:text-bone">Compare</Link>
          <Link to="/wishlist" className="hover:text-bone">Wishlist</Link>
          <Link to="/dashboard" className="hover:text-bone">Dashboard</Link>
        </nav>
        <div className="flex items-center gap-3">
          {authed ? (
            <Link to="/dashboard"><GlowButton variant="gold">Open atelier</GlowButton></Link>
          ) : (
            <>
              <Link to="/login" className="text-sm text-bone/70 hover:text-bone">Sign in</Link>
              <Link to="/register"><GlowButton variant="gold">Get started</GlowButton></Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
