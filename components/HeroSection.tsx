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
  { label: "Digital Chanakya", mobileLabel: "Digital Chanakya", icon: Award },
  { label: "₹1 Lakh Award", mobileLabel: "₹1L Award", icon: Trophy },
  { label: "₹10 Lakh Award", mobileLabel: "₹10L Award", icon: Sparkles },
  { label: "Networking", mobileLabel: "Networking", icon: Handshake },
  { label: "Success Stories", mobileLabel: "Success Stories", icon: Mic2 },
  { label: "Birthday Celebration", mobileLabel: "Birthday Celebration", icon: CakeSlice }
];

const mobileHighlights = [highlights[5], ...highlights.slice(0, 5)];

function HeroTitle({ compact = false }: { compact?: boolean }) {
  return (
    <h1 className="font-display leading-[0.86] drop-shadow-[0_3px_14px_rgba(0,0,0,.85)]">
      <span className={`gold-text block ${compact ? "text-[clamp(1.8rem,9.5vw,2.75rem)]" : "text-[5.65rem] xl:text-[6rem]"}`}>Chanakya</span>
      <span className={`gold-text block ${compact ? "text-[clamp(1.8rem,9.5vw,2.75rem)]" : "text-[5.65rem] xl:text-[6rem]"}`}>Conclave</span>
      <span className={`mt-2 block tracking-[0.08em] text-conclave-offwhite ${compact ? "text-lg min-[380px]:text-xl" : "text-6xl"}`}>2026</span>
    </h1>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-conclave-gold/20 bg-black pt-16 sm:pt-[4.75rem] lg:min-h-[920px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,165,32,0.1),transparent_34%),linear-gradient(135deg,rgba(217,165,32,0.08),transparent_30%,transparent_70%,rgba(217,165,32,0.06))]"
      />
      <div aria-hidden="true" className="hero-ambient pointer-events-none absolute inset-0">
        <span className="hero-ambient__glow hero-ambient__glow--one" />
        <span className="hero-ambient__glow hero-ambient__glow--two" />
        <span className="hero-ambient__ring" />
        <span className="hero-ambient__beam" />
        <span className="hero-ambient__particles" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 hidden h-[91%] w-[40%] [mask-image:linear-gradient(to_right,black_0%,black_70%,transparent_100%)] lg:block"
      >
        <Image
          src={campaignImages.heroChanakya}
          alt=""
          fill
          priority
          quality={100}
          className="object-cover object-[48%_top]"
          sizes="40vw"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 hidden h-[91%] w-[40%] [mask-image:linear-gradient(to_left,black_0%,black_70%,transparent_100%)] lg:block"
      >
        <Image
          src={campaignImages.heroShobhit}
          alt=""
          fill
          priority
          quality={100}
          className="object-cover object-[52%_top]"
          sizes="40vw"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-black via-black/65 to-transparent lg:block"
      />

      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-5 pb-16 pt-5 sm:px-6 sm:py-7 lg:min-h-[844px] lg:px-8 lg:py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.09 }}
          className="hero-mobile-composition relative z-10 mx-auto flex w-full max-w-[650px] flex-col text-center lg:max-w-[570px] xl:max-w-[610px]"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="hero-mobile-stage relative -mx-5 mb-0 aspect-[16/10] w-[calc(100%+2.5rem)] overflow-hidden border-t border-conclave-gold/25 bg-transparent sm:-mx-6 sm:w-[calc(100%+3rem)] lg:hidden"
          >
            <div className="hero-mobile-portrait hero-mobile-portrait--left absolute inset-y-0 left-0 w-[53%] [mask-image:linear-gradient(to_right,black_0%,black_58%,transparent_92%)]">
              <Image
                src={campaignImages.heroChanakya}
                alt="Chanakya"
                fill
                priority
                quality={100}
                className="object-cover object-[48%_18%]"
                sizes="53vw"
              />
            </div>
            <div className="hero-mobile-portrait hero-mobile-portrait--right absolute inset-y-0 right-0 w-[53%] [mask-image:linear-gradient(to_left,black_0%,black_58%,transparent_92%)]">
              <Image
                src={campaignImages.heroShobhit}
                alt="Shobhit Singhal"
                fill
                priority
                quality={100}
                className="object-cover object-[52%_18%]"
                sizes="53vw"
              />
            </div>
            <div aria-hidden="true" className="hero-mobile-ambient pointer-events-none absolute inset-0 z-10 overflow-hidden">
              <span className="hero-ambient__glow hero-ambient__glow--one" />
              <span className="hero-ambient__glow hero-ambient__glow--two" />
              <span className="hero-ambient__ring" />
              <span className="hero-ambient__beam" />
              <span className="hero-ambient__particles" />
            </div>
            <span aria-hidden="true" className="hero-mobile-stage__fade absolute inset-x-0 bottom-0 z-[15] h-[42%]" />
            <div className="hero-mobile-title absolute inset-y-0 left-1/2 z-20 flex w-[46%] -translate-x-1/2 flex-col items-center justify-center px-1">
              <p className="mb-2 text-[7px] font-black uppercase tracking-[0.2em] text-conclave-offwhite/80 min-[380px]:text-[8px]">Presents</p>
              <HeroTitle compact />
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
            className="hero-mobile-tagline relative z-30 -mt-5 mx-auto flex max-w-lg min-w-0 items-center gap-2 px-2 pt-7 sm:-mt-4 sm:gap-3 sm:px-0 sm:pt-7 lg:mt-4 lg:pt-0"
          >
            <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-conclave-gold/80 sm:block" />
            <span className="min-w-0 font-display text-[clamp(1.15rem,5.6vw,1.6rem)] leading-[1.08] tracking-[0.025em] text-conclave-gold sm:text-2xl sm:tracking-[0.08em]">
              Where Digital Chanakyas Are Recognized
            </span>
            <span className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-conclave-gold/80 sm:block" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="relative z-20 mx-auto mt-3 max-w-xl px-2 text-[11px] font-semibold normal-case leading-[1.75] tracking-[0.01em] text-conclave-offwhite/68 sm:mt-4 sm:px-0 sm:text-sm sm:font-bold sm:uppercase sm:leading-6 sm:tracking-[0.04em]"
          >
            An exclusive recognition ceremony for members building, growing and transforming their consulting businesses.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="hero-highlights-rail relative z-20 order-2 mt-3 overflow-hidden border border-conclave-gold/30 bg-black/60 shadow-[0_18px_55px_rgba(0,0,0,.4)] backdrop-blur-sm sm:hidden"
          >
            <div className="grid grid-cols-3 gap-px bg-conclave-gold/20">
              {mobileHighlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={highlight.label}
                    className="flex min-h-12 min-w-0 items-center justify-center gap-1.5 bg-black/80 px-1.5 py-2"
                  >
                    <Icon aria-hidden="true" size={15} strokeWidth={1.5} className="shrink-0 text-conclave-gold" />
                    <span className="min-w-0 text-[7px] font-black uppercase leading-3 tracking-[0.02em] text-conclave-offwhite/78 min-[380px]:text-[8px]">
                      {highlight.mobileLabel}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="relative z-20 mx-auto mt-5 hidden w-full max-w-2xl grid-cols-3 gap-px overflow-hidden border border-conclave-gold/25 bg-conclave-gold/15 shadow-[0_18px_55px_rgba(0,0,0,.4)] backdrop-blur-sm sm:grid"
          >
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div key={highlight.label} className="flex min-h-16 flex-col items-center justify-center gap-1 bg-black/75 px-1.5 py-2 sm:min-h-[4.5rem] sm:gap-1.5 sm:px-2">
                  <Icon aria-hidden="true" size={15} strokeWidth={1.5} className="text-conclave-gold sm:h-4 sm:w-4" />
                  <span className="text-[8px] font-black uppercase leading-3 tracking-[0.025em] text-conclave-offwhite/72 min-[380px]:text-[9px] sm:tracking-[0.05em]">
                    {highlight.label}
                  </span>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="relative z-20 order-1 mt-4 grid grid-cols-2 gap-2 sm:order-none sm:mt-6 sm:flex sm:justify-center sm:gap-3"
          >
            <motion.a href={registrationUrl} target="_blank" rel="noreferrer" whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }} className="gold-button min-h-12 w-full px-2 text-[10px] leading-4 sm:w-auto sm:min-w-64 sm:px-6 sm:text-sm sm:leading-5">
              <span className="sm:hidden">Reserve Seat</span>
              <span className="hidden sm:inline">Reserve My Seat</span>
            </motion.a>
            <motion.a href="#awards" whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }} className="dark-button min-h-12 w-full px-2 text-[10px] leading-4 sm:w-auto sm:min-w-64 sm:px-6 sm:text-sm sm:leading-5">
              <span className="sm:hidden">Nominate Now</span>
              <span className="hidden sm:inline">Nominate Me For An Award</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
