import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Gem } from "lucide-react";

export default function PremiumCourseCards() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("is_active", true)
      .order("created_at", { ascending: false });

    if (!error) {
      setPackages(data || []);
    }
  };

  return (
    <section id="packages" className="relative bg-black px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
            Website Packages
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Premium Packages Built To{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
              Elevate Your Business
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Choose a professional web design package built to improve trust,
            appearance, customer perception, and lead generation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group relative flex min-h-[520px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-yellow-500/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
                  <Gem className="h-7 w-7 text-yellow-400" />
                </div>

                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-yellow-400">
                  {pkg.category}
                </p>

                <h3 className="mb-3 text-2xl font-semibold">{pkg.title}</h3>

                <p className="mb-6 leading-7 text-zinc-400">
                  {pkg.short_description}
                </p>

                <p className="mb-2 text-4xl font-semibold text-yellow-400">
                  R{pkg.upfront_price}
                </p>

                {pkg.monthly_price && (
                  <p className="mb-6 text-sm text-zinc-400">
                    or from R{pkg.monthly_price}/month
                  </p>
                )}

                {pkg.duration && (
                  <p className="text-sm text-zinc-500">
                    Duration: {pkg.duration}
                  </p>
                )}
              </div>

              <a
                href="#footer"
                className="relative z-10 mt-8 inline-flex justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:scale-105"
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}