import React from "react";
import { Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Our Courses", href: "#" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Affiliate Terms of Use", href: "/affiliate-terms-of-use" },
];

const categories = ["Cybersecurity", "Blockchain"];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-border/40 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="font-serif text-2xl font-bold text-primary tracking-widest" style={{ letterSpacing: '0.18em' }}>
                CAVARO
              </div>
              <div className="font-sans text-[9px] font-light text-muted-foreground uppercase tracking-widest mt-0.5" style={{ letterSpacing: '0.35em' }}>
                2.0 · Academy
              </div>
            </div>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              Leading online platform for cybersecurity and blockchain education. Master the skills that matter in today's digital economy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-medium text-foreground mb-5 text-[10px] uppercase tracking-widest" style={{ letterSpacing: '0.2em' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-sans font-medium text-foreground mb-5 text-[10px] uppercase tracking-widest" style={{ letterSpacing: '0.2em' }}>
              Categories
            </h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-medium text-foreground mb-5 text-[10px] uppercase tracking-widest" style={{ letterSpacing: '0.2em' }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2.5 text-sm font-light text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +27 000 00000
              </li>
              <li className="flex items-center gap-2.5 text-sm font-light text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                Support@cavaro.co.za
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-xs font-light text-muted-foreground tracking-widest" style={{ letterSpacing: '0.1em' }}>
            © 2026 CAVARO 2.0. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}