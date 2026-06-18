"use client";

import { motion } from "framer-motion";
import { Award, Eye, Handshake, Lightbulb, Network, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const experiences: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: "Recognition",
    description: "Celebrate achievements that inspire action.",
    icon: Award
  },
  {
    title: "Community",
    description: "A focused room of serious members and builders.",
    icon: Network
  },
  {
    title: "Networking",
    description: "Meet consultants, coaches and experts with intent.",
    icon: Handshake
  },
  {
    title: "Inspiration",
    description: "Real stories, practical strategies and fresh momentum.",
    icon: Lightbulb
  },
  {
    title: "Growth",
    description: "Conversations and perspectives that move business forward.",
    icon: TrendingUp
  },
  {
    title: "Visibility",
    description: "Be seen by the right community for the right work.",
    icon: Eye
  }
];

export function ExperienceCards() {
  return (
    <section className="section-shell pt-8">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.55 }}
        className="mb-11 grid gap-5 border-b border-conclave-gold/25 pb-8 md:grid-cols-[1fr_auto] md:items-end"
      >
        <h2 className="max-w-4xl text-5xl leading-[0.95] text-conclave-offwhite sm:text-6xl">
          Not Just An Event
          <span className="gold-text block">A Room Full Of Builders</span>
        </h2>
        <p className="max-w-xs text-sm font-bold uppercase leading-6 tracking-[0.1em] text-conclave-offwhite/48 md:text-right">
          One considered experience. Six lasting outcomes.
        </p>
      </motion.div>

      <div className="grid gap-px overflow-hidden border border-conclave-gold/25 bg-conclave-gold/20 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ backgroundColor: "#151109" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.045 }}
              tabIndex={0}
              className="group relative min-h-64 overflow-hidden bg-[#0a0a09] p-7 focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-conclave-gold/70 sm:p-8"
            >
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-conclave-gold/10" />
              <Icon
                aria-hidden="true"
                size={150}
                strokeWidth={0.65}
                className="absolute -bottom-10 -right-8 text-conclave-gold/[0.055] transition duration-500 group-hover:scale-110 group-hover:text-conclave-gold/[0.09]"
              />
              <div className="flex items-start justify-between">
                <Icon aria-hidden="true" className="text-conclave-gold" size={30} strokeWidth={1.35} />
                <span className="font-display text-4xl text-conclave-gold/20">0{index + 1}</span>
              </div>
              <div className="mt-16">
                <h3 className="text-4xl leading-none text-conclave-offwhite">{item.title}</h3>
                <div className="mt-4 h-px w-12 bg-conclave-gold/70" />
                <p className="mt-4 max-w-xs text-sm font-semibold leading-6 text-conclave-offwhite/58 transition duration-300 lg:max-h-0 lg:translate-y-2 lg:overflow-hidden lg:opacity-0 lg:group-hover:max-h-20 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus:max-h-20 lg:group-focus:translate-y-0 lg:group-focus:opacity-100">
                  {item.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
