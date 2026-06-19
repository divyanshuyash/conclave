"use client";

import { motion } from "framer-motion";
import { Award, Eye, Handshake, Lightbulb, Network, PartyPopper, Rocket, TrendingUp } from "lucide-react";
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
  },
  {
    title: "Celebration",
    description: "A premium ceremony built around member milestones.",
    icon: PartyPopper
  },
  {
    title: "Momentum",
    description: "Return with the conviction to take the next action.",
    icon: Rocket
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
        className="section-heading mb-10"
      >
        <p className="section-kicker">The Experience</p>
        <h2 className="section-title">
          Not Just An Event
          <span className="gold-text block">A Room Full Of Builders</span>
        </h2>
        <p className="section-copy">
          One considered experience. Eight lasting outcomes.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-px overflow-hidden border border-conclave-gold/25 bg-conclave-gold/20 lg:grid-cols-4">
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
              className="group relative min-h-44 overflow-hidden bg-[#0a0a09] p-5 focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-conclave-gold/70 sm:min-h-56 sm:p-7 lg:min-h-60 lg:p-7"
            >
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-conclave-gold/10" />
              <Icon
                aria-hidden="true"
                size={150}
                strokeWidth={0.65}
                className="absolute -bottom-10 -right-8 text-conclave-gold/[0.055] transition duration-500 group-hover:scale-110 group-hover:text-conclave-gold/[0.09]"
              />
              <div className="flex items-start justify-between">
                <Icon aria-hidden="true" className="text-conclave-gold" size={26} strokeWidth={1.35} />
                <span className="font-display text-3xl text-conclave-gold/20 sm:text-4xl">0{index + 1}</span>
              </div>
              <div className="mt-10 sm:mt-14">
                <h3 className="text-2xl leading-none text-conclave-offwhite sm:text-3xl">{item.title}</h3>
                <div className="mt-4 h-px w-12 bg-conclave-gold/70" />
                <p className="mt-3 max-h-0 translate-y-2 overflow-hidden text-[10px] font-semibold leading-4 text-conclave-offwhite/58 opacity-0 transition duration-300 group-hover:max-h-20 group-hover:translate-y-0 group-hover:opacity-100 group-focus:max-h-20 group-focus:translate-y-0 group-focus:opacity-100 sm:mt-4 sm:text-sm sm:leading-6">
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
