import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Gallery() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      const { data, error } = await supabase
        .from("gallery_items")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) {
        setItems(data || []);
      }
    };

    fetchGallery();
  }, []);

  return (
    <section className="min-h-screen bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
          Cavaro Gallery
        </p>

        <h1 className="mb-6 text-4xl font-semibold md:text-6xl">
          Creative Work &{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
            Brand Designs
          </span>
        </h1>

        <p className="mb-14 max-w-2xl text-lg leading-8 text-zinc-400">
          Explore logos, flyers, promotional visuals, social media creatives,
          and premium brand designs created by Cavaro Studio.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              <img
                src={item.image_url}
                alt={item.title}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-yellow-400">
                  {item.category}
                </p>

                <h2 className="mt-3 text-2xl font-semibold">
                  {item.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {items.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center text-zinc-400 md:col-span-2 lg:col-span-3">
              No gallery items available yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}