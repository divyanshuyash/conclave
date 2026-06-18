"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { eventStartsAtIso } from "@/lib/event";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const targetDate = new Date(eventStartsAtIso).getTime();
const emptyRemaining: Remaining = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
};

const countdownUnits: Array<{ key: keyof Remaining; label: string }> = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" }
];

function getRemaining(): Remaining {
  const distance = Math.max(targetDate - Date.now(), 0);
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60)
  };
}

export function CountdownTimer() {
  const [remaining, setRemaining] = useState<Remaining>(emptyRemaining);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const updateRemaining = () => {
      setRemaining(getRemaining());
      setIsLive(true);
    };

    updateRemaining();
    const id = window.setInterval(updateRemaining, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="px-5 pt-8 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.55 }}
        className="mx-auto grid max-w-5xl gap-5 rounded-[6px] border border-conclave-gold/25 bg-[#11100d]/85 p-4 shadow-gold backdrop-blur-xl sm:p-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"
      >
        <div className="px-1 text-center lg:text-left">
          <p className="section-kicker">Event Begins In</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-conclave-offwhite/70">
            Wednesday, 2 September 2026 at Hyatt Centric Hebbal Bengaluru.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4" aria-live="polite">
          {countdownUnits.map((unit) => {
            const value = remaining[unit.key];
            return (
            <div
              key={unit.key}
              className="rounded-[4px] border border-conclave-gold/20 bg-black/45 px-2 py-5 text-center"
            >
              <motion.span
                key={isLive ? `${unit.key}-${value}` : unit.key}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="gold-text block font-display text-4xl leading-none sm:text-5xl"
              >
                {isLive ? String(value).padStart(2, "0") : "--"}
              </motion.span>
              <span className="mt-2 block text-[10px] font-black uppercase tracking-[0.2em] text-conclave-muted sm:text-xs">
                {unit.label}
              </span>
            </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
