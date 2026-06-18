"use client";

import { motion } from "framer-motion";
import { BadgeCheck, BookOpenCheck, Sparkles, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { campaignImages } from "@/lib/images";

const awards: Array<{
  title: string;
  text: string;
  image: string;
  includes: string[];
}> = [
  {
    title: "Digital Chanakya Award",
    text: "For successfully setting up a Digital Consulting, Coaching, Training, AI Consulting or Knowledge Business.",
    image: campaignImages.awardChanakya,
    includes: ["Trophy", "Certificate", "Stage Recognition", "Featured Success Story"]
  },
  {
    title: "₹1 Lakh Achievement Award",
    text: "For members who generated ₹1,00,000 or more in consulting revenue.",
    image: campaignImages.awardOneLakh,
    includes: ["Achievement Trophy", "Certificate", "Stage Recognition", "Featured Success Story"]
  },
  {
    title: "₹10 Lakh Achievement Award",
    text: "For members who generated ₹10,00,000 or more in consulting revenue.",
    image: campaignImages.awardTenLakh,
    includes: ["Elite Trophy", "Featured Recognition", "Success Story Spotlight"]
  }
];

const includeIcons: LucideIcon[] = [Trophy, BookOpenCheck, BadgeCheck, Sparkles];

export function AwardsSection() {
  return (
    <section id="awards" className="section-shell pt-8">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
        className="mb-10 text-center"
      >
        <p className="section-kicker mb-3">Recognizing real implementation</p>
        <h2 className="gold-text text-5xl leading-none sm:text-6xl lg:text-7xl">3 Major Awards</h2>
      </motion.div>

      <div className="space-y-5">
        {awards.map((award, index) => (
          <motion.article
            key={award.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.58, delay: index * 0.07 }}
            className="group relative grid overflow-hidden border border-conclave-gold/35 bg-[linear-gradient(110deg,#080807,#15120a_50%,#090908)] shadow-gold md:grid-cols-[280px_1fr] lg:grid-cols-[340px_1fr]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fff0a6]/80 to-transparent" />
            <div className="relative min-h-[280px] overflow-hidden border-b border-conclave-gold/20 bg-[radial-gradient(circle,rgba(217,165,32,.13),transparent_68%)] md:min-h-[330px] md:border-b-0 md:border-r">
              <Image
                src={award.image}
                alt={`${award.title} artwork`}
                fill
                className="object-contain p-4 transition duration-700 group-hover:scale-[1.035]"
                sizes="(min-width: 1024px) 340px, (min-width: 768px) 280px, 100vw"
              />
            </div>

            <div className="relative flex flex-col justify-center p-7 sm:p-9 lg:p-12">
              <span className="absolute right-7 top-5 font-display text-6xl text-conclave-gold/[0.08] sm:text-8xl">
                0{index + 1}
              </span>
              <p className="section-kicker mb-4">Chanakya Conclave Honours</p>
              <h3 className="gold-text max-w-2xl text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">{award.title}</h3>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-conclave-offwhite/68">{award.text}</p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {award.includes.map((item, itemIndex) => {
                  const IncludeIcon = includeIcons[itemIndex] ?? Sparkles;
                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 border border-conclave-gold/25 bg-black/35 px-3 py-2 text-[10px] font-black uppercase tracking-[0.1em] text-conclave-offwhite/75"
                    >
                      <IncludeIcon aria-hidden="true" size={14} className="text-conclave-gold" />
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
