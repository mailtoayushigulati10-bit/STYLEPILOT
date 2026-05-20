import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, X } from "lucide-react";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi, I'm Pilot. What are you styling today?" },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { role: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", text: "Curating four looks within your budget — one moment." }]);
    }, 700);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-aurora shadow-glow">
        <Sparkles className="h-5 w-5 text-ink" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-24 right-6 z-50 w-80 rounded-3xl glass-strong overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-aurora grid place-items-center"><Sparkles className="h-4 w-4 text-ink" /></div>
                <div>
                  <div className="text-sm">Pilot</div>
                  <div className="text-[10px] text-gold uppercase tracking-widest">AI Stylist</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)}><X className="h-4 w-4" /></button>
            </div>
            <div className="p-4 space-y-3 max-h-72 overflow-y-auto scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={`text-sm ${m.role === "user" ? "text-right" : ""}`}>
                  <span className={`inline-block rounded-2xl px-3 py-2 ${m.role === "user" ? "bg-gold text-ink" : "bg-white/5"}`}>
                    {m.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-white/5 flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask Pilot…"
                className="flex-1 bg-transparent text-sm outline-none px-2" />
              <button onClick={send} className="grid h-9 w-9 place-items-center rounded-full bg-gold text-ink">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
