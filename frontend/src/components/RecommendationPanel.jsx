import OutfitCard from "./OutfitCard";

export default function RecommendationPanel({ outfits = [] }) {
  if (!outfits.length) return null;
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Curated by Pilot</div>
          <h2 className="font-display text-3xl">Your generated looks</h2>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {outfits.map((o) => <OutfitCard key={o.id} outfit={o} />)}
      </div>
    </section>
  );
}
