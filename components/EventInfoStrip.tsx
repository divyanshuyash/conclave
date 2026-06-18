"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const items: Array<{ icon: LucideIcon; label: string; detail: string }> = [
  { icon: CalendarDays, label: "2nd September 2026", detail: "Wednesday" },
  { icon: Clock, label: "8:00 AM – 5:00 PM", detail: "Full-day experience" },
  { icon: MapPin, label: "Hyatt Centric Hebbal Bengaluru", detail: "Premium venue" },
  { icon: UsersRound, label: "Exclusive For Transformers Hub Members", detail: "Members only" }
];

export function EventInfoStrip() {
  return (
    <section className="relative z-10 -mt-12 px-5 lg:-mt-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mx-auto grid max-w-7xl overflow-hidden border border-conclave-gold/40 bg-[linear-gradient(120deg,rgba(22,19,11,.96),rgba(8,8,7,.96))] shadow-gold backdrop-blur-xl md:grid-cols-2 lg:grid-cols-4"
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.48 }}
              className="relative flex min-h-28 items-center gap-4 border-b border-conclave-gold/15 p-5 last:border-b-0 md:border-r md:last:border-r-0 lg:border-b-0"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-conclave-gold/45 to-transparent" />
              <span className="grid h-[3.25rem] w-[3.25rem] shrink-0 place-items-center rounded-full border border-conclave-gold/40 bg-black/45 text-conclave-gold">
                <Icon aria-hidden="true" size={28} strokeWidth={1.8} />
              </span>
              <span>
                <span className="block text-sm font-black uppercase leading-5 tracking-[0.08em] text-conclave-offwhite">
                  {item.label}
                </span>
                <span className="mt-1 block text-xs font-black uppercase tracking-[0.14em] text-conclave-gold">
                  {item.detail}
                </span>
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
