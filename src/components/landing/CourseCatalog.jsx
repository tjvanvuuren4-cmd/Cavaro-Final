import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { courses } from "@/lib/courseData";
import CourseCard from "./CourseCard";

const categories = ["All", "Cybersecurity", "Blockchain", "Web Development"];

export default function CourseCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <section id="courses" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/15 to-background" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-sans font-light text-primary uppercase tracking-widest mb-4" style={{ letterSpacing: '0.25em' }}>
            Course Catalogue
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-foreground">
            Explore All Courses
          </h2>
          <p className="mt-5 font-light text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our comprehensive catalog of expert-led courses
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className={
                activeCategory === cat
                  ? "bg-primary text-primary-foreground font-medium text-[10px] uppercase tracking-widest px-5"
                  : "border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 font-light text-[10px] uppercase tracking-widest px-5"
              }
              style={{ letterSpacing: '0.15em' }}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((course, idx) => (
            <CourseCard key={course.id} course={course} index={idx} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-border/50 text-foreground hover:border-primary/30 font-light px-10 text-xs uppercase tracking-widest"
            style={{ letterSpacing: '0.15em' }}
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
}