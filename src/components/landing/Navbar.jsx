import React, { useState } from "react";
import { Menu, X, Crown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Navbar({ setQuoteOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Packages", href: "#packages" },
    { label: "Services", href: "#why" },
    { label: "Portfolio", href: "#instructors" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#footer" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl rounded-full border border-yellow-500/20 bg-black/45 px-5 shadow-2xl shadow-black/40 backdrop-blur-2xl">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10">
              <Crown className="h-5 w-5 text-yellow-400" />
            </div>

            <div className="flex flex-col leading-none">
              <span
                className="font-serif text-2xl font-bold tracking-widest text-yellow-400"
                style={{ letterSpacing: "0.18em" }}
              >
                CAVARO
              </span>

              <span
                className="text-[9px] font-light uppercase text-zinc-400"
                style={{ letterSpacing: "0.35em" }}
              >
                Elevate · Invest · Become
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-xs font-light uppercase tracking-widest text-zinc-300 transition hover:text-yellow-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <button
              onClick={() => setQuoteOpen(true)}
              className="rounded-full border border-yellow-500/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
            >
              Request Quote
            </button>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-xs uppercase tracking-widest text-zinc-300 transition hover:text-yellow-400">
                  Client Access
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-black shadow-lg shadow-yellow-900/30 transition hover:scale-105">
                  Get Started
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <a
                href="/dashboard"
                className="text-xs uppercase tracking-[0.2em] text-yellow-400 transition hover:text-yellow-300"
              >
                Client Portal
              </a>

              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          <button
            className="text-yellow-400 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-yellow-500/20 bg-black/80 p-5 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="space-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-xs uppercase tracking-widest text-zinc-300 hover:bg-white/5 hover:text-yellow-400"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                <button
                  onClick={() => {
                    setQuoteOpen(true);
                    setMobileOpen(false);
                  }}
                  className="col-span-2 rounded-full border border-yellow-500/30 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                >
                  Request Quote
                </button>

                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="rounded-full border border-white/15 px-4 py-3 text-xs uppercase tracking-widest text-zinc-300">
                      Access
                    </button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <button className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-black">
                      Join
                    </button>
                  </SignUpButton>
                </SignedOut>

                <SignedIn>
                  <div className="col-span-2 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-yellow-400">
                      Client Portal
                    </span>

                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}