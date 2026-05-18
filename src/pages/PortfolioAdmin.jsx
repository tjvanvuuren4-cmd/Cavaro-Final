import React, { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PortfolioAdmin() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    image_url: "",
    website_url: "",
    featured: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("portfolio_projects").insert([form]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    setSuccess(true);

    setForm({
      title: "",
      category: "",
      description: "",
      image_url: "",
      website_url: "",
      featured: false,
    });

    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <section className="min-h-screen bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
          Cavaro Admin
        </p>

        <h1 className="mb-8 text-4xl font-semibold md:text-6xl">
          Add Portfolio Project
        </h1>

        {success && (
          <div className="mb-8 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5 text-yellow-400">
            Portfolio project added successfully.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:grid-cols-2"
        >
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Project Title"
            required
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400"
          />

          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400"
          />

          <input
            name="image_url"
            value={form.image_url}
            onChange={handleChange}
            placeholder="Image URL"
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400 md:col-span-2"
          />

          <input
            name="website_url"
            value={form.website_url}
            onChange={handleChange}
            placeholder="Website URL"
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400 md:col-span-2"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Project Description"
            className="min-h-[140px] rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400 md:col-span-2"
          />

          <label className="flex items-center gap-3 text-sm text-zinc-300 md:col-span-2">
            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={handleChange}
            />
            Mark as featured project
          </label>

          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-8 py-4 font-semibold text-black transition hover:scale-[1.02] disabled:opacity-60 md:col-span-2"
          >
            {loading ? "Saving..." : "Save Portfolio Project"}
          </button>
        </form>
      </div>
    </section>
  );
}