import React, { useState } from "react";
import { X } from "lucide-react";

export default function QuoteModal({ open, setOpen }) {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    description: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Quote request submitted!");

    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-black p-8 text-white shadow-2xl">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 text-zinc-400 transition hover:text-yellow-400"
        >
          <X className="h-6 w-6" />
        </button>

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
          Request A Quote
        </p>

        <h2 className="text-4xl font-semibold">
          Let’s Build Something{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
            Premium
          </span>
        </h2>

        <p className="mt-5 text-zinc-400">
          Tell us about your business and project requirements.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-5 md:grid-cols-2"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-yellow-400"
            required
          />

          <input
            type="text"
            name="business"
            placeholder="Business Name"
            onChange={handleChange}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-yellow-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-yellow-400"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone / WhatsApp"
            onChange={handleChange}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-yellow-400"
          />

          <select
            name="service"
            onChange={handleChange}
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400"
          >
            <option>Website Design</option>
            <option>IT Support</option>
            <option>Business Setup</option>
            <option>Branding</option>
            <option>E-Commerce</option>
          </select>

          <select
            name="budget"
            onChange={handleChange}
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400"
          >
            <option>Budget Range</option>
            <option>R5k - R10k</option>
            <option>R10k - R20k</option>
            <option>R20k - R50k</option>
            <option>R50k+</option>
          </select>

          <textarea
            name="description"
            placeholder="Tell us about your project..."
            onChange={handleChange}
            className="min-h-[140px] rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-yellow-400 md:col-span-2"
          />

          <button
            type="submit"
            className="md:col-span-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-8 py-4 font-semibold text-black shadow-lg shadow-yellow-900/30 transition hover:scale-[1.02]"
          >
            Submit Quote Request
          </button>
        </form>
      </div>
    </div>
  );
}