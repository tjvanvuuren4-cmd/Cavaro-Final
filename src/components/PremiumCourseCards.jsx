import React from "react";
import { Rocket, TrendingUp, Gem, Crown, ShoppingCart, Cog } from "lucide-react";

const packages = [
  {
    title: "Launch Essentials",
    price: "R5,999",
    description: "Perfect for getting your business online with a professional first impression.",
    icon: Rocket,
    features: ["5-page website", "Mobile responsive", "Contact form", "Basic SEO", "Google Maps", "Social links", "1 revision"],
  },
  {
    title: "Business Growth",
    price: "R11,999",
    description: "Built for businesses ready to attract more customers and convert better.",
    icon: TrendingUp,
    popular: true,
    features: ["Up to 8 pages", "Advanced forms", "Speed optimization", "WhatsApp click-to-chat", "Social media integration", "1 month support", "2 revisions"],
  },
  {
    title: "Premium Business",
    price: "R17,999",
    description: "A premium online presence that builds trust and improves customer perception.",
    icon: Gem,
    features: ["Up to 12 pages", "Premium layout", "Analytics setup", "Blog/news section", "WhatsApp integration", "2 months support", "3 revisions"],
  },
  {
    title: "Elite Brand Experience",
    price: "R26,999",
    description: "For brands that want a luxury digital experience with stronger visual impact.",
    icon: Crown,
    features: ["Up to 15 pages", "Custom premium design", "Advanced animations", "SEO + analytics", "Blog/news section", "3 months support", "Unlimited revisions"],
  },
  {
    title: "E-Commerce Power",
    price: "R34,999",
    description: "Sell online with a powerful, secure, and modern e-commerce store.",
    icon: ShoppingCart,
    features: ["Full e-commerce website", "Up to 20 products", "Payment integration", "Inventory management", "Order management", "3 months support", "Mobile responsive"],
  },
  {
    title: "Custom Web Solution",
    price: "R49,999+",
    description: "Tailored scalable systems for complex business needs and advanced features.",
    icon: Cog,
    features: ["Custom website/web app", "Database setup", "User management", "API integrations", "Advanced analytics", "Priority support", "Custom timeline"],
  },
];

export default function PremiumCourseCards() {
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
          {packages.map((pkg) => {
            const Icon = pkg.icon;

            return (
              <div
                key={pkg.title}
                className={`group relative flex min-h-[620px] flex-col justify-between overflow-hidden rounded-3xl border p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 ${
                  pkg.popular
                    ? "border-yellow-500/50 bg-yellow-500/[0.06]"
                    : "border-white/10 bg-white/[0.03] hover:border-yellow-500/40"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-black">
                    Popular
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
                    <Icon className="h-7 w-7 text-yellow-400" />
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold">{pkg.title}</h3>

                  <p className="mb-6 leading-7 text-zinc-400">{pkg.description}</p>

                  <p className="mb-6 text-4xl font-semibold text-yellow-400">
                    {pkg.price}
                  </p>

                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-zinc-300">
                        <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#footer"
                  className="relative z-10 mt-8 inline-flex justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:scale-105"
                >
                  Enquire Now
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}