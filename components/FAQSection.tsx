"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Who can attend this event?",
    answer:
      "Transformers Hub Members, Avengers Members, award winners, business builders, consultants, coaches, trainers, experts and digital entrepreneurs."
  },
  {
    question: "Is this only for members?",
    answer: "Yes. Chanakya Conclave 2026 is an exclusive members-only recognition and networking event."
  },
  {
    question: "What is included in the ticket?",
    answer:
      "The ticket includes the full-day recognition experience, networking lunch, high tea, awards ceremony access and the premium business community environment."
  },
  {
    question: "Are meals included?",
    answer: "Yes. Networking lunch and high tea are included as part of the event experience."
  },
  {
    question: "How do I reserve my seat?",
    answer: "Use the Reserve My Seat call to action on this page to move into the registration flow."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay: 0.06 }}
      className="glass-card rounded-[6px] p-7 sm:p-9"
    >
      <p className="section-kicker mb-3">Frequently Asked Questions</p>
      <h2 className="gold-text mb-6 text-5xl leading-none">FAQ</h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="rounded-[4px] border border-conclave-gold/25 bg-black/30">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-black uppercase tracking-[0.08em] text-conclave-offwhite/85"
                aria-expanded={isOpen}
              >
                {faq.question}
                <ChevronDown
                  aria-hidden="true"
                  size={18}
                  className={`shrink-0 text-conclave-gold transition ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.26, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 text-sm font-semibold leading-6 text-conclave-muted">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
