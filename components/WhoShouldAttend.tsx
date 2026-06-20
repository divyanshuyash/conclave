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
  { label: "Members Working Towards Their First ₹1 Lakh", icon: Medal },
  { label: "Members Working Towards Their First ₹10 Lakh", icon: Trophy }
];

export function WhoShouldAttend() {
  return (
    <section className="section-shell pt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
        className="section-heading mb-10"
      >
        <p className="section-kicker">The Right Room</p>
        <h2 className="section-title">Who Should <span className="gold-text">Attend</span></h2>
        <p className="section-copy">Built for members ready to learn, implement, earn and grow.</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-px overflow-hidden border border-conclave-gold/25 bg-conclave-gold/20 sm:grid-cols-5">
        {attendees.map((attendee, index) => {
          const Icon = attendee.icon;
          return (
            <motion.article
              key={attendee.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.035 }}
              className="group relative flex min-h-36 flex-col items-center justify-center overflow-hidden bg-[#0a0a09] p-3 text-center transition-colors hover:bg-[#161209] sm:min-h-44 sm:p-4"
            >
              <Icon aria-hidden="true" size={82} strokeWidth={0.65} className="absolute -bottom-6 -right-5 text-conclave-gold/[0.05] transition group-hover:scale-110" />
              <span className="grid h-12 w-12 place-items-center border border-conclave-gold/40 bg-conclave-gold/[0.07] text-conclave-gold">
                <Icon aria-hidden="true" size={21} strokeWidth={1.45} />
              </span>
              <p className="relative mt-4 max-w-[11rem] text-[10px] font-black uppercase leading-4 tracking-[0.05em] text-conclave-offwhite/76 sm:tracking-[0.08em]">
                {attendee.label}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
