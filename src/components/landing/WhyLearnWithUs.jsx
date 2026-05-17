import React from "react";
import { GraduationCap, Wrench, Award } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: GraduationCap,
    title: "Premium Website Design",
    description:
      "Modern luxury websites designed to build trust, improve customer perception, and help your business stand out online.",
  },
  {
    icon: Wrench,
    title: "IT Support & Business Setup",
    description:
      "Professional IT assistance, PC builds, troubleshooting, networking, and business technology solutions tailored for growth.",
  },
  {
    icon: Award,
    title: "Brand Growth & Digital Presence",
    description:
      "We help businesses create a stronger digital identity through premium branding, online systems, and modern client experiences.",
  },
];

export default function WhyLearnWithUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-black px-6 py-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.12),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
            Why Cavaro
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Premium Digital{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400 max-w-2xl mx-auto">
            Cavaro helps businesses elevate their online presence through premium
            website design, IT support, branding, and modern business solutions
            built for growth.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-9 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-yellow-500/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
                  <feature.icon className="h-6 w-6 text-yellow-400" />
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="text-sm leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}