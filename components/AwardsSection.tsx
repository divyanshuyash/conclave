"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ChevronDown, Medal, Sparkles, Trophy } from "lucide-react";
import Image from "next/image";
import { campaignImages } from "@/lib/images";

const awards = [
  {
    eyebrow: "Business Foundation",
    title: "Digital Chanakya Award",
    text: "For successfully launching a consulting, coaching, training, AI or knowledge business.",
    image: campaignImages.awardChanakya,
    eligibility: ["Clear niche", "Built offer", "Online presence", "Client acquisition", "Business launched"],
    includes: ["Premium Trophy", "Certificate", "Stage Recognition", "Featured Story"]
  },
  {
    eyebrow: "Revenue Milestone",
    title: "₹1 Lakh Achievement Award",
    text: "For generating cumulative consulting revenue of ₹1,00,000 or more.",
    image: campaignImages.awardOneLakh,
    eligibility: ["₹1 lakh+ cumulative consulting revenue"],
    includes: ["Achievement Trophy", "Certificate", "Stage Recognition", "Featured Story"]
  },
  {
    eyebrow: "Elite Milestone",
    title: "₹10 Lakh Achievement Award",
    text: "For generating cumulative consulting revenue of ₹10,00,000 or more.",
    image: campaignImages.awardTenLakh,
    eligibility: ["₹10 lakh+ cumulative consulting revenue"],
    includes: ["Elite Trophy", "Certificate", "Featured Recognition", "Success Spotlight"]
  }
];

export function AwardsSection() {
  return (
    <section id="awards" className="section-shell pt-8">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
        className="section-heading mb-10"
      >
        <p className="section-kicker">The Honours</p>
        <h2 className="section-title"><span className="gold-text">3 Major Awards</span></h2>
        <p className="section-copy">One stage. Three defining milestones. Recognition built around results.</p>
      </motion.div>

      <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
        {awards.map((award, index) => (
          <motion.article
            key={award.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="group relative flex min-w-[82vw] snap-center flex-col overflow-hidden border border-conclave-gold/30 bg-[linear-gradient(150deg,#171208,#080807_66%)] shadow-gold sm:min-w-0"
          >
            <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#fff0a6] to-transparent" />
            <span className="absolute right-4 top-3 z-20 font-display text-5xl text-conclave-gold/15">0{index + 1}</span>

            <div className="relative aspect-square overflow-hidden border-b border-conclave-gold/20 bg-[radial-gradient(circle_at_center,rgba(217,165,32,.19),transparent_66%)]">
              <Image
                src={award.image}
                alt={`${award.title} ceremonial artwork`}
                fill
                className="object-contain p-3 transition duration-700 group-hover:scale-[1.045]"
                sizes="(min-width: 640px) 33vw, 82vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0907] to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-conclave-gold">{award.eyebrow}</p>
              <h3 className="mt-3 text-3xl leading-[0.94] text-conclave-offwhite lg:text-4xl">{award.title}</h3>
              <p className="mt-4 text-xs font-semibold leading-5 text-conclave-offwhite/58 sm:min-h-[60px]">{award.text}</p>

              <div className="mt-5 grid grid-cols-2 gap-2 border-y border-conclave-gold/15 py-4">
                {award.includes.map((item, itemIndex) => (
                  <div key={item} className="flex items-center gap-2 text-[8px] font-black uppercase leading-3 tracking-[0.05em] text-conclave-offwhite/72">
                    {itemIndex === 0 ? (
                      <Trophy aria-hidden="true" size={13} className="shrink-0 text-conclave-gold" />
                    ) : itemIndex === 1 ? (
                      <Medal aria-hidden="true" size={13} className="shrink-0 text-conclave-gold" />
                    ) : (
                      <Sparkles aria-hidden="true" size={13} className="shrink-0 text-conclave-gold" />
                    )}
                    {item}
                  </div>
                ))}
              </div>

              <details className="group/details mt-auto pt-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[9px] font-black uppercase tracking-[0.16em] text-conclave-gold marker:content-none">
                  View Eligibility
                  <ChevronDown aria-hidden="true" size={16} className="transition group-open/details:rotate-180" />
                </summary>
                <div className="mt-4 space-y-2 border-t border-conclave-gold/15 pt-4">
                  {award.eligibility.map((item) => (
                    <p key={item} className="flex items-start gap-2 text-[10px] font-semibold leading-4 text-conclave-offwhite/64">
                      <BadgeCheck aria-hidden="true" size={14} className="mt-px shrink-0 text-conclave-gold" />
                      {item}
                    </p>
                  ))}
                </div>
              </details>
            </div>
          </motion.article>
        ))}
      </div>
      <p className="mt-2 text-center text-[9px] font-black uppercase tracking-[0.14em] text-conclave-offwhite/35 sm:hidden">
        Swipe to explore all awards
      </p>
    </section>
  );
}
