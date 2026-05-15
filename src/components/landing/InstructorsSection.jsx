import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronDown, ChevronUp, BookOpen, Crown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { instructors } from "@/lib/courseData";

function InstructorCard({ instructor, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-yellow-500/40"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-6 flex items-start gap-5">
          <div className="relative shrink-0">
            <div className="h-20 w-20 overflow-hidden rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-black">
              {instructor.experience}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              {instructor.name}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-yellow-400">
              {instructor.title}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {instructor.credentials.map((cred) => (
                <Badge
                  key={cred}
                  variant="outline"
                  className="border-yellow-500/25 bg-yellow-500/10 text-[10px] uppercase tracking-wider text-yellow-300"
                >
                  {cred}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <p className="mb-6 text-sm leading-7 text-zinc-400">
          {instructor.bio}
        </p>

        <ul className="mb-6 space-y-3">
          {instructor.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-sm text-zinc-300">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
              {h}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex w-full items-center justify-between border-t border-white/10 pt-5 text-left"
        >
          <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400 transition hover:text-yellow-400">
            <BookOpen className="h-4 w-4" />
            Courses
          </span>
          {expanded ? (
            <ChevronUp className="h-4 w-4 text-yellow-400" />
          ) : (
            <ChevronDown className="h-4 w-4 text-yellow-400" />
          )}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2">
                {instructor.courses.map((c) => (
                  <li
                    key={c}
                    className="border-l border-yellow-500/30 pl-3 text-sm text-zinc-400 transition hover:text-yellow-400"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function InstructorsSection() {
  return (
    <section id="instructors" className="relative overflow-hidden bg-black px-6 py-28 text-white">
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
            Expert-Led Learning
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Learn From{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
              Industry Experts
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Cavaro connects ambitious learners with premium professional
            development guided by experienced specialists and curated expertise.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
          {[
            { value: "48+", label: "Years Combined Experience" },
            { value: "12", label: "Industry Certifications" },
            { value: "Global", label: "Learning Access" },
            { value: "4.8★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="bg-black/80 px-6 py-8 text-center backdrop-blur">
              <div className="mb-2 flex justify-center">
                <Crown className="h-5 w-5 text-yellow-400" />
              </div>
              <p className="text-3xl font-semibold text-yellow-400">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {instructors.map((instructor, idx) => (
            <InstructorCard
              key={instructor.name}
              instructor={instructor}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}