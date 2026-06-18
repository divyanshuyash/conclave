"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { registrationUrl } from "@/lib/event";
import { campaignImages } from "@/lib/images";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Awards", href: "#awards" },
  { label: "Agenda", href: "#agenda" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Venue", href: "#venue" },
  { label: "FAQ", href: "#faq" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-conclave-gold/30 bg-[#070706]/92 shadow-[0_10px_34px_rgba(0,0,0,0.46)] backdrop-blur-xl"
          : "border-conclave-gold/15 bg-[#070706]/72 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="#" className="relative h-11 w-40 overflow-hidden sm:w-52" aria-label="Shobhit Singhal home">
          <Image
            src={campaignImages.shobhitLogo}
            alt="Shobhit Singhal - The Transformer"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 640px) 160px, 208px"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] font-black uppercase tracking-[0.17em] text-conclave-offwhite/72 transition hover:text-conclave-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <motion.a
          href={registrationUrl}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="gold-button px-3 py-2.5 text-[10px] sm:px-5 sm:text-[11px]"
          aria-label="Reserve my seat for Chanakya Conclave 2026"
        >
          <span className="hidden sm:inline">Reserve My Seat</span>
          <span className="sm:hidden">Reserve</span>
          <ArrowRight aria-hidden="true" size={15} />
        </motion.a>
      </nav>
    </motion.header>
  );
}
