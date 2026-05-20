import Sidebar from "../components/Sidebar";
import { mockOutfits } from "../data/mockOutfits";
import OutfitCard from "../components/OutfitCard";
import { TrendingUp, Wand2, Sparkles, Heart } from "lucide-react";

const stats = [
  { label: "Looks generated", value: "126", icon: Wand2 },
  { label: "Compatibility avg", value: "92%", icon: TrendingUp },
  { label: "Wishlisted", value: "38", icon: Heart },
  { label: "Aesthetic", value: "Quiet Lux", icon: Sparkles },
];

export default function Dashboard() {
  return (
    <Shell>
      <header className="mb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Atelier</div>
        <h1 className="mt-2 font-display text-5xl">Good evening, <em className="not-italic text-gradient-aurora">Sloane</em>.</h1>
        <p className="mt-2 text-bone/60">Three new looks were curated overnight.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="rounded-3xl glass-strong p-5">
            <s.icon className="h-4 w-4 text-gold" />
            <div className="mt-4 font-display text-3xl">{s.value}</div>
            <div className="text-xs uppercase tracking-widest text-bone/50 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <section>
        <h2 className="font-display text-2xl mb-4">Recent looks</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {mockOutfits.map((o) => <OutfitCard key={o.id} outfit={o} />)}
        </div>
      </section>
    </Shell>
  );
}

export function Shell({ children }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="px-6 py-10 lg:pl-72">
        <div className="mx-auto max-w-7xl">{children}</div>
      </main>
    </div>
  );
}
