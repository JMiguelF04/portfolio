"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/Terminal";

interface IntroScreenProps {
  name: string;
  children: React.ReactNode;
}

export default function IntroScreen({ name, children }: IntroScreenProps) {
  const [phase, setPhase] = useState<"intro" | "fading" | "done" | "loading">("loading");

  useEffect(() => {
    if (sessionStorage.getItem("intro-seen")) {
      setPhase("done");
    } else {
      setPhase("intro");
    }
  }, []);

  useEffect(() => {
    if (phase === "intro") {
      const timer = setTimeout(() => setPhase("fading"), 5000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "fading") {
      sessionStorage.setItem("intro-seen", "1");
      const timer = setTimeout(() => setPhase("done"), 600);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <>
      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#09090B] flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: phase === "fading" ? 0 : 1,
                y: phase === "fading" ? -10 : 0,
                scale: phase === "fading" ? 0.97 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              <Terminal
                className="w-[90vw] max-w-lg shadow-2xl shadow-emerald-500/5"
                startOnView={false}
              >
                <TypingAnimation
                  duration={35}
                  className="text-emerald-400 font-mono"
                  startOnView={false}
                >
                  {`> npx create-portfolio@latest ${name.toLowerCase().replace(/\s+/g, "-")}`}
                </TypingAnimation>

                <AnimatedSpan className="text-zinc-400 font-mono" startOnView={false}>
                  <span>Installing dependencies...</span>
                </AnimatedSpan>

                <AnimatedSpan className="text-zinc-400 font-mono" startOnView={false}>
                  <span className="flex items-center gap-2">
                    <span className="text-blue-400">info</span> next.js, react, typescript, tailwindcss
                  </span>
                </AnimatedSpan>

                <AnimatedSpan className="text-zinc-400 font-mono" startOnView={false}>
                  <span className="flex items-center gap-2">
                    <span className="text-blue-400">info</span> prisma, postgresql
                  </span>
                </AnimatedSpan>

                <AnimatedSpan className="text-zinc-400 font-mono" startOnView={false}>
                  <span className="flex items-center gap-2">
                    <span className="text-yellow-400">warn</span> too much coffee detected
                  </span>
                </AnimatedSpan>

                <AnimatedSpan className="text-zinc-400 font-mono" startOnView={false}>
                  <span><span className="text-emerald-400">&#10004;</span> Dependencies installed successfully.</span>
                </AnimatedSpan>

                <AnimatedSpan className="text-zinc-400 font-mono" startOnView={false}>
                  <span><span className="text-emerald-400">&#10004;</span> Project compiled in 1.2s</span>
                </AnimatedSpan>

                <AnimatedSpan className="text-emerald-400 font-mono font-semibold" startOnView={false}>
                  <span>&#128640; Portfolio ready — launching...</span>
                </AnimatedSpan>
              </Terminal>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "done" ? 1 : 0 }}
        transition={{ duration: phase === "done" ? 0.6 : 0 }}
        style={{ pointerEvents: phase === "done" ? "auto" : "none" }}
      >
        {children}
      </motion.div>
    </>
  );
}
