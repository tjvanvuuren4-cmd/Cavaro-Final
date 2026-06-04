import { useState } from "react";

export default function Auto() {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    make: "",
    model: "",
    year: "",
    engine: "",
    part: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const brands = [
    "Toyota",
    "Volkswagen",
    "Ford",
    "BMW",
    "Mercedes-Benz",
    "Nissan",
    "Hyundai",
    "Kia",
  ];

  const steps = [
    "Send Vehicle Details",
    "Upload Part Photo",
    "We Source The Part",
    "We Quote & Deliver",
  ];

  const trustItems = [
    "OEM Parts",
    "Aftermarket Parts",
    "Nationwide Sourcing",
    "Trusted Supplier Network",
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "c6e10925-16d4-486f-a5e5-3a2951cb8528",
        subject: "New Cavaro Auto Part Quote Request",
        from_name: "Cavaro Auto Website",
        name: form.name,
        whatsapp: form.whatsapp,
        vehicle_make: form.make,
        vehicle_model: form.model,
        year: form.year,
        engine: form.engine,
        part_needed: form.part,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setSuccess(true);
      setLoading(false);

      setForm({
        name: "",
        whatsapp: "",
        make: "",
        model: "",
        year: "",
        engine: "",
        part: "",
      });
      setTimeout(() => {
  setSuccess(false);
}, 4000);
    } else {
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src="/media/cavaro-auto-logo.png"
              alt="Cavaro Auto"
              className="w-[320px] md:w-[450px]"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-yellow-400 md:text-6xl">
              Premium Parts.
              <br />
              Trusted Sourcing.
            </h1>

            <p className="mt-6 text-lg text-zinc-400">
              Need a hard-to-find part? We source quality OEM and aftermarket
              parts through our trusted supplier network.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="#request-quote"
                className="rounded-xl bg-yellow-500 px-8 py-4 text-center font-medium text-black transition hover:bg-yellow-400"
              >
                Request A Part
              </a>

              <a
                href="https://wa.me/27717926489"
                className="rounded-xl border border-yellow-500 px-8 py-4 text-center font-medium text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-yellow-400">
            HOW IT WORKS
          </h2>

          <p className="mx-auto max-w-2xl text-zinc-400">
            Finding the right part shouldn&apos;t be difficult. Our sourcing
            process is designed to get you the right part quickly and reliably.
          </p>
        </div>

        <div className="mb-24 grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 text-center transition hover:border-yellow-400/60"
            >
              <div className="mb-4 text-4xl font-bold text-yellow-400">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-white">{step}</h3>
            </div>
          ))}
        </div>

        {/* TRUST SECTION */}
        <div className="mb-24 rounded-3xl border border-yellow-500/20 bg-gradient-to-b from-zinc-900 to-black p-10">
          <h2 className="mb-10 text-center text-3xl font-bold text-yellow-400">
            Why Choose Cavaro Auto?
          </h2>

          <div className="grid gap-6 text-center md:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item} className="p-6">
                <div className="mb-3 text-3xl text-yellow-400">✓</div>
                <p className="text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* REQUEST FORM */}
        <div id="request-quote" className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-4xl font-bold text-yellow-400">
            Request A Part Quote
          </h2>

          <p className="mb-10 text-center text-zinc-400">
            Need a hard-to-find part? We source quality OEM and aftermarket
            parts through our trusted supplier network.
          </p>

          {success && (
            <div className="mb-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5 text-center text-yellow-400">
              Part quote request received. We&apos;ll contact you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none focus:border-yellow-400"
            />

            <input
              type="text"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              placeholder="WhatsApp Number"
              required
              className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none focus:border-yellow-400"
            />

            <input
              type="text"
              name="make"
              value={form.make}
              onChange={handleChange}
              placeholder="Vehicle Make"
              className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none focus:border-yellow-400"
            />

            <input
              type="text"
              name="model"
              value={form.model}
              onChange={handleChange}
              placeholder="Vehicle Model"
              className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none focus:border-yellow-400"
            />

            <input
              type="text"
              name="year"
              value={form.year}
              onChange={handleChange}
              placeholder="Year"
              className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none focus:border-yellow-400"
            />

            <input
              type="text"
              name="engine"
              value={form.engine}
              onChange={handleChange}
              placeholder="Engine"
              className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none focus:border-yellow-400"
            />

            <textarea
              name="part"
              value={form.part}
              onChange={handleChange}
              placeholder="Part Needed"
              rows="5"
              required
              className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none focus:border-yellow-400 md:col-span-2"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-gradient-to-r from-yellow-400 to-amber-600 py-4 font-bold text-black transition hover:scale-[1.01] disabled:opacity-60 md:col-span-2"
            >
              {loading ? "Submitting..." : "REQUEST PART QUOTE"}
            </button>
          </form>
        </div>
      </section>

      {/* POPULAR BRANDS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-yellow-400">
            Popular Vehicle Brands
          </h2>

          <p className="text-zinc-400">
            We source OEM and aftermarket parts for a wide range of vehicle
            manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="group cursor-pointer rounded-3xl border border-yellow-500/20 bg-zinc-900/80 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10"
            >
              <h3 className="text-lg font-semibold text-zinc-200 transition group-hover:text-yellow-400">
                {brand}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}