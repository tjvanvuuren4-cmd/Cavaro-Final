import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, Globe, Download, Share2, BadgeCheck, Star, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: BadgeCheck,
    title: "Verifiable Online",
    description: "Every certificate has a unique verification ID. Employers can instantly confirm authenticity via a public link.",
  },
  {
    icon: Globe,
    title: "LinkedIn Ready",
    description: "Add your certificate directly to your LinkedIn profile with one click — showcasing your skills to recruiters worldwide.",
  },
  {
    icon: Download,
    title: "PDF Download",
    description: "Download a print-ready, high-resolution PDF of your certificate to share anywhere, anytime.",
  },
  {
    icon: Lock,
    title: "Tamper-Proof",
    description: "Cryptographically signed certificates that cannot be forged or altered, protecting the value of your credential.",
  },
];

export default function CertificateShowcase() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="certificate" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Gold glow background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-primary/6 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-sans font-light text-primary uppercase tracking-widest mb-4" style={{ letterSpacing: "0.25em" }}>
            Your Achievement
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
            Earn a Certificate That <span className="text-primary italic">Matters</span>
          </h2>
          <p className="mt-5 font-light text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Every CAVARO 2.0 course awards a premium, verifiable certificate recognised by leading employers in cybersecurity and blockchain.
          </p>
        </motion.div>

        {/* Main layout: certificate + features */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Certificate mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Glow behind certificate */}
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl opacity-60" />

            {/* Certificate image */}
            <div className="relative rounded-xl overflow-hidden border border-primary/30 shadow-[0_0_60px_rgba(212,168,56,0.15)]">
              <img
                src="https://media.base44.com/images/public/6a057b43c92975536478e242/e1adfa2aa_generated_image.png"
                alt="CAVARO 2.0 Certificate of Completion"
                className="w-full object-cover"
              />

              {/* Hover overlay */}
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-background/70 backdrop-blur-sm flex flex-col items-center justify-center gap-4"
                  >
                    <div className="flex items-center gap-2 text-primary font-sans font-medium text-sm uppercase tracking-widest">
                      <Star className="w-4 h-4 fill-primary" />
                      Sample Certificate
                    </div>
                    <p className="text-xs font-light text-muted-foreground text-center max-w-xs px-4">
                      Your name, course title, and instructor signature will appear on your personalised certificate upon completion.
                    </p>
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-xs uppercase tracking-widest mt-2"
                      style={{ letterSpacing: "0.12em" }}
                    >
                      Enroll to Earn Yours
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Badge pill below */}
            <div className="mt-5 flex justify-center">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/25 bg-primary/5">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-xs font-sans font-medium text-primary tracking-widest uppercase" style={{ letterSpacing: "0.15em" }}>
                  Verified · Tamper-Proof · Lifetime Access
                </span>
              </div>
            </div>
          </motion.div>

          {/* Feature list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {features.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + idx * 0.1 }}
                className="flex gap-5 p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-[0_0_30px_rgba(212,168,56,0.07)] transition-all duration-300"
              >
                <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-1 text-sm">
                    {f.title}
                  </h4>
                  <p className="font-light text-muted-foreground text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border"
        >
          {[
            { value: "10,000+", label: "Certificates Issued" },
            { value: "4.9★", label: "Student Satisfaction" },
            { value: "Fortune 500", label: "Employer Recognition" },
            { value: "Lifetime", label: "Certificate Access" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card px-6 py-7 text-center">
              <div className="font-serif text-2xl sm:text-3xl font-semibold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] font-sans font-light text-muted-foreground uppercase tracking-widest" style={{ letterSpacing: "0.15em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}