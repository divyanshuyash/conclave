"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Crosshair, Gauge, Lightbulb, Trophy } from "lucide-react";
import Image from "next/image";
import { campaignImages } from "@/lib/images";

const system = [
  { label: "Clarity", icon: Lightbulb },
  { label: "Execution", icon: Crosshair },
  { label: "Implementation", icon: Gauge },
  { label: "Results", icon: Trophy }
];

export function CommunitySection() {
  return (
    <section className="section-shell pt-8">
      <div className="relative overflow-hidden border border-conclave-gold/30 bg-[#090908] shadow-gold">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
          <motion.figure
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden border-b border-conclave-gold/20 bg-black lg:border-b-0 lg:border-r"
          >
            <Image
              src={campaignImages.transformersHub}
              alt="Shobhit Singhal with a fellow Transformers Hub member"
              width={1122}
              height={1402}
              quality={100}
              className="block h-auto w-full"
              sizes="(min-width: 1024px) 54vw, 100vw"
            />
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col justify-center p-6 sm:p-9 lg:p-11"
          >
            <div className="absolute right-0 top-0 h-72 w-72 bg-[radial-gradient(circle,rgba(217,165,32,.12),transparent_68%)]" />
            <div className="relative h-14 w-56 overflow-hidden">
              <Image
                src={campaignImages.shobhitLogo}
                alt="Shobhit Singhal - The Transformer"
                fill
                className="object-cover object-center"
                sizes="224px"
              />
            </div>
            <p className="section-kicker mt-7">About The Transformers Hub</p>
            <h2 className="mt-3 max-w-lg text-4xl leading-[0.95] text-conclave-offwhite sm:text-5xl">
              From Expertise To
              <span className="gold-text block">Business Results</span>
            </h2>
            <p className="mt-5 max-w-lg text-sm font-semibold leading-6 text-conclave-offwhite/58">
              A community founded by Shobhit Singhal to help consultants, coaches, trainers and experts build profitable businesses through practical systems, accountability and action.
            </p>

            <div className="relative mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {system.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="relative border border-conclave-gold/25 bg-black/45 px-2 py-4 text-center">
                    <Icon aria-hidden="true" size={20} className="mx-auto text-conclave-gold" strokeWidth={1.45} />
                    <p className="mt-2 text-[9px] font-black uppercase tracking-[0.08em] text-conclave-offwhite/72 sm:text-[10px]">{item.label}</p>
                    {index < system.length - 1 && (
                      <ArrowRight aria-hidden="true" size={13} className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-conclave-gold sm:block lg:hidden xl:block" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-7 flex items-center gap-3 border-t border-conclave-gold/20 pt-6">
              <CheckCircle2 aria-hidden="true" size={18} className="shrink-0 text-conclave-gold" />
              <p className="text-[10px] font-black uppercase leading-5 tracking-[0.1em] text-conclave-offwhite/65">
                Learn less passively. Implement more deliberately.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
