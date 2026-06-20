"use client";

import { motion } from "framer-motion";
import {
  ChartNoAxesCombined,
  ChevronRight,
  Lightbulb,
  Network,
  Sparkles,
  Target,
  Trophy,
  UsersRound
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const journey = [
  { label: "Information", icon: Lightbulb },
  { label: "Implementation", icon: Target },
  { label: "Measurable Results", icon: ChartNoAxesCombined },
  { label: "Recognition", icon: Trophy }
];

const outcomes: Array<{ title: string; caption: string; icon: LucideIcon }> = [
  { title: "Recognition", caption: "Milestones made visible", icon: Trophy },
  { title: "Connections", caption: "The right people in one room", icon: Network },
  { title: "Visibility", caption: "Credibility that travels", icon: Sparkles },
  { title: "Momentum", caption: "Ideas converted into action", icon: ChartNoAxesCombined },
  { title: "Community", caption: "Builders moving together", icon: UsersRound },
  { title: "Inspiration", caption: "Real stories and real proof", icon: Lightbulb }
];

export function MindMapSection() {
  return (
    <section id="about" className="relative overflow-hidden border-y border-conclave-gold/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,165,32,.09),transparent_44%)]" />
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="section-heading"
        >
          <p className="section-kicker">Why It Matters</p>
          <h2 className="section-title">Why This <span className="gold-text">Conclave Matters</span></h2>
          <p className="section-copy">
            Most events celebrate information. Chanakya Conclave celebrates implementation and measurable results.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-4">
          {journey.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.42 }}
                className={`relative flex min-h-28 flex-col items-center justify-center border px-3 text-center ${
                  index === 1 || index === 3
                    ? "border-conclave-gold/60 bg-conclave-gold/[0.12] shadow-gold-soft"
                    : "border-conclave-gold/20 bg-black/55"
                }`}
              >
                <Icon aria-hidden="true" size={23} className="text-conclave-gold" strokeWidth={1.45} />
                <span className="mt-3 text-[9px] font-black uppercase tracking-[0.12em] text-conclave-offwhite/78">{item.label}</span>
                {index < journey.length - 1 && (
                  <ChevronRight aria-hidden="true" size={17} className="absolute -right-[13px] top-1/2 z-10 hidden -translate-y-1/2 text-conclave-gold sm:block" />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
          {outcomes.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.045 }}
                className="group relative flex min-h-32 items-center gap-3 overflow-hidden border border-conclave-gold/20 bg-[#0a0a09]/90 p-4 transition hover:border-conclave-gold/45 hover:bg-[#151109] sm:p-5"
              >
                <Icon aria-hidden="true" size={86} strokeWidth={0.65} className="absolute -bottom-6 -right-4 text-conclave-gold/[0.055]" />
                <span className="grid h-11 w-11 shrink-0 place-items-center border border-conclave-gold/40 bg-conclave-gold/[0.08] text-conclave-gold">
                  <Icon aria-hidden="true" size={19} strokeWidth={1.5} />
                </span>
                <span className="relative min-w-0">
                  <span className="block font-display text-2xl leading-none text-conclave-offwhite sm:text-3xl">{item.title}</span>
                  <span className="mt-2 block text-[9px] font-black uppercase leading-4 tracking-[0.07em] text-conclave-gold/65 sm:tracking-[0.09em]">{item.caption}</span>
                </span>
              </motion.article>
            );
          })}
        </div>

        <div className="mx-auto mt-4 grid max-w-3xl grid-cols-2 gap-px overflow-hidden border border-conclave-gold/25 bg-conclave-gold/20 sm:grid-cols-4">
          {["Courage", "Consistency", "Action", "Achievement"].map((value) => (
            <span key={value} className="bg-black/75 px-2 py-3 text-center text-[9px] font-black uppercase tracking-[0.1em] text-conclave-gold sm:tracking-[0.12em]">
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
