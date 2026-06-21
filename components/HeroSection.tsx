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
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,165,32,0.1),transparent_34%),linear-gradient(135deg,rgba(217,165,32,0.08),transparent_30%,transparent_70%,rgba(217,165,32,0.06))]"
      />
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
            className="relative -mx-5 mb-5 aspect-[16/10] w-[calc(100%+2.5rem)] overflow-hidden border-y border-conclave-gold/20 bg-black sm:-mx-6 sm:w-[calc(100%+3rem)] lg:hidden"
          >
            <div className="absolute inset-y-0 left-0 w-[54%] [mask-image:linear-gradient(to_right,black_0%,black_72%,transparent_100%)]">
              <Image
                src={campaignImages.heroChanakya}
                alt="Chanakya"
                fill
                priority
                quality={100}
                className="object-cover object-[50%_18%]"
                sizes="54vw"
              />
            </div>
            <div className="absolute inset-y-0 right-0 w-[54%] [mask-image:linear-gradient(to_left,black_0%,black_72%,transparent_100%)]">
              <Image
                src={campaignImages.heroShobhit}
                alt="Shobhit Singhal"
                fill
                priority
                quality={100}
                className="object-cover object-[50%_18%]"
                sizes="54vw"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.65, ease: "easeOut" }} className="lg:hidden">
            <p className="mb-2 text-[8px] font-black uppercase tracking-[0.24em] text-conclave-offwhite/80">Presents</p>
            <HeroTitle compact />
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
