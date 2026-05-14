import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const maxChars = 2500;

  /** @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  /** @param {React.FormEvent<HTMLFormElement>} event */
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const isFormValid = form.name && form.email && form.subject && form.message;
  const remainingChars = maxChars - form.message.length;

  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-[2rem] border border-border/40 bg-card/90 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">Contact Us</p>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Have questions about our courses? Need help choosing the right program?</h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                We’re here to help you succeed. Share your details below and our team will reach out with personalized guidance.
              </p>
              <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-slate-950/5">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaborating on cybersecurity projects"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent px-6 py-5 text-white">
                  <p className="text-sm uppercase tracking-[0.35em] text-primary">Cavaro 2.0 Academy</p>
                  <p className="mt-2 max-w-xl text-lg font-semibold">Expert guidance and support for every step of your learning journey.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr]">
              <div className="sticky top-24 rounded-[2rem] border border-border/50 bg-background p-8 shadow-lg shadow-slate-900/5">
                <div className="mb-6 flex items-center gap-3 rounded-3xl bg-primary/10 p-4 text-primary">
                  <MapPin className="h-5 w-5" />
                  <p className="text-sm font-semibold">Reach out anytime — we typically reply within one business day.</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Contact Summary</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Submit your details and our admissions team will contact you to discuss the best program for your goals.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/5 p-5">
                    <p className="text-sm font-semibold text-foreground">What we need</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground list-disc pl-5">
                      <li>Your name and email</li>
                      <li>Preferred course or area of interest</li>
                      <li>A brief message about your goals</li>
                    </ul>
                  </div>
                  <div className="rounded-3xl bg-slate-950/5 p-5">
                    <p className="text-sm font-semibold text-foreground">Why contact us?</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground list-disc pl-5">
                      <li>Receive personalized program guidance</li>
                      <li>Ask about payment options</li>
                      <li>Confirm course availability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-border/50 bg-background p-8 shadow-lg shadow-slate-900/5">
          <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">Send us a Message</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Complete the form and we’ll respond as soon as possible.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-foreground">
                  Full Name *
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm font-medium text-foreground">
                  Email Address *
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-foreground">
                  Phone Number
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="+27 000 00000"
                  />
                </label>
                <label className="block text-sm font-medium text-foreground">
                  Subject *
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="What can we help you with?"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-foreground">
                Message *
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  maxLength={maxChars}
                  rows={6}
                  className="mt-2 w-full rounded-3xl border border-border/70 bg-background px-4 py-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us a bit about your goals or questions"
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">{remainingChars} characters remaining</p>
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-background transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-primary/40"
                >
                  Send Message
                </button>
              </div>

              {submitted && (
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-900">
                  Thank you! Your message has been sent successfully. Our team will reach out shortly.
                </div>
              )}
            </div>

            <aside className="rounded-[2rem] border border-border/40 bg-slate-950/5 p-6 shadow-sm">
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">Need help fast?</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Use this form to request a callback, ask about course plans, or check program availability.
                  </p>
                </div>
                <div className="space-y-3 rounded-3xl bg-background/80 p-5">
                  <h3 className="text-base font-semibold text-foreground">Quick Contact Details</h3>
                  <p className="text-sm text-muted-foreground">Phone: +27 000 00000</p>
                  <p className="text-sm text-muted-foreground">Email: Support@cavaro.co.za</p>
                </div>
                <div className="space-y-3 rounded-3xl bg-background/80 p-5">
                  <h3 className="text-base font-semibold text-foreground">What happens next?</h3>
                  <ul className="space-y-2 pl-5 text-sm leading-7 text-muted-foreground list-disc">
                    <li>We review your request within one business day.</li>
                    <li>A team member will contact you with guidance.</li>
                    <li>We help match you to the right course.</li>
                  </ul>
                </div>
              </div>
            </aside>
          </form>
        </section>
      </div>
    </main>
  );
}
