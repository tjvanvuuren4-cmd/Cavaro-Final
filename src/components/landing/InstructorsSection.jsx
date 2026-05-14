import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { instructors } from "@/lib/courseData";

function InstructorCard({ instructor, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative rounded-2xl border border-border/50 bg-card overflow-hidden hover:border-primary/30 transition-all duration-400"
    >
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="p-7 sm:p-8">
        {/* Header */}
        <div className="flex items-start gap-5 mb-6">
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-xl overflow-hidden border border-border/50">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-[9px] font-sans font-semibold px-2 py-0.5 rounded-full tracking-widest uppercase" style={{ letterSpacing: '0.1em' }}>
              {instructor.experience}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-xl font-medium text-foreground leading-tight mb-1">
              {instructor.name}
            </h3>
            <p className="text-xs font-sans font-light text-primary uppercase tracking-widest mb-3" style={{ letterSpacing: '0.15em' }}>
              {instructor.title}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {instructor.credentials.map((cred) => (
                <Badge
                  key={cred}
                  variant="outline"
                  className="text-[10px] font-sans font-medium border-primary/25 text-primary bg-primary/5 tracking-wider px-2 py-0.5"
                >
                  {cred}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="font-light text-muted-foreground text-sm leading-relaxed mb-6">
          {instructor.bio}
        </p>

        {/* Highlights */}
        <ul className="space-y-2.5 mb-6">
          {instructor.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm font-light text-foreground/80">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              {h}
            </li>
          ))}
        </ul>

        {/* Courses toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-between w-full pt-5 border-t border-border/40 text-left group/btn"
        >
          <span className="flex items-center gap-2 text-xs font-sans font-medium text-muted-foreground uppercase tracking-widest group-hover/btn:text-primary transition-colors" style={{ letterSpacing: '0.15em' }}>
            <BookOpen className="w-3.5 h-3.5" />
            Courses by this instructor
          </span>
          {expanded
            ? <ChevronUp className="w-4 h-4 text-muted-foreground" />
            : <ChevronDown className="w-4 h-4 text-muted-foreground" />
          }
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-2">
                {instructor.courses.map((c) => (
                  <li key={c} className="text-sm font-light text-muted-foreground pl-3 border-l border-primary/30 hover:text-primary transition-colors cursor-pointer">
                    {c}
                  </li>
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function InstructorsSection() {
  return (
    <section id="instructors" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/15 to-background" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-sans font-light text-primary uppercase tracking-widest mb-4" style={{ letterSpacing: '0.25em' }}>
            The Experts Behind the Courses
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-foreground">
            Meet Your Instructors
          </h2>
          <p className="mt-5 font-light text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Learn from certified professionals with decades of real-world experience at the highest levels of industry
          </p>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden mb-16 border border-border/40"
        >
          {[
            { value: "48+", label: "Years Combined Exp." },
            { value: "12", label: "Industry Certifications" },
            { value: "Fortune 500", label: "Corporate Backgrounds" },
            { value: "4.8★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card px-6 py-6 text-center">
              <div className="font-serif text-2xl sm:text-3xl font-semibold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] font-sans font-light text-muted-foreground uppercase tracking-widest" style={{ letterSpacing: '0.15em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Instructor cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {instructors.map((instructor, idx) => (
            <InstructorCard key={instructor.name} instructor={instructor} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}