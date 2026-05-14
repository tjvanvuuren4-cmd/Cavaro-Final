import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/4 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <p className="text-xs font-sans font-light text-primary uppercase tracking-widest mb-6" style={{ letterSpacing: '0.25em' }}>
          Begin Your Journey
        </p>
        <h2 className="font-serif font-light text-foreground leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
          Ready to Start Your Journey?
        </h2>
        <p className="mt-6 text-lg font-light text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Join our community of learners and take your skills to the next level
        </p>
        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm px-12 h-12 group tracking-widest uppercase"
            style={{ letterSpacing: '0.15em' }}
          >
            Start Learning Today
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}