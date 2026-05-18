import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function GalleryAdmin() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    image_url: "",
  });

  const fetchGallery = async () => {
    const { data, error } = await supabase
      .from("gallery_items")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setItems(data || []);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const createGalleryItem = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("gallery_items")
      .insert([form]);

    if (error) {
      alert(error.message);
      return;
    }

    setForm({
      title: "",
      category: "",
      description: "",
      image_url: "",
    });

    fetchGallery();
  };

  return (
    <section className="min-h-screen bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
          Cavaro Admin
        </p>

        <h1 className="mb-10 text-4xl font-semibold md:text-6xl">
          Gallery Manager
        </h1>

        <form
          onSubmit={createGalleryItem}
          className="mb-12 grid gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:grid-cols-2"
        >
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Gallery Title"
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
            required
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400 md:col-span-2"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="min-h-[120px] rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400 md:col-span-2"
          />

          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-8 py-4 font-semibold text-black transition hover:scale-[1.02] md:col-span-2"
          >
            Add Gallery Item
          </button>
        </form>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              <img
                src={item.image_url}
                alt={item.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-yellow-400">
                  {item.category}
                </p>

                <h2 className="mt-3 text-xl font-semibold">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}