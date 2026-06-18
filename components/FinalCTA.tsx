"use client";

import { motion } from "framer-motion";
import { ArrowRight, Crown } from "lucide-react";
import Image from "next/image";
import { registrationUrl } from "@/lib/event";
import { campaignImages } from "@/lib/images";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden border-y border-conclave-gold/30 bg-black px-5 py-24 text-center lg:px-8 lg:py-28">
      <Image
        src={campaignImages.hero}
        alt=""
        fill
        className="-z-20 object-cover object-center opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,.48),rgba(0,0,0,.94)_75%)]" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-conclave-gold/10" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-conclave-gold/10" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-5xl"
      >
        <Crown aria-hidden="true" className="mx-auto mb-6 text-conclave-gold" size={44} strokeWidth={1.2} />
        <p className="mb-5 text-[10px] font-black uppercase tracking-[0.24em] text-conclave-gold">
          Limited seats · One remarkable room
        </p>
        <h2 className="text-5xl leading-[0.96] text-conclave-offwhite sm:text-7xl lg:text-8xl">
          Be Part Of Something
          <span className="gold-text block">Legendary</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold text-conclave-offwhite/70">
          Celebrating builders, not just learners.
        </p>
        <motion.a
          href={registrationUrl}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="gold-button mt-9 w-full sm:w-auto sm:min-w-72"
          aria-label="Reserve your seat now"
        >
          Reserve Your Seat Now
          <ArrowRight aria-hidden="true" size={18} />
        </motion.a>
      </motion.div>
    </section>
  );
}
