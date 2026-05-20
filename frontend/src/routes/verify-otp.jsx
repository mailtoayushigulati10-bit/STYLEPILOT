import { useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { AuthShell } from "./register";
import GlowButton from "../components/GlowButton";
import { verifyOtp } from "../services/auth";
import toast from "react-hot-toast";

export default function VerifyOtp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const refs = useRef([]);
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const email = localStorage.getItem("sp_pending_email") || "";

  const setDigit = (i, v) => {
    if (!/^\d?$/.test(v)) return;
    const next = [...otp]; next[i] = v; setOtp(next);
    if (v && i < 5) refs.current[i + 1]?.focus();
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await verifyOtp({ email, otp: otp.join("") });
      toast.success("Email verified — please sign in");
      localStorage.removeItem("sp_pending_email");
      nav({ to: "/login" });
    } catch {} finally { setLoading(false); }
  };

  return <AuthShell title="Verify your email" subtitle={`We sent a 6-digit code to ${email || "your inbox"}.`}>
    <form onSubmit={submit} className="space-y-6">
      <div className="flex gap-2 justify-between">
        {otp.map((d, i) => (
          <input key={i} ref={(el) => (refs.current[i] = el)} value={d}
            onChange={(e) => setDigit(i, e.target.value)}
            maxLength={1}
            className="h-14 w-12 rounded-2xl glass-strong text-center text-xl font-display outline-none focus:ring-2 focus:ring-gold/50" />
        ))}
      </div>
      <GlowButton variant="gold" className="w-full" disabled={loading}>
        {loading ? "Verifying…" : "Verify"}
      </GlowButton>
    </form>
  </AuthShell>;
}
