import {
  SignedIn,
  SignedOut,
  SignUpButton,
} from "@clerk/clerk-react";
import { ShoppingCart, Star, Clock, Users, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { courses, USD_TO_ZAR } from "@/lib/courseData";

export default function FeaturedCourse() {
  const featured = courses.find((c) => c.featured);
  if (!featured) return null;

  const priceZAR = (featured.priceUSD * USD_TO_ZAR).toFixed(0);

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
            Flagship Programme
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Featured Premium{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
              Course
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A curated premium learning pathway designed for ambitious
            professionals ready to upgrade their future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="relative z-10 grid lg:grid-cols-2">
            <div className="relative min-h-[320px] overflow-hidden">

              <img
                src="/media/cavaro-featured-course.png"
                alt={featured.title}
                className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/30 to-black lg:from-transparent lg:to-black" />

              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-yellow-400 backdrop-blur">
                <Crown className="h-4 w-4" />
                Most Popular
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-400">
                {featured.category}
              </p>

              <h3 className="mb-5 text-3xl font-semibold leading-tight md:text-5xl">
                {featured.title}
              </h3>

              <p className="mb-8 text-base leading-8 text-zinc-400">
                {featured.description}
              </p>

              <div className="mb-10 flex flex-wrap gap-4 text-sm text-zinc-300">
                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <Clock className="h-4 w-4 text-yellow-400" />
                  {featured.duration}
                </span>

                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <Users className="h-4 w-4 text-yellow-400" />
                  {featured.students.toLocaleString()} students
                </span>

                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {featured.rating}
                </span>
              </div>

              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-4xl font-semibold text-yellow-400">
                    R {Number(priceZAR).toLocaleString()}
                  </p>
                  <p className="mt-1 text-xs tracking-wider text-zinc-500">
                    ≈ ${featured.priceUSD.toFixed(2)} USD
                  </p>
                </div>

                <div className="flex gap-3">
                  <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-yellow-400/60 hover:bg-white/5">
                    <ShoppingCart className="h-5 w-5" />
                </button>

                 <SignedOut>
                  <SignUpButton mode="modal">
                   <button className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-lg shadow-yellow-900/30 transition hover:scale-105">
                    Enroll Now
                   </button>
                  </SignUpButton>
                 </SignedOut>

                 <SignedIn>
                  <a
                    href="/dashboard"
                    className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-lg shadow-yellow-900/30 transition hover:scale-105"
                 >
                   Go To Dashboard
                </a>
               </SignedIn>
              </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}