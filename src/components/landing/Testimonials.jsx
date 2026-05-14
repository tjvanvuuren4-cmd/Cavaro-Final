import React from "react";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/courseData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-sans font-light text-primary uppercase tracking-widest mb-4" style={{ letterSpacing: '0.25em' }}>
            Student Stories
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-foreground">
            What Our Students Say
          </h2>
          <p className="mt-5 font-light text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied learners worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Card className="relative p-8 bg-card border-border/50 h-full hover:border-primary/25 transition-colors duration-400">
                <Quote className="w-8 h-8 text-primary/15 mb-5" />
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="font-serif font-light text-foreground/80 leading-relaxed mb-8 text-lg italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center font-serif font-medium text-sm text-primary border border-primary/20">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-sans font-medium text-foreground text-sm">{t.name}</p>
                    <p className="text-xs font-light text-muted-foreground tracking-wider">{t.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}