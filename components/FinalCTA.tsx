"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock, Crown, Heart, MapPin, Trophy } from "lucide-react";
import Image from "next/image";
import { registrationUrl } from "@/lib/event";
import { campaignImages } from "@/lib/images";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden border-y border-conclave-gold/30 bg-black px-5 py-24 text-center lg:px-8 lg:py-28">
      <Image
        src={campaignImages.finalCta}
        alt=""
        fill
        className="-z-20 object-cover object-center opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,.48),rgba(0,0,0,.9)_78%)]" />
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
        <p className="mx-auto mt-6 max-w-2xl text-sm font-semibold leading-6 text-conclave-offwhite/70 sm:text-lg">
          Join fellow Transformers Hub members for a day of recognition, networking, inspiration and celebration.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-conclave-gold/30 bg-conclave-gold/25 sm:grid-cols-5">
          {[
            { label: "2nd Sep 2026", icon: CalendarDays },
            { label: "8 AM – 5 PM", icon: Clock },
            { label: "Hyatt Centric", icon: MapPin },
            { label: "Members Event", icon: Trophy },
            { label: "Builders, Not Just Learners", icon: Heart }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex min-h-20 flex-col items-center justify-center gap-2 bg-black/72 px-2 py-3 backdrop-blur">
                <Icon aria-hidden="true" size={17} className="text-conclave-gold" />
                <span className="text-[9px] font-black uppercase leading-4 tracking-[0.06em] text-conclave-offwhite/72">{item.label}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <motion.a
            href={registrationUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="gold-button w-full sm:w-auto sm:min-w-72"
            aria-label="Reserve your seat now"
          >
            Reserve Your Seat Now
            <ArrowRight aria-hidden="true" size={18} />
          </motion.a>
          <motion.a
            href={registrationUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="dark-button w-full sm:w-auto sm:min-w-72"
            aria-label="Apply for award nomination"
          >
            Apply For Award Nomination
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
