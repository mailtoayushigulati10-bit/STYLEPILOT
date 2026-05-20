import { useState } from "react";
import { Shell } from "./dashboard";
import UploadCard from "../components/UploadCard.jsx";
import BudgetSlider from "../components/BudgetSlider";
import OccasionSelector from "../components/OccasionSelector";
import GlowButton from "../components/GlowButton";
import Loader from "../components/Loader";
import StyleAnalysisPanel from "../components/StyleAnalysisPanel";
import RecommendationPanel from "../components/RecommendationPanel";
import { analyzeStyle } from "../services/stylist";
import { useStylistStore } from "../store/stylistStore";
import { mockOutfits } from "../data/mockOutfits";
import { Wand2 } from "lucide-react";
import toast from "react-hot-toast";

const AESTHETICS = ["Quiet Luxury", "Old Money", "Y2K", "Minimal", "Streetwear", "Editorial"];

export default function Stylist() {
  const [aesthetic, setAesthetic] = useState("Quiet Luxury");
  const [occasion, setOccasion] = useState("Date Night");
  const [budget, setBudget] = useState(1200);
  const [loading, setLoading] = useState(false);
  const { analysis, outfits, setAnalysis } = useStylistStore();

  const run = async () => {
    setLoading(true);
    try {
      const res = await analyzeStyle({ aesthetic, occasion, budget });
      setAnalysis(res.data);
      toast.success("Pilot finished your edit");
    } catch {
      // graceful fallback (demo-friendly)
      setAnalysis({
        aesthetic,
        dominantColors: ["#d8c9a8", "#16161a", "#c9a96a", "#f5f1e8"],
        confidence: 0.94,
        styleAdvice: "Soft neutrals layered with structured tailoring. Lean into texture, not pattern.",
        outfits: mockOutfits,
      });
    } finally { setLoading(false); }
  };

  return (
    <Shell>
      <header className="mb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">AI Stylist</div>
        <h1 className="mt-2 font-display text-5xl">Compose a <em className="not-italic text-gradient-aurora">look</em>.</h1>
        <p className="mt-2 text-bone/60 max-w-xl">
          Upload a moodboard, pick the vibe, and let Pilot curate four outfits across luxury retailers.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1"><UploadCard label="Upload selfie" /></div>
        <div className="lg:col-span-1"><UploadCard label="Upload inspo" /></div>

        <div className="lg:col-span-1 rounded-3xl glass-strong p-6 space-y-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-bone/50 mb-3">Aesthetic</div>
            <div className="flex flex-wrap gap-2">
              {AESTHETICS.map((a) => (
                <button key={a} onClick={() => setAesthetic(a)}
                  className={`rounded-full px-3 py-1.5 text-xs ${aesthetic === a ? "bg-gold text-ink" : "glass text-bone/70"}`}>
                  {a}
                </button>
              ))}
            </div>
          </div>
          <OccasionSelector value={occasion} onChange={setOccasion} />
          <BudgetSlider value={budget} onChange={setBudget} />
          <GlowButton variant="gold" className="w-full" onClick={run}>
            <Wand2 className="h-4 w-4" /> Generate looks
          </GlowButton>
        </div>
      </div>

      {loading && <Loader label="Curating four looks…" />}

      {analysis && !loading && (
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1"><StyleAnalysisPanel analysis={analysis} /></div>
          <div className="lg:col-span-2"><RecommendationPanel outfits={outfits} /></div>
        </div>
      )}
    </Shell>
  );
}
