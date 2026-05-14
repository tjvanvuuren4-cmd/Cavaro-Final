import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Students", value: "10", suffix: "K+" },
  { label: "Courses", value: "20", suffix: "" },
  { label: "Rating", value: "4.8", suffix: "" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a057b43c92975536478e242/8ae1e3e31_generated_f998f1c2.png"
          alt="background"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      {/* Subtle glow accents */}
      <div className="absolute top-1/3 left-1/5 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] bg-accent/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-primary/25 bg-primary/5 mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-sans font-medium text-primary tracking-widest uppercase" style={{ letterSpacing: '0.2em' }}>
                Now Enrolling — Spring 2026
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif font-light leading-[1.1] tracking-tight"
            style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
          >
            Master{" "}
            <span className="text-primary italic">Cybersecurity</span>
            <br />
            <span className="text-foreground">&amp; </span>
            <span className="text-accent italic">Blockchain</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-lg font-light text-muted-foreground leading-relaxed max-w-2xl tracking-wide"
          >
            Learn from industry experts and transform your career with our comprehensive courses in cybersecurity and blockchain technology. Join thousands of successful professionals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm px-10 h-12 group tracking-widest uppercase"
              style={{ letterSpacing: '0.15em' }}
            >
              Explore Courses
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/60 text-foreground hover:bg-secondary font-light text-sm px-10 h-12 tracking-widest uppercase"
              style={{ letterSpacing: '0.15em' }}
            >
              <Play className="mr-2 w-4 h-4" />
              Learn More
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-20 flex gap-12 sm:gap-20"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="relative">
                <div className="font-serif text-4xl sm:text-5xl font-light text-foreground tracking-tight">
                  {stat.value}
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="text-xs font-sans font-light text-muted-foreground mt-2 uppercase tracking-widest" style={{ letterSpacing: '0.2em' }}>
                  {stat.label}
                </div>
                <div className="absolute -bottom-3 left-0 w-8 h-px bg-primary/40" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}