import React from "react";
import { Phone, Mail, Crown } from "lucide-react";

const quickLinks = [
  { label: "Packages", href: "#packages" },
  { label: "Why Cavaro", href: "#why" },
  { label: "Portfolio", href: "#instructors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  "Premium Web Design",
  "IT Support",
  "PC Builds",
  "Business Setup",
  "Brand Growth",
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Affiliate Terms", href: "/affiliate-terms-of-use" },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.12),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-4">
  <div className="flex items-center justify-center">
    <img
      src="/cavaro-favicon.png"
      alt="Cavaro Logo"
      className="h-10 w-10 object-contain"
    />
  </div>

  <div>
    <div className="text-2xl font-bold tracking-[0.18em] text-yellow-400">
      CAVARO
    </div>

    <div className="mt-1 text-[9px] uppercase tracking-[0.35em] text-zinc-500">
      Digital · Innovation · Excellence
    </div>
  </div>
</div>

            <p className="text-sm leading-7 text-zinc-400">
              Premium web design, IT support, PC builds, and business digital
              solutions created to help brands look professional and grow with
              confidence.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
              Explore
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-400 transition hover:text-yellow-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-zinc-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
              Contact & Legal
            </h4>

            <ul className="mb-6 space-y-4">
              <li className="flex items-center gap-3 text-sm text-zinc-400">
                <Phone className="h-4 w-4 shrink-0 text-yellow-400" />
                +27 71 792 6486
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-400">
                <Mail className="h-4 w-4 shrink-0 text-yellow-400" />
                support@cavaro.co.za
              </li>
            </ul>

            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 transition hover:text-yellow-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-zinc-500">
            © 2026 Cavaro Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}