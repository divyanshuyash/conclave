"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Crown, Sparkles } from "lucide-react";
import { registrationUrl } from "@/lib/event";

const points = [
  "Full-day recognition experience",
  "Networking lunch & high tea",
  "Awards ceremony access",
  "Premium business community environment"
];

export function PricingSection() {
  return (
    <motion.section
      id="pricing"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
      className="relative overflow-hidden border border-conclave-gold/45 bg-[radial-gradient(circle_at_90%_10%,rgba(217,165,32,.19),transparent_34%),linear-gradient(145deg,#16130b,#090908_68%)] p-7 shadow-gold sm:p-9"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fff2a9] to-transparent" />
      <Crown
        aria-hidden="true"
        className="absolute -right-9 -top-8 text-conclave-gold/[0.07]"
        size={190}
        strokeWidth={0.7}
      />

      <div className="relative">
        <div className="mb-6 inline-flex items-center gap-2 border border-conclave-gold/35 bg-black/35 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-conclave-gold">
          <Sparkles aria-hidden="true" size={14} />
          Exclusive Members Event
        </div>
        <h2 className="max-w-sm text-5xl leading-[0.95] text-conclave-offwhite sm:text-6xl">
          Your Place In
          <span className="gold-text block">The Room</span>
        </h2>
        <div className="mt-5 flex items-end gap-3 border-b border-conclave-gold/20 pb-6">
          <p className="gold-text font-display text-6xl leading-none sm:text-7xl">₹4,999</p>
          <span className="pb-1 text-[10px] font-black uppercase tracking-[0.14em] text-conclave-offwhite/45">
            Member access
          </span>
        </div>

        <div className="mt-7 space-y-4">
          {points.map((point) => (
            <div key={point} className="flex items-start gap-3 text-sm font-semibold leading-6 text-conclave-offwhite/78">
              <CheckCircle2 aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-conclave-gold" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        <motion.a
          href={registrationUrl}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="gold-button mt-8 w-full"
          aria-label="Yes, I want to be there"
        >
          Yes! I Want To Be There
          <ArrowRight aria-hidden="true" size={17} />
        </motion.a>
        <p className="mt-5 text-center text-[10px] font-black uppercase tracking-[0.14em] text-conclave-muted">
          Limited seats · Reserve your place today
        </p>
      </div>
    </motion.section>
  );
}
