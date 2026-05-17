import React from "react";
import { ArrowRight, Crown } from "lucide-react";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-xl md:p-20">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10">
              <Crown className="h-8 w-8 text-yellow-400" />
            </div>
          </div>

          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-yellow-400">
            Build Your Digital Presence
          </p>

          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
            Invest In The{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
              Future Of Your Business
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Cavaro helps businesses elevate their brand through premium
            websites, modern IT solutions, and digital systems designed for
            growth, professionalism, and trust.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-8 py-4 font-semibold text-black shadow-lg shadow-yellow-900/30 transition hover:scale-105">
                  View Website Packages
                  <ArrowRight
                    className="ml-2 transition group-hover:translate-x-1"
                    size={18}
                  />
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <a
                href="/dashboard"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-8 py-4 font-semibold text-black shadow-lg shadow-yellow-900/30 transition hover:scale-105"
              >
                Client Dashboard
                <ArrowRight
                  className="ml-2 transition group-hover:translate-x-1"
                  size={18}
                />
              </a>
            </SignedIn>

            <button className="rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-yellow-400/60 hover:bg-white/5">
              Our Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}