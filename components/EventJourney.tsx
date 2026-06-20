"use client";

import { motion } from "framer-motion";
import {
  Coffee,
  Handshake,
  Megaphone,
  Presentation,
  Trophy,
  TrendingUp,
  Utensils
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const agenda: Array<{ time: string; title: string; details: string; icon: LucideIcon }> = [
  {
    time: "08:00 AM – 09:00 AM",
    title: "Registrations & Welcome Tea",
    details: "Registration, networking, tea, refreshments and a considered welcome experience.",
    icon: Coffee
  },
  {
    time: "09:00 AM – 11:00 AM",
    title: "Session 1",
    details: "Vision, growth, community updates, strategic direction and special announcements.",
    icon: Presentation
  },
  {
    time: "11:00 AM – 11:15 AM",
    title: "Break",
    details: "Networking and refreshments.",
    icon: Coffee
  },
  {
    time: "11:15 AM – 01:00 PM",
    title: "Session 2",
    details: "Future initiatives, member success stories, community roadmap and growth opportunities.",
    icon: TrendingUp
  },
  {
    time: "01:00 PM – 02:00 PM",
    title: "Networking Lunch",
    details: "A premium buffet lunch with members, nominees and business builders.",
    icon: Utensils
  },
  {
    time: "02:00 PM – 04:00 PM",
    title: "Grand Awards Ceremony",
    details: "All three awards, winner recognition, success stories and group photographs.",
    icon: Trophy
  },
  {
    time: "04:00 PM – 04:30 PM",
    title: "Closing Session",
    details: "Gratitude, reflections, community vision and the closing address.",
    icon: Megaphone
  },
  {
    time: "04:30 PM – 05:00 PM",
    title: "High Tea & Networking",
    details: "Final networking, photography and celebrations.",
    icon: Handshake
  }
];

export function EventJourney() {
  return (
    <section id="agenda" className="section-shell pt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.55 }}
        className="hairline-title mb-10"
      >
        <h2 className="gold-text mx-auto text-5xl leading-none sm:text-6xl">Event Journey</h2>
      </motion.div>

      <div className="relative">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute left-0 right-0 top-[3.55rem] hidden h-px origin-left bg-gradient-to-r from-transparent via-conclave-gold/70 to-transparent lg:block"
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 lg:gap-5">
          {agenda.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={`${item.time}-${item.title}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                tabIndex={0}
                className="group relative min-h-0 rounded-[4px] border border-conclave-gold/20 bg-conclave-charcoal/50 p-4 text-left shadow-gold-soft backdrop-blur focus:outline-none focus-visible:ring-1 focus-visible:ring-conclave-gold/70 sm:text-center lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full border border-conclave-gold/55 bg-black text-conclave-gold shadow-gold transition group-hover:bg-conclave-gold group-hover:text-black sm:mx-auto sm:h-16 sm:w-16">
                  <Icon aria-hidden="true" size={23} strokeWidth={1.75} />
                </div>
                <p className="mt-3 text-[10px] font-black uppercase leading-4 tracking-[0.04em] text-conclave-offwhite sm:mt-4 sm:text-xs sm:leading-5">
                  {item.time}
                </p>
                <h3 className="mt-2 text-xl leading-none text-conclave-gold sm:text-2xl">{item.title}</h3>
                <p className="mt-3 max-h-28 translate-y-0 overflow-hidden text-[11px] font-semibold leading-5 text-conclave-muted opacity-100 transition duration-300 lg:max-h-0 lg:translate-y-2 lg:text-xs lg:opacity-0 lg:group-hover:max-h-28 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus:max-h-28 lg:group-focus:translate-y-0 lg:group-focus:opacity-100">
                  {item.details}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
