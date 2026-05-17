import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Michael Jacobs",
    role: "Business Owner",
    text: "Cavaro completely transformed our online presence. The website feels premium, modern, and our customers trust the brand far more now.",
    avatar: "MJ",
  },
  {
    name: "Sarah Williams",
    role: "Entrepreneur",
    text: "Professional service from start to finish. The branding and website quality exceeded expectations and helped improve our client perception.",
    avatar: "SW",
  },
  {
    name: "Daniel Roberts",
    role: "Startup Founder",
    text: "Cavaro delivered a luxury digital experience that made our business stand out instantly. Highly recommended for modern businesses.",
    avatar: "DR",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-black px-6 py-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.12),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
            Client Experiences
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Trusted By Modern{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
              Businesses
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Premium digital experiences designed to improve trust,
            professionalism, and business growth.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-yellow-500/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <Quote className="mb-6 h-10 w-10 text-yellow-400/40" />

                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="mb-8 text-lg italic leading-8 text-zinc-300">
                  “{t.text}”
                </p>

                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 text-sm font-semibold text-yellow-400">
                    {t.avatar}
                  </div>

                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-zinc-400">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}