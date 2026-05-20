import { Shell } from "./dashboard";
import { useAuthStore } from "../store/authStore";
import GlowButton from "../components/GlowButton";

export default function Profile() {
  const { user, logout } = useAuthStore();
  return (
    <Shell>
      <header className="mb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Profile</div>
        <h1 className="mt-2 font-display text-5xl">{user?.username || "Atelier member"}</h1>
        <p className="mt-2 text-bone/60">{user?.email || "Signed in"}</p>
      </header>

      <div className="rounded-3xl glass-strong p-8 max-w-xl">
        <h2 className="font-display text-2xl mb-4">Account</h2>
        <div className="space-y-3 text-sm text-bone/70">
          <Row label="Plan" value="Atelier · Free" />
          <Row label="Member since" value="2026" />
          <Row label="Style profile" value="Quiet Luxury" />
        </div>
        <div className="mt-6">
          <GlowButton variant="ghost" onClick={logout}>Sign out</GlowButton>
        </div>
      </div>
    </Shell>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between border-b border-white/5 pb-2">
      <span className="text-bone/50">{label}</span><span>{value}</span>
    </div>
  );
}
