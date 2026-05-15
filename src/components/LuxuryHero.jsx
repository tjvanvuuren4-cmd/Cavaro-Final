import React from "react";
import { ArrowRight, Crown, ShieldCheck, Sparkles } from "lucide-react";

export default function LuxuryHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/media/cavaro-hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      >
        <source src="/media/cavaro-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.12),transparent_35%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300 backdrop-blur">
            <Crown size={16} />
            Premium Self-Investment Platform
          </div>

          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
            The best investment you can make is{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
              in yourself.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Cavaro is built for ambitious individuals who want to upgrade their
            mindset, skills, confidence, and future through premium learning
            experiences.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#courses"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-7 py-4 font-semibold text-black shadow-lg shadow-yellow-900/30 transition hover:scale-105"
            >
              Begin Your Transformation
              <ArrowRight className="ml-2 transition group-hover:translate-x-1" size={18} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:border-yellow-400/60 hover:bg-white/10"
            >
              Discover Cavaro
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              [Sparkles, "Premium Growth"],
              [ShieldCheck, "Elite Standards"],
              [Crown, "Luxury Learning"],
            ].map(([Icon, text]) => (
              <div
                key={text}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
              >
                <Icon className="mb-3 text-yellow-400" />
                <p className="font-semibold">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}