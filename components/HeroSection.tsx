"use client";

import { motion } from "framer-motion";
import { Award, CakeSlice, Handshake, Mic2, Sparkles, Trophy } from "lucide-react";
import Image from "next/image";
import { registrationUrl } from "@/lib/event";
import { campaignImages } from "@/lib/images";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
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

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-conclave-gold/20 bg-black pt-[4.75rem] sm:min-h-[860px] lg:min-h-[920px]">
      <Image
        src={campaignImages.hero}
        alt="Chanakya portrait in a black and gold ceremonial setting"
        fill
        priority
        className="hidden object-cover object-left sm:block"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.16),rgba(0,0,0,.03)_54%,#080807_100%)]" />
      <div className="absolute inset-y-0 left-[22%] right-[22%] hidden bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,.18),rgba(0,0,0,.8)_86%)] sm:block" />

      <motion.div
        initial={{ opacity: 0, x: 42 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-0 right-[-4%] z-[2] hidden h-[76%] w-[40%] sm:block lg:right-[0.5%] lg:h-[81%] lg:w-[36%] xl:right-[3%] xl:w-[33%]"
      >
        <Image
          src={campaignImages.shobhitHero}
          alt="Shobhit Singhal"
          fill
          priority
          quality={100}
          className="object-contain object-bottom drop-shadow-[-18px_18px_34px_rgba(0,0,0,.72)]"
          sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 36vw, (min-width: 640px) 40vw, 0px"
        />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#080807] to-transparent" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[790px] max-w-7xl items-center justify-center px-5 py-8 sm:min-h-[784px] lg:min-h-[844px] lg:px-8 lg:py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="relative z-10 mx-auto w-full max-w-[650px] text-center sm:max-w-[500px] lg:max-w-[570px] xl:max-w-[610px]"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative -mx-5 mb-4 h-[265px] w-[calc(100%+2.5rem)] overflow-hidden sm:hidden"
          >
            <Image
              src={campaignImages.hero}
              alt="Chanakya portrait"
              fill
              priority
              className="object-cover object-left opacity-95"
              sizes="(max-width: 640px) 92vw, 0px"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_5%,rgba(0,0,0,.45)_53%,#080807_100%),linear-gradient(180deg,transparent_55%,#080807_100%)]" />
            <div className="absolute bottom-0 right-[-2%] h-[94%] w-[54%]">
              <Image
                src={campaignImages.shobhitHero}
                alt="Shobhit Singhal"
                fill
                priority
                quality={100}
                className="object-contain object-bottom"
                sizes="54vw"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative mx-auto mb-3 h-11 w-48 overflow-hidden sm:h-14 sm:w-56"
          >
            <Image
              src={campaignImages.shobhitLogo}
              alt="Shobhit Singhal - The Transformer"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 640px) 224px, 256px"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-3 flex items-center justify-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-conclave-offwhite/80 sm:mb-4 sm:text-[10px] sm:tracking-[0.24em]"
          >
            <span className="hidden h-px w-10 bg-conclave-gold/70 sm:block" />
            Presents
            <span className="hidden h-px w-10 bg-conclave-gold/70 sm:block" />
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="font-display leading-[0.86] drop-shadow-[0_8px_30px_rgba(0,0,0,.9)]"
          >
            <span className="gold-text block text-[3.75rem] sm:text-[4.9rem] lg:text-[5.65rem] xl:text-[6rem]">Chanakya</span>
            <span className="gold-text block text-[3.75rem] sm:text-[4.9rem] lg:text-[5.65rem] xl:text-[6rem]">Conclave</span>
            <span className="mt-2 block text-4xl tracking-[0.08em] text-conclave-offwhite sm:text-5xl lg:text-6xl">
              2026
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="mx-auto mt-4 flex max-w-lg items-center gap-3"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-conclave-gold/80" />
            <span className="font-display text-xl tracking-[0.1em] text-conclave-gold sm:text-2xl">
              Where Digital Chanakyas Are Recognized
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-conclave-gold/80" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-xl text-[11px] font-bold uppercase leading-5 tracking-[0.045em] text-conclave-offwhite/68 sm:text-sm sm:leading-6"
          >
            An exclusive recognition ceremony for members building, growing and transforming their consulting businesses.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="mx-auto mt-5 grid max-w-2xl grid-cols-3 gap-px overflow-hidden border border-conclave-gold/25 bg-conclave-gold/20"
          >
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div key={highlight.label} className="flex min-h-16 flex-col items-center justify-center gap-1.5 bg-black/80 px-1.5 py-2 backdrop-blur-sm">
                  <Icon aria-hidden="true" size={16} strokeWidth={1.5} className="text-conclave-gold" />
                  <span className="text-[7px] font-black uppercase leading-3 tracking-[0.06em] text-conclave-offwhite/72 sm:text-[8px]">
                    {highlight.label}
                  </span>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <motion.a
              href={registrationUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="gold-button w-full sm:w-auto sm:min-w-64"
              aria-label="Reserve my seat"
            >
              Reserve My Seat
            </motion.a>
            <motion.a
              href="#awards"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="dark-button w-full sm:w-auto sm:min-w-64"
              aria-label="Nominate me for an award"
            >
              Nominate Me For An Award
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
