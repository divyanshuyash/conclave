"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { registrationUrl } from "@/lib/event";
import { campaignImages } from "@/lib/images";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden border-b border-conclave-gold/20 bg-black pt-[4.75rem] lg:min-h-[790px]">
      <Image
        src={campaignImages.hero}
        alt="Chanakya and a gold achievement trophy"
        fill
        priority
        className="hidden object-cover object-center sm:block"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.02)_68%,#080807_100%)]" />
      <div className="absolute inset-y-0 left-[28%] right-[28%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,.18),rgba(0,0,0,.76)_78%)]" />

      <motion.div
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.22 }}
        className="pointer-events-none absolute bottom-0 right-0 z-[5] hidden h-[400px] w-[250px] lg:block xl:right-[6%] xl:h-[450px] xl:w-[285px]"
      >
        <Image
          src={campaignImages.shobhitHero}
          alt="Shobhit Singhal"
          fill
          priority
          className="hero-host-portrait object-contain object-bottom drop-shadow-[0_24px_65px_rgba(0,0,0,.8)]"
          sizes="(min-width: 1280px) 285px, 250px"
        />
      </motion.div>

      <div className="relative mx-auto flex min-h-[648px] max-w-7xl items-center justify-center px-5 py-10 lg:min-h-[718px] lg:px-8 lg:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="relative z-10 mx-auto w-full max-w-[680px] text-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative mx-auto mb-6 aspect-[16/9] w-full max-w-md sm:hidden"
          >
            <Image
              src={campaignImages.hero}
              alt="Chanakya and a gold achievement trophy"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 92vw, 0px"
            />
            <div className="absolute -bottom-4 right-3 h-40 w-28">
              <Image
                src={campaignImages.shobhitHero}
                alt="Shobhit Singhal"
                fill
                priority
                className="hero-host-portrait object-contain object-bottom"
                sizes="112px"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative mx-auto mb-4 h-14 w-56 overflow-hidden sm:h-16 sm:w-64"
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
            className="mb-5 flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-conclave-offwhite/80 sm:text-[11px] sm:tracking-[0.24em]"
          >
            <span className="hidden h-px w-10 bg-conclave-gold/70 sm:block" />
            Presents
            <span className="hidden h-px w-10 bg-conclave-gold/70 sm:block" />
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="font-display leading-[0.88] drop-shadow-[0_8px_30px_rgba(0,0,0,.85)]"
          >
            <span className="gold-text block text-[4rem] sm:text-[6.5rem] lg:text-[7.35rem]">Chanakya</span>
            <span className="gold-text block text-[4rem] sm:text-[6.5rem] lg:text-[7.35rem]">Conclave</span>
            <span className="mt-2 block text-5xl tracking-[0.06em] text-conclave-offwhite sm:text-6xl lg:text-7xl">
              2026
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="mx-auto mt-5 flex max-w-lg items-center gap-3"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-conclave-gold/80" />
            <span className="font-display text-xl tracking-[0.1em] text-conclave-gold sm:text-2xl">
              Exclusive Members Event
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-conclave-gold/80" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="mx-auto mt-5 max-w-xl text-sm font-semibold uppercase leading-6 tracking-[0.04em] text-conclave-offwhite/72 sm:text-base sm:leading-7"
          >
            Recognizing action. Celebrating achievements.
            <span className="block text-conclave-gold">Honouring Digital Chanakyas.</span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="mt-8 flex justify-center"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
