import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Enrollment",
    items: [
      {
        q: "How do I enroll in a course?",
        a: "Simply click the 'Enroll Now' button on any course page, create your account or log in, and complete your payment. You'll receive instant access to the course materials.",
      },
      {
        q: "Is there a minimum age requirement?",
        a: "You must be at least 18 years old to enroll. Students aged 16–17 may enroll with written parental or guardian consent.",
      },
      {
        q: "Can I enroll in multiple courses at the same time?",
        a: "Yes — there are no restrictions on simultaneous enrollments. You can purchase as many courses as you like and progress at your own pace.",
      },
      {
        q: "Do I need any prior experience to enroll?",
        a: "Each course listing clearly states its prerequisites. Many of our courses are designed for beginners, while advanced courses recommend prior foundational knowledge.",
      },
    ],
  },
  {
    category: "Payment & Pricing (ZAR)",
    items: [
      {
        q: "Why are prices shown in ZAR?",
        a: "CAVARO 2.0 primarily serves South African learners, so all prices are displayed in South African Rand (R) for clarity. The USD equivalent is shown for reference.",
      },
      {
        q: "What payment methods are accepted?",
        a: "We accept all major credit and debit cards (Visa, Mastercard), EFT/bank transfer, and select mobile payment options. All transactions are secured with 256-bit SSL encryption.",
      },
      {
        q: "Are there any hidden fees?",
        a: "No. The price shown at checkout is the final price. There are no recurring charges or hidden fees unless you opt into a subscription plan.",
      },
      {
        q: "Can I get a refund?",
        a: "Yes — we offer a 14-day money-back guarantee on all courses. If you're unsatisfied for any reason, contact our support team within 14 days of purchase for a full refund.",
      },
      {
        q: "Do you offer student or group discounts?",
        a: "We offer discounted group pricing for organisations enrolling 5 or more learners. Contact us at hello@cavaro.co.za for a custom quote.",
      },
    ],
  },
  {
    category: "Course Access",
    items: [
      {
        q: "How long do I have access to a course after enrolling?",
        a: "You receive lifetime access to all course materials, including any future updates, once you enroll.",
      },
      {
        q: "Can I access courses on mobile devices?",
        a: "Yes. All courses are fully responsive and accessible on desktop, tablet, and mobile devices through your browser — no app installation required.",
      },
      {
        q: "What if I fall behind or need more time?",
        a: "Because access is lifetime and self-paced, there are no deadlines. Learn at whatever pace suits your schedule.",
      },
      {
        q: "Will I receive a certificate upon completion?",
        a: "Yes — a verifiable digital certificate of completion is issued for every course you finish. Certificates can be shared directly to LinkedIn or downloaded as a PDF.",
      },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/40 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="font-sans font-medium text-foreground text-sm sm:text-base group-hover:text-primary transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 mt-0.5 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180 text-primary" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm font-light text-muted-foreground leading-relaxed">
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
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-sans font-light text-primary uppercase tracking-widest mb-4" style={{ letterSpacing: "0.25em" }}>
            Got Questions?
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold italic text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 font-light text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to know about enrolling, paying in ZAR, and accessing your courses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {faqs.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="bg-card rounded-2xl border border-border/50 px-6 py-7"
            >
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-1 h-5 rounded-full bg-primary" />
                <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-primary" style={{ letterSpacing: "0.15em" }}>
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