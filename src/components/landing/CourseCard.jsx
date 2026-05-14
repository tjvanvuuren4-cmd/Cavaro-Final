import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { USD_TO_ZAR } from "@/lib/courseData";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/lib/CartContext";

/**
 * @param {{ course: any; index: number }} props
 */
export default function CourseCard({ course, index }) {
  const priceZAR = (course.priceUSD * USD_TO_ZAR).toFixed(0);
  const navigate = useNavigate();
  const { cartItems, addCourse, removeCourse } = useCart();
  const inCart = cartItems.some((/** @type {{ id: number }} */ item) => item.id === course.id);

  const handleEnroll = () => {
    if (!inCart) {
      addCourse(course);
    }
    navigate('/cart');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative rounded-2xl border border-border/50 bg-card overflow-hidden hover:border-primary/30 transition-all duration-400"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

      <div className="relative aspect-video overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
        <Badge
          variant="outline"
          className="absolute top-3 left-3 bg-background/70 backdrop-blur-sm border-border/50 text-[10px] font-light tracking-widest uppercase"
          style={{ letterSpacing: '0.15em' }}
        >
          {course.category}
        </Badge>
      </div>

      <div className="relative p-5">
        <h3 className="font-serif text-lg font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors leading-snug">
          {course.title}
        </h3>
        <p className="text-sm font-light text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
          {course.description}
        </p>

        <div className="flex items-center gap-3 text-xs font-light text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {course.students.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-primary fill-primary" />
            {course.rating}
          </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/40">
          <div>
            <div className="font-serif text-xl font-semibold text-primary">
              R {Number(priceZAR).toLocaleString()}
            </div>
            <div className="text-[11px] font-light text-muted-foreground mt-0.5">
              ≈ ${course.priceUSD.toFixed(2)} USD
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="icon" variant="outline" className="h-9 w-9 border-border/50 hover:border-primary/40" onClick={() => addCourse(course)}>
              <ShoppingCart className="w-4 h-4" />
            </Button>
            <Button size="sm" onClick={handleEnroll} className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-9 px-4 text-xs uppercase tracking-wider" style={{ letterSpacing: '0.1em' }}>
              {inCart ? "Go to Cart" : "Enroll"}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}