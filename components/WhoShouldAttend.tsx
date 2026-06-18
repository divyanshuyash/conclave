"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Building2,
  Compass,
  Medal,
  Presentation,
  ShieldCheck,
  Trophy,
  UsersRound
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const attendees: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Transformers Hub Members", icon: UsersRound },
  { label: "Avengers Members", icon: ShieldCheck },
  { label: "Consultants", icon: BriefcaseBusiness },
  { label: "Coaches", icon: Compass },
  { label: "Trainers", icon: Presentation },
  { label: "AI Consultants", icon: Bot },
  { label: "Experts", icon: BadgeCheck },
  { label: "Business Builders", icon: Building2 },
  { label: "Working Towards Their First ₹1 Lakh", icon: Medal },
  { label: "Working Towards Their First ₹10 Lakh", icon: Trophy }
];

export function WhoShouldAttend() {
  return (
    <section className="section-shell pt-8">
      <div className="relative grid overflow-hidden border border-conclave-gold/30 bg-[#090908] shadow-gold lg:grid-cols-[0.62fr_1.38fr]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_38%,rgba(217,165,32,.16),transparent_28%)]" />

        <motion.div
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.58 }}
          className="relative flex min-h-80 flex-col justify-center border-b border-conclave-gold/20 p-7 sm:p-10 lg:min-h-full lg:border-b-0 lg:border-r lg:p-12"
        >
          <div className="mb-6 grid h-16 w-16 place-items-center rounded-full border border-conclave-gold/50 bg-conclave-gold/10 text-conclave-gold">
            <UsersRound aria-hidden="true" size={30} strokeWidth={1.45} />
          </div>
          <p className="section-kicker mb-4">The right room</p>
          <h2 className="max-w-[8ch] text-5xl leading-[0.94] text-conclave-offwhite sm:text-6xl">
            Who Should
            <span className="gold-text block">Attend</span>
          </h2>
          <p className="mt-6 max-w-xs text-sm font-semibold leading-6 text-conclave-offwhite/58">
            Built for members ready to learn, implement and grow.
          </p>
        </motion.div>

        <div className="relative grid gap-px bg-conclave-gold/20 sm:grid-cols-2">
          {attendees.map((attendee, index) => {
            const Icon = attendee.icon;
            return (
              <motion.div
                key={attendee.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.035 }}
                className="group relative flex min-h-28 items-center gap-4 overflow-hidden bg-[#0b0b09] p-5 transition-colors duration-300 hover:bg-[#151109] sm:p-6"
              >
                <Icon
                  aria-hidden="true"
                  size={88}
                  strokeWidth={0.7}
                  className="absolute -bottom-5 -right-3 text-conclave-gold/[0.055] transition duration-500 group-hover:scale-110 group-hover:text-conclave-gold/[0.1]"
                />
                <span className="grid h-11 w-11 shrink-0 place-items-center border border-conclave-gold/35 text-conclave-gold">
                  <Icon aria-hidden="true" size={20} strokeWidth={1.5} />
                </span>
                <span className="relative max-w-[18rem] text-sm font-black uppercase leading-5 tracking-[0.07em] text-conclave-offwhite/82">
                  {attendee.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
