import React from "react";
import { Crown, Globe2, Star, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Premium Programs", icon: Crown },
  { value: "4.8★", label: "Learner Rating", icon: Star },
  { value: "Global", label: "Learning Access", icon: Globe2 },
  { value: "100%", label: "Career-Focused", icon: ShieldCheck },
];

export default function LuxuryStats() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-black/80 px-8 py-10 text-center backdrop-blur-xl transition hover:bg-white/[0.04]"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10">
                    <Icon className="h-5 w-5 text-yellow-400" />
                  </div>
                </div>

                <p className="text-4xl font-semibold text-yellow-400">
                  {stat.value}
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-zinc-400">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}