"use client";

import { motion } from "framer-motion";
import { CircleGauge, ExternalLink, Navigation, ShieldCheck, Ticket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { campaignImages } from "@/lib/images";

const hotelMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Hyatt%20Centric%20Hebbal%20Bengaluru%2C%2043%2F4%20Hebbal%20Village%2C%20Ballari%20Road%2C%20Bengaluru%20560092";

const features: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Premium Venue", icon: ShieldCheck },
  { label: "Limited Seats", icon: Ticket },
  { label: "High-Impact Experience", icon: CircleGauge },
  { label: "Great Connectivity", icon: Navigation }
];

export function VenueSection() {
  return (
    <section id="venue" className="section-shell pt-8">
      <div className="grid overflow-hidden border border-conclave-gold/35 bg-conclave-charcoal/60 shadow-gold lg:grid-cols-[1.08fr_0.92fr]">
        <motion.a
          href={hotelMapUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Open Hyatt Centric Hebbal Bengaluru in Google Maps"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.62 }}
          className="group relative min-h-[400px] overflow-hidden border-b border-conclave-gold/25 bg-black lg:min-h-[560px] lg:border-b-0 lg:border-r"
        >
          <Image
            src={campaignImages.venue}
            alt="Hyatt Centric Hebbal Bengaluru at dusk"
            fill
            className="object-cover transition duration-1000 group-hover:scale-[1.035]"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-conclave-gold">The official venue</p>
              <p className="mt-1 font-display text-3xl text-white sm:text-4xl">Hyatt Centric Hebbal Bengaluru</p>
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center border border-conclave-gold/50 bg-black/65 text-conclave-gold backdrop-blur">
              <ExternalLink aria-hidden="true" size={20} />
            </span>
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.62 }}
          className="flex flex-col justify-center p-7 sm:p-9 lg:p-12"
        >
          <p className="section-kicker mb-4">Venue</p>
          <h2 className="text-5xl leading-[0.95] text-conclave-offwhite sm:text-6xl">
            Hyatt Centric
            <span className="gold-text block">Hebbal Bengaluru</span>
          </h2>
          <div className="mt-7 space-y-2 text-sm font-semibold leading-7 text-conclave-offwhite/72 sm:text-base">
            <p>43/4, Hebbal Village, Ballari Road, Bengaluru 560092</p>
            <p>Wednesday, 2 September 2026 · 8:00 AM – 5:00 PM</p>
          </div>

          <div className="mt-8 grid gap-px border border-conclave-gold/20 bg-conclave-gold/20 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.label} className="flex items-center gap-3 bg-black/75 p-4">
                  <Icon aria-hidden="true" className="text-conclave-gold" size={20} />
                  <span className="text-[10px] font-black uppercase tracking-[0.12em] text-conclave-offwhite/78">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>

          <a
            href={hotelMapUrl}
            target="_blank"
            rel="noreferrer"
            className="dark-button mt-8 w-full sm:w-fit"
          >
            View On Google Maps
            <ExternalLink aria-hidden="true" size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
