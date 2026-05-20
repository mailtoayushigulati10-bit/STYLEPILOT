import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { Home, Wand2, GitCompare, Heart, Shirt, User, LogOut, Sparkles } from "lucide-react";
import { useAuthStore } from "../store/authStore";

const items = [
  { to: "/dashboard", label: "Dashboard", icon: Home },
  { to: "/stylist", label: "AI Stylist", icon: Wand2 },
  { to: "/compare", label: "Compare", icon: GitCompare },
  { to: "/wishlist", label: "Wishlist", icon: Heart },
  { to: "/wardrobe", label: "Wardrobe", icon: Shirt },
  { to: "/profile", label: "Profile", icon: User },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const logout = useAuthStore((s) => s.logout);

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col glass-strong p-5 lg:flex">
      <Link to="/" className="mb-8 flex items-center gap-2">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-aurora">
          <Sparkles className="h-4 w-4 text-ink" />
        </div>
        <div>
          <div className="font-display text-lg leading-tight">StylePilot</div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold">AI Atelier</div>
        </div>
      </Link>

      <nav className="flex flex-col gap-1">
        {items.map(({ to, label, icon: Icon }) => {
          const active = pathname === to;
          return (
            <Link key={to} to={to}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                active ? "bg-white/10 text-bone" : "text-bone/60 hover:bg-white/5 hover:text-bone"
              }`}>
              <Icon className="h-4 w-4" /> {label}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={() => { logout(); nav({ to: "/login" }); }}
        className="mt-auto flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-bone/60 hover:bg-white/5 hover:text-bone"
      >
        <LogOut className="h-4 w-4" /> Logout
      </button>
    </aside>
  );
}
