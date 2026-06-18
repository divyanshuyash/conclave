"use client";

import { motion } from "framer-motion";
import {
  ChartNoAxesCombined,
  Lightbulb,
  Network,
  Sparkles,
  Trophy,
  UsersRound
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const reasons: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: "Recognition",
    text: "Turn meaningful implementation and measurable progress into moments that are seen and celebrated.",
    icon: Trophy
  },
  {
    title: "Real Connections",
    text: "Meet consultants, coaches and builders who understand the work behind the milestone.",
    icon: Network
  },
  {
    title: "Greater Visibility",
    text: "Share your journey with a focused community and step into the room with stronger credibility.",
    icon: Sparkles
  },
  {
    title: "Business Momentum",
    text: "Leave with sharper perspective, valuable conversations and renewed energy for the next chapter.",
    icon: ChartNoAxesCombined
  },
  {
    title: "Serious Community",
    text: "Spend the day among members committed to building, implementing and moving forward.",
    icon: UsersRound
  },
  {
    title: "Fresh Inspiration",
    text: "Learn from real stories and practical wins rather than theory without execution.",
    icon: Lightbulb
  }
];

export function MindMapSection() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-conclave-gold/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(217,165,32,.09),transparent_27%)]" />
      <div className="section-shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.62 }}
            className="min-w-0 self-start text-left lg:sticky lg:top-28"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-conclave-gold" />
              <p className="section-kicker">Why it matters</p>
            </div>
            <h2 className="max-w-[8ch] text-5xl leading-[0.94] text-conclave-offwhite sm:text-6xl lg:text-7xl">
              Why This
              <span className="gold-text block">Conclave</span>
              Matters
            </h2>
            <p className="mt-7 max-w-sm border-l border-conclave-gold/45 pl-5 text-base font-semibold leading-7 text-conclave-offwhite/65">
              Because implementation deserves more than a quiet result. It deserves a room that recognizes the work.
            </p>
          </motion.div>

          <div className="grid gap-px overflow-hidden border border-conclave-gold/25 bg-conclave-gold/20 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.article
                  key={reason.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.48, delay: index * 0.05 }}
                  tabIndex={0}
                  className="group relative min-h-60 overflow-hidden bg-[#0b0b09] p-6 transition-colors duration-300 hover:bg-[#121008] focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-conclave-gold/70 sm:p-8"
                >
                  <Icon
                    aria-hidden="true"
                    size={128}
                    strokeWidth={0.7}
                    className="absolute -bottom-8 -right-6 text-conclave-gold/[0.055] transition duration-500 group-hover:scale-110 group-hover:text-conclave-gold/[0.09]"
                  />
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center border border-conclave-gold/40 text-conclave-gold">
                      <Icon aria-hidden="true" size={22} strokeWidth={1.5} />
                    </span>
                    <span className="font-display text-3xl text-conclave-gold/25">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-3xl leading-none text-conclave-offwhite">{reason.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-conclave-offwhite/60 transition duration-300 lg:max-h-0 lg:translate-y-2 lg:overflow-hidden lg:opacity-0 lg:group-hover:max-h-24 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus:max-h-24 lg:group-focus:translate-y-0 lg:group-focus:opacity-100">
                    {reason.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
