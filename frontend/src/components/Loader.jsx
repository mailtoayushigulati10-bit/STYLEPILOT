export default function Loader({ label = "Pilot is thinking…" }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-2 border-gold/30 animate-ping" />
        <div className="absolute inset-2 rounded-full bg-aurora animate-pulse" />
      </div>
      <div className="text-xs uppercase tracking-[0.3em] text-bone/50">{label}</div>
    </div>
  );
}
