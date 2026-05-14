import React from "react";
import { GraduationCap, Wrench, Award } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of real-world experience in cybersecurity and blockchain",
  },
  {
    icon: Wrench,
    title: "Practical Skills",
    description:
      "Hands-on projects and real-world scenarios to build skills you can use immediately in your career",
  },
  {
    icon: Award,
    title: "Certification",
    description:
      "Earn industry-recognized certificates to showcase your expertise to employers and clients",
  },
];

export default function WhyLearnWithUs() {
  return (
    <section id="why" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-sans font-light text-primary uppercase tracking-widest mb-4" style={{ letterSpacing: '0.25em' }}>
            Why Choose Us
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-foreground">
            Why Learn With Us?
          </h2>
          <p className="mt-5 font-light text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals advancing their careers with our comprehensive courses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative p-9 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-400"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center mb-7 group-hover:bg-primary/15 transition-colors border border-primary/20">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-light text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}