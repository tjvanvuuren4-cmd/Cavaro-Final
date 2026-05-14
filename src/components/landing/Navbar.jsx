import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from '@/lib/AuthContext';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { navigateToLogin } = useAuth();

  /**
   * @param {React.MouseEvent<HTMLButtonElement>} event
   */
  const handleLoginClick = (event) => {
    event.preventDefault();
    navigateToLogin();
  };

  const handleGetStartedClick = handleLoginClick;

  const links = [
    { label: "Courses", href: "#courses" },
    { label: "About", href: "#why" },
    { label: "Instructors", href: "#instructors" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#footer" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-bold tracking-widest text-primary" style={{ letterSpacing: '0.18em' }}>
                CAVARO
              </span>
              <span className="font-sans text-[9px] font-light tracking-widest2 text-muted-foreground uppercase" style={{ letterSpacing: '0.35em' }}>
                2.0 · Academy
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-light tracking-wider text-muted-foreground hover:text-foreground transition-colors uppercase"
                style={{ letterSpacing: '0.1em' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLoginClick}
              className="text-muted-foreground hover:text-foreground font-light tracking-wider text-xs uppercase"
              style={{ letterSpacing: '0.1em' }}
            >
              Log In
            </Button>
            <Button
              size="sm"
              onClick={handleGetStartedClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wider text-xs uppercase px-5"
              style={{ letterSpacing: '0.1em' }}
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-xs text-muted-foreground hover:text-foreground py-2 uppercase tracking-widest"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-border flex gap-3">
                <Button
                variant="ghost"
                size="sm"
                className="flex-1 text-xs uppercase tracking-wider"
                onClick={handleLoginClick}
              >
                Log In
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-primary text-primary-foreground text-xs uppercase tracking-wider"
                onClick={handleGetStartedClick}
              >
                Get Started
              </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}