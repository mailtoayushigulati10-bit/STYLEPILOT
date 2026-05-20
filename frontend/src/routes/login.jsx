import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Mail, Lock, ArrowRight } from "lucide-react";
import GlowButton from "../components/GlowButton";
import { AuthShell, Field } from "./register";
import { loginUser } from "../services/auth";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

export default function Login() {
  const nav = useNavigate();
  const setAuth = useAuthStore((s) => s.setAuth);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginUser(form);
      const token = res.data?.token;
      const user  = res.data?.user;
      setAuth(token, user);
      toast.success("Welcome back");
      nav({ to: "/dashboard" });
    } catch {} finally { setLoading(false); }
  };

  return <AuthShell title="Welcome back" subtitle="Sign in to continue your atelier.">
    <form onSubmit={submit} className="space-y-3">
      <Field icon={Mail} placeholder="you@atelier.com" type="email"
        value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
      <Field icon={Lock} placeholder="••••••••" type="password"
        value={form.password} onChange={(v) => setForm({ ...form, password: v })} />
      <GlowButton variant="gold" className="w-full" disabled={loading}>
        {loading ? "Signing in…" : "Sign in"} <ArrowRight className="h-4 w-4" />
      </GlowButton>
    </form>
    <div className="mt-6 text-center text-sm text-bone/60">
      <Link to="/register" className="hover:text-bone">Create account →</Link>
    </div>
  </AuthShell>;
}
