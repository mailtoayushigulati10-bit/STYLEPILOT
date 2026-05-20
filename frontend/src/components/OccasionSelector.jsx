const OCCASIONS = ["Date Night", "Office", "Wedding", "Travel", "Brunch", "Gala"];

export default function OccasionSelector({ value, onChange }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-bone/50 mb-3">Occasion</div>
      <div className="flex flex-wrap gap-2">
        {OCCASIONS.map((o) => (
          <button key={o} onClick={() => onChange(o)}
            className={`rounded-full px-4 py-1.5 text-xs transition ${
              value === o ? "bg-gold text-ink" : "glass text-bone/70 hover:text-bone"
            }`}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
