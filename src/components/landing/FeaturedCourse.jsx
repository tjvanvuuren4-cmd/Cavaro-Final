import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { courses, USD_TO_ZAR } from "@/lib/courseData";

export default function FeaturedCourse() {
  const featured = courses.find((c) => c.featured);
  if (!featured) return null;

  const priceZAR = (featured.priceUSD * USD_TO_ZAR).toFixed(0);

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-sans font-light text-primary uppercase tracking-widest mb-4" style={{ letterSpacing: '0.25em' }}>
            Flagship Programme
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-foreground">
            Our Most Popular Course
          </h2>
          <p className="mt-4 font-light text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of students in our flagship cybersecurity program
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-border/50 bg-card"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 hidden lg:block" />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground border-0 font-medium text-[10px] uppercase tracking-widest" style={{ letterSpacing: '0.15em' }}>
                Most Popular
              </Badge>
            </div>

            <div className="p-8 lg:p-14 flex flex-col justify-center">
              <p className="text-[10px] font-sans font-light text-primary uppercase tracking-widest mb-4" style={{ letterSpacing: '0.25em' }}>
                {featured.category}
              </p>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-5 leading-tight">
                {featured.title}
              </h3>
              <p className="font-light text-muted-foreground leading-relaxed mb-8 text-base">
                {featured.description}
              </p>

              <div className="flex flex-wrap gap-5 mb-10 text-sm font-light text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  {featured.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-primary" />
                  {featured.students.toLocaleString()} students
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  {featured.rating}
                </span>
              </div>

              <div className="flex items-end gap-6 flex-wrap">
                <div>
                  <div className="font-serif text-4xl font-semibold text-primary">
                    R {Number(priceZAR).toLocaleString()}
                  </div>
                  <div className="text-xs font-light text-muted-foreground mt-1 tracking-wider">
                    ≈ ${featured.priceUSD.toFixed(2)} USD
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button size="icon" variant="outline" className="border-border/50 hover:border-primary/40 h-11 w-11">
                    <ShoppingCart className="w-5 h-5" />
                  </Button>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-11 px-9 text-xs uppercase tracking-widest" style={{ letterSpacing: '0.15em' }}>
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}