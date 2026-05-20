import { useState } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import { Mail, Lock, User, ArrowRight, Sparkles } from "lucide-react";
import GlowButton from "../components/GlowButton";
import { registerUser } from "../services/auth";
import toast from "react-hot-toast";

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerUser(form);
      toast.success("OTP sent to your email");
      localStorage.setItem("sp_pending_email", form.email);
      nav({ to: "/verify-otp" });
    } catch {} finally { setLoading(false); }
  };

  return <AuthShell title="Join the atelier" subtitle="100 free looks. No card required.">
    <form onSubmit={submit} className="space-y-3">
      <Field icon={User}  placeholder="Username"
        value={form.username} onChange={(v) => setForm({ ...form, username: v })} />
      <Field icon={Mail}  placeholder="you@atelier.com" type="email"
        value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
      <Field icon={Lock}  placeholder="Create password" type="password"
        value={form.password} onChange={(v) => setForm({ ...form, password: v })} />
      <GlowButton variant="gold" className="w-full" disabled={loading}>
        {loading ? "Creating…" : "Create account"} <ArrowRight className="h-4 w-4" />
      </GlowButton>
    </form>
    <div className="mt-6 text-center text-sm text-bone/60">
      <Link to="/login" className="hover:text-bone">Already a member? Sign in →</Link>
    </div>
  </AuthShell>;
}

export function AuthShell({ title, subtitle, children }) {
  return (
    <div className="relative grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden overflow-hidden lg:block">
        <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400"
          alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
        <div className="relative flex h-full flex-col justify-between p-12">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-2xl bg-aurora"><Sparkles className="h-4 w-4 text-ink" /></div>
            <span className="font-display text-lg">StylePilot AI</span>
          </Link>
          <div>
            <h2 className="font-display text-5xl leading-tight">
              The atelier where<br /><em className="not-italic text-gradient-gold">algorithms</em> meet taste.
            </h2>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Welcome</div>
            <h1 className="mt-2 font-display text-4xl">{title}</h1>
            <p className="mt-2 text-sm text-bone/60">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export function Field({ icon: Icon, value, onChange, ...props }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl glass-strong px-4 py-3">
      <Icon className="h-4 w-4 text-bone/50" />
      <input value={value} onChange={(e) => onChange(e.target.value)}
        {...props}
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-bone/40" />
    </div>
  );
}
