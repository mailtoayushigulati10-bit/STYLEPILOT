import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { mockOutfits } from "../data/mockOutfits";
import OutfitCard from "../components/OutfitCard";

export default function Landing() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Trending today</div>
        <h2 className="font-display text-4xl mt-2 mb-8">Looks the algorithm loves</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {mockOutfits.map((o) => <OutfitCard key={o.id} outfit={o} />)}
        </div>
      </section>
    </>
  );
}
