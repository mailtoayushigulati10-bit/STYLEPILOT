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

      toast.success("Account created successfully");

      // redirect directly to login (NO OTP FLOW)
      nav({ to: "/login" });

    } catch (err) {
      toast.error(err?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      title="Join the atelier"
      subtitle="100 free looks. No card required."
    >
      <form onSubmit={submit} className="space-y-3">

        <Field
          icon={User}
          placeholder="Username"
          value={form.username}
          onChange={(v) => setForm({ ...form, username: v })}
        />

        <Field
          icon={Mail}
          placeholder="you@atelier.com"
          type="email"
          value={form.email}
          onChange={(v) => setForm({ ...form, email: v })}
        />

        <Field
          icon={Lock}
          placeholder="Create password"
          type="password"
          value={form.password}
          onChange={(v) => setForm({ ...form, password: v })}
        />

        <GlowButton variant="gold" className="w-full" disabled={loading}>
          {loading ? "Creating…" : "Create account"}{" "}
          <ArrowRight className="h-4 w-4" />
        </GlowButton>

      </form>

      <div className="mt-6 text-center text-sm text-bone/60">
        <Link to="/login" className="hover:text-bone">
          Already a member? Sign in →
        </Link>
      </div>
    </AuthShell>
  );
}