"use client";

import { motion } from "framer-motion";
import { Award, CakeSlice, Handshake, Mic2, Sparkles, Trophy } from "lucide-react";
import Image from "next/image";
import { registrationUrl } from "@/lib/event";
import { campaignImages } from "@/lib/images";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const highlights = [
  { label: "Digital Chanakya", icon: Award },
  { label: "₹1 Lakh Award", icon: Trophy },
  { label: "₹10 Lakh Award", icon: Sparkles },
  { label: "Networking", icon: Handshake },
  { label: "Success Stories", icon: Mic2 },
  { label: "Birthday Celebration", icon: CakeSlice }
];

function HeroTitle({ compact = false }: { compact?: boolean }) {
  return (
    <h1 className="font-display leading-[0.86] drop-shadow-[0_3px_14px_rgba(0,0,0,.85)]">
      <span className={`gold-text block ${compact ? "text-[clamp(1.65rem,8vw,3rem)] md:text-6xl" : "text-[5.65rem] xl:text-[6rem]"}`}>Chanakya</span>
      <span className={`gold-text block ${compact ? "text-[clamp(1.65rem,8vw,3rem)] md:text-6xl" : "text-[5.65rem] xl:text-[6rem]"}`}>Conclave</span>
      <span className={`mt-2 block tracking-[0.08em] text-conclave-offwhite ${compact ? "text-xl sm:text-3xl" : "text-6xl"}`}>2026</span>
    </h1>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-conclave-gold/20 bg-black pt-16 sm:pt-[4.75rem] lg:min-h-[920px]">
      <Image
        src={campaignImages.hero}
        alt="Chanakya and Shobhit Singhal in a black and gold ceremonial setting"
        fill
        priority
        quality={100}
        className="hidden object-cover object-center lg:block"
        sizes="100vw"
      />

      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-5 py-5 sm:px-6 sm:py-7 lg:min-h-[844px] lg:px-8 lg:py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.09 }}
          className="relative z-10 mx-auto w-full max-w-[650px] text-center lg:max-w-[570px] xl:max-w-[610px]"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative -mx-5 mb-5 aspect-[16/9] w-[calc(100%+2.5rem)] overflow-hidden border-y border-conclave-gold/20 sm:-mx-6 sm:w-[calc(100%+3rem)] lg:hidden"
          >
            <Image
              src={campaignImages.hero}
              alt="Chanakya and Shobhit Singhal"
              fill
              priority
              quality={100}
              className="object-contain object-center"
              sizes="(max-width: 1023px) 100vw, 0px"
            />
            <div className="absolute inset-y-0 left-[25%] right-[28%] flex items-center justify-center">
              <div>
                <p className="mb-2 text-[6px] font-black uppercase tracking-[0.24em] text-conclave-offwhite/80 sm:text-[8px]">Presents</p>
                <HeroTitle compact />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative mx-auto mb-3 hidden h-14 w-56 overflow-hidden lg:block"
          >
            <Image
              src={campaignImages.shobhitLogo}
              alt="Shobhit Singhal - The Transformer"
              fill
              priority
              className="object-cover object-center"
              sizes="224px"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-4 hidden items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.24em] text-conclave-offwhite/80 lg:flex"
          >
            <span className="h-px w-10 bg-conclave-gold/70" />
            Presents
            <span className="h-px w-10 bg-conclave-gold/70" />
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.72, ease: "easeOut" }} className="hidden lg:block">
            <HeroTitle />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="mx-auto mt-3 flex max-w-lg items-center gap-3 sm:mt-4"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-conclave-gold/80" />
            <span className="font-display text-xl tracking-[0.08em] text-conclave-gold sm:text-2xl">
              Where Digital Chanakyas Are Recognized
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-conclave-gold/80" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-xl text-[11px] font-bold uppercase leading-5 tracking-[0.04em] text-conclave-offwhite/68 sm:text-sm sm:leading-6"
          >
            An exclusive recognition ceremony for members building, growing and transforming their consulting businesses.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="mx-auto mt-5 grid max-w-2xl grid-cols-2 gap-px overflow-hidden border border-conclave-gold/25 bg-conclave-gold/20 sm:grid-cols-3"
          >
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div key={highlight.label} className="flex min-h-[4.5rem] flex-col items-center justify-center gap-1.5 bg-black px-2 py-2">
                  <Icon aria-hidden="true" size={16} strokeWidth={1.5} className="text-conclave-gold" />
                  <span className="text-[9px] font-black uppercase leading-3 tracking-[0.05em] text-conclave-offwhite/72">
                    {highlight.label}
                  </span>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="mt-5 flex flex-col justify-center gap-3 sm:mt-6 sm:flex-row"
          >
            <motion.a href={registrationUrl} target="_blank" rel="noreferrer" whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }} className="gold-button w-full sm:w-auto sm:min-w-64">
              Reserve My Seat
            </motion.a>
            <motion.a href="#awards" whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }} className="dark-button w-full sm:w-auto sm:min-w-64">
              Nominate Me For An Award
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
