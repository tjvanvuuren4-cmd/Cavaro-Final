import LuxuryHero from "@/components/LuxuryHero";
import React from "react";
import Navbar from "@/components/landing/Navbar";
import WhyLearnWithUs from "@/components/landing/WhyLearnWithUs";
import FeaturedCourse from "@/components/landing/FeaturedCourse";
import PremiumCourseCards from "@/components/PremiumCourseCards";
import InstructorsSection from "@/components/landing/InstructorsSection";
import Testimonials from "@/components/landing/Testimonials";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <LuxuryHero />
      <WhyLearnWithUs />
      <FeaturedCourse />
      <PremiumCourseCards />
      <InstructorsSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}