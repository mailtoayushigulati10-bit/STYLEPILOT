export default function BudgetSlider({ value, onChange, min = 100, max = 5000 }) {
  return (
    <div>
      <div className="flex justify-between text-xs uppercase tracking-widest text-bone/50">
        <span>Budget</span>
        <span className="text-gradient-gold font-display text-base">${value}</span>
      </div>
      <input
        type="range" min={min} max={max} step={50}
        value={value} onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-[#c9a96a]"
      />
      <div className="mt-1 flex justify-between text-[10px] text-bone/40">
        <span>${min}</span><span>${max}</span>
      </div>
    </div>
  );
}
