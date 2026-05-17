import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Website Design",
    items: [
      {
        q: "How long does a website take to complete?",
        a: "Most websites are completed within 1–4 weeks depending on the size, features, and content required.",
      },
      {
        q: "Will my website work on mobile devices?",
        a: "Yes. Every Cavaro website is fully responsive and optimized for desktop, tablet, and mobile devices.",
      },
      {
        q: "Can you redesign my current website?",
        a: "Absolutely. We can modernize outdated websites and create a more premium, professional online presence.",
      },
    ],
  },

  {
    category: "IT Support",
    items: [
      {
        q: "Do you offer business IT support?",
        a: "Yes. Cavaro provides IT support, troubleshooting, PC setup, networking assistance, and business technology solutions.",
      },
      {
        q: "Can you help build custom PCs?",
        a: "Yes. We assist with gaming PCs, business PCs, upgrades, hardware recommendations, and custom builds.",
      },
      {
        q: "Do you offer ongoing maintenance?",
        a: "Yes. Monthly maintenance and support packages are available for websites and business systems.",
      },
    ],
  },

  {
    category: "Pricing & Process",
    items: [
      {
        q: "How does payment work?",
        a: "Projects typically require a deposit before work begins, with the remaining balance due upon completion.",
      },
      {
        q: "Do you offer custom quotes?",
        a: "Yes. Every business is different, and custom quotes are available based on your requirements.",
      },
      {
        q: "Can I request additional features later?",
        a: "Absolutely. Your website or business system can be expanded with additional features as your business grows.",
      },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="text-sm sm:text-base font-medium leading-snug text-white transition group-hover:text-yellow-400">
          {q}
        </span>

        <ChevronDown
          className={`mt-0.5 h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300 ${
            open ? "rotate-180 text-yellow-400" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-7 text-zinc-400">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-black px-6 py-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
            Knowledge & Support
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Everything you need to know about Cavaro’s premium web design,
            IT support, business systems, and digital solutions.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {faqs.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-7 backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center gap-2.5">
                <div className="h-5 w-1 rounded-full bg-yellow-400" />

                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                  {group.category}
                </h3>
              </div>

              <div>
                {group.items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}