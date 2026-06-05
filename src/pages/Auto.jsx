import { useState } from "react";
import { supabase } from "@/lib/supabase";

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

  const [partPhoto, setPartPhoto] = useState(null);
  const [vinDisc, setVinDisc] = useState(null);
  const [existingQuote, setExistingQuote] = useState(null);

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

  const uploadFile = async (file, folder) => {
  if (!file) return "";

  const fileExt = file.name.split(".").pop();
  const fileName = `${folder}/${Date.now()}-${Math.random()
    .toString(36)
    .substring(2)}.${fileExt}`;

  const { error } = await supabase.storage
    .from("auto-requests")
    .upload(fileName, file);

  if (error) throw error;

  const { data } = supabase.storage
    .from("auto-requests")
    .getPublicUrl(fileName);

  return data.publicUrl;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const partPhotoUrl = await uploadFile(partPhoto, "part-photos");
    const vinDiscUrl = await uploadFile(vinDisc, "vin-discs");
    const existingQuoteUrl = await uploadFile(existingQuote, "existing-quotes");

    await supabase.from("auto_requests").insert([
      {
        name: form.name,
        whatsapp: form.whatsapp,
        make: form.make,
        model: form.model,
        year: form.year,
        engine: form.engine,
        part_needed: form.part,
        part_photo_url: partPhotoUrl,
        vin_disc_url: vinDiscUrl,
        quote_url: existingQuoteUrl,
      },
    ]);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "c6e10925-16d4-486f-a5e5-3a2951cb8528",
        subject: "New Cavaro Auto Request",
        from_name: "Cavaro Auto Website",
        name: form.name,
        whatsapp: form.whatsapp,
        vehicle_make: form.make,
        vehicle_model: form.model,
        year: form.year,
        engine: form.engine,
        request_details: form.part,
        part_photo_url: partPhotoUrl || "No part photo uploaded",
        vin_disc_url: vinDiscUrl || "No VIN disc uploaded",
        existing_quote_url: existingQuoteUrl || "No quote uploaded",
      }),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error("Email failed to send");
    }

    setSuccess(true);

    setForm({
      name: "",
      whatsapp: "",
      make: "",
      model: "",
      year: "",
      engine: "",
      part: "",
    });

    setPartPhoto(null);
    setVinDisc(null);
    setExistingQuote(null);

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  } catch (error) {
    console.error("Auto request error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

    {/* Carbon Fibre Pattern */}
    <div className="absolute inset-0 bg-black" />

    <div className="absolute inset-0 opacity-15" style={{
    backgroundImage: "url('/media/carbon-fibre.webp')",
    backgroundSize: "250px",
    backgroundRepeat: "repeat",
    }}
    />

    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-black" />

    <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/15 blur-[250px]" />

    {/* Gold Glow */}
    <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[120px]" />

    {/* Page Content */}
    <div className="relative z-10">
    
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-24">
  <div className="grid items-center gap-16 md:grid-cols-2">
    <div className="relative flex justify-center">
      <div className="absolute h-[450px] w-[450px] rounded-full bg-yellow-500/0 blur-[10px]" />

      <img
        src="/media/cavaro-auto-logo.png"
        alt="Cavaro Auto"
        className="relative z-10 w-[450px] drop-shadow-[0_0_45px_rgba(234,179,8,0.25)] md:w-[470px]"
      />
    </div>

    <div className="text-center md:text-left">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-yellow-400">
        Premium Automotive Sourcing
      </p>

      <h1 className="text-4xl font-bold leading-tight text-white md:text-7xl">
  Parts.
  <br />
  Vehicles.
  <br />
  Performance.
  <br />
  <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
    Delivered Nationwide.
  </span>
</h1>

<p className="mt-4 text-sm uppercase tracking-[0.2em] text-yellow-400/80">
  Trusted Automotive Sourcing Solutions
</p>

      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
        Cavaro Auto helps customers source quality parts, accessories,
        performance products and vehicles through a trusted supplier network.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
        <a
          href="#request-quote"
          className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-8 py-4 text-center font-bold text-black shadow-lg shadow-yellow-900/30 transition hover:scale-105"
        >
          Get A Fast Quote
        </a>

        <a
          href="https://wa.me/27717926489"
          className="rounded-full border border-yellow-500/40 bg-white/5 px-8 py-4 text-center font-medium text-yellow-400 backdrop-blur transition hover:bg-yellow-500 hover:text-black"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  </div>
</section>
<div className="mx-auto my-8 h-px max-w-7xl bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
<section className="mx-auto max-w-7xl px-6">
    
  <div className="grid gap-4 rounded-[2rem] border border-yellow-500/20 bg-white/[0.03] p-6 backdrop-blur-xl md:grid-cols-4">
    {[
      "🛡 Trusted Suppliers",
      "⚙ OEM & Aftermarket",
      "🚗 Parts • Vehicles • Performance",
      "📦 Nationwide Delivery",
    ].map((item) => (
      <div key={item} className="text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
          {item}
        </p>
      </div>
    ))}
  </div>
</section>
{/* STATS SECTION */}
<section className="mx-auto max-w-7xl px-6 pb-20 pt-8">
  <div className="grid gap-6 md:grid-cols-4">
    {[
      {
        icon: "🔧",
        value: "1000+",
        label: "Parts Sourced",
      },
      {
        icon: "⚙️",
        value: "OEM",
        label: "Aftermarket Network",
      },
      {
        icon: "🚚",
        value: "Nationwide",
        label: "Delivery",
      },
      {
        icon: "🚗",
        value: "Vehicle",
        label: "Sourcing Available",
      },
    ].map((stat) => (
      <div
        key={stat.label}
        className="group rounded-3xl border border-yellow-500/20 bg-gradient-to-b from-zinc-900/95 to-black p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)]"
      >
        <div className="mb-4 text-3xl">{stat.icon}</div>

        <h3 className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-4xl font-bold text-transparent">
          {stat.value}
        </h3>

        <div className="mx-auto mt-4 h-px w-12 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

        <p className="mt-4 text-xs uppercase tracking-[0.35em] text-zinc-400">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</section>
      {/* HOW IT WORKS */}
<section className="mx-auto max-w-7xl px-6 py-20">
  <div className="mb-16 text-center">
    <h2 className="mb-4 text-4xl font-bold text-yellow-400">
      HOW IT WORKS
    </h2>

    <div className="mx-auto mb-6 h-px w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

    <p className="mx-auto max-w-2xl text-zinc-400">
      A simple and reliable process designed to help you source quality
      automotive solutions quickly and efficiently.
    </p>
  </div>

  <div className="mb-24 grid gap-6 md:grid-cols-4">
    {[
      {
        icon: "🚗",
        title: "Send Vehicle Details",
      },
      {
        icon: "📸",
        title: "Upload Part Photo",
      },
      {
        icon: "🔎",
        title: "We Source The Best Option",
      },
      {
        icon: "📦",
        title: "Quote & Delivery",
      },
    ].map((step, index) => (
      <div
        key={index}
        className="flex min-h-[190px] flex-col items-center justify-center rounded-3xl border border-yellow-500/20 bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/10"
      >
        <div className="mb-4 text-5xl">{step.icon}</div>

        <div className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
          Step {index + 1}
        </div>

        <h3 className="text-xl font-semibold text-white">
          {step.title}
        </h3>
      </div>
    ))}
  </div>

        {/* TRUST SECTION */}

<div className="mb-24 rounded-[2rem] border border-yellow-500/20 bg-gradient-to-b from-zinc-900/90 to-black p-12 backdrop-blur-xl">

  <h2 className="mb-4 text-center text-4xl font-bold text-yellow-400">
    Why Choose Cavaro Auto?
  </h2>

  <div className="mx-auto mb-8 h-px w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

  <p className="mx-auto mb-12 max-w-3xl text-center text-zinc-400">
    We connect customers with trusted suppliers nationwide, helping you source
    quality automotive products quickly, professionally and reliably.
  </p>

  <div className="grid gap-6 md:grid-cols-4">

{[
  {
    icon: "🛡️",
    title: "OEM Parts",
    desc: "Quality original equipment components from trusted suppliers.",
  },
  {
    icon: "⚙️",
    title: "Aftermarket Parts",
    desc: "Reliable alternatives offering excellent value and performance.",
  },
  {
    icon: "🚚",
    title: "Nationwide Sourcing",
    desc: "Access to suppliers and inventory across South Africa.",
  },
  {
    icon: "🤝",
    title: "Trusted Network",
    desc: "Built on relationships with reputable automotive suppliers.",
  },
].map((item) => (
  <div
    key={item.title}
    className="rounded-3xl border border-yellow-500/10 bg-white/[0.03] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/10"
  >
    <div className="mb-4 text-5xl">
      {item.icon}
    </div>

    <h3 className="mb-3 text-xl font-semibold text-white">
      {item.title}
    </h3>

    <p className="text-sm leading-6 text-zinc-400">
      {item.desc}
    </p>
  </div>
))}

  </div>

</div>


        {/* REQUEST FORM */}

<div id="request-quote" className="mx-auto max-w-5xl">

  <div className="text-center mb-12">
    <h2 className="mb-4 text-4xl font-bold text-yellow-400">
      Request Automotive Sourcing
    </h2>
<div className="mx-auto mb-6 h-px w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

<p className="mx-auto max-w-3xl text-zinc-400">
  Premium automotive sourcing made simple.
  From parts and accessories to complete vehicles.
  Cavaro Auto connects you with trusted automotive solutions nationwide.
</p>
  </div>

{/* Upload Cards */}

  <div className="mb-12 grid gap-6 md:grid-cols-3">
<div className="rounded-3xl border border-yellow-500/20 bg-zinc-900/80 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400">
  <div className="mb-4 text-5xl">📷</div>
  <h3 className="text-xl font-semibold text-white">
    Upload Part Photo
  </h3>
  <p className="mt-3 text-sm text-zinc-400">
    Send a photo and we'll help identify the correct part.
  </p>
</div>

<div className="rounded-3xl border border-yellow-500/20 bg-zinc-900/80 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400">
  <div className="mb-4 text-5xl">🚗</div>
  <h3 className="text-xl font-semibold text-white">
    Upload VIN Disc
  </h3>
  <p className="mt-3 text-sm text-zinc-400">
    VIN information helps us source accurate vehicle-specific parts.
  </p>
</div>

<div className="rounded-3xl border border-yellow-500/20 bg-zinc-900/80 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400">
  <div className="mb-4 text-5xl">📄</div>
  <h3 className="text-xl font-semibold text-white">
    Upload Existing Quote
  </h3>
  <p className="mt-3 text-sm text-zinc-400">
    Compare supplier pricing and sourcing options.
  </p>
</div>
  </div>

          {success && (
            <div className="mb-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5 text-center text-yellow-400">
              Request received. We&apos;ll contact you shortly.
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
{/* FILE UPLOADS */}
<div className="md:col-span-2 grid gap-5 md:grid-cols-3">
  <label className="block rounded-2xl border border-yellow-500/20 bg-zinc-900/80 p-5">
    <span className="mb-3 block text-sm font-semibold text-yellow-400">
      Upload Part Photo
    </span>

    <input
      type="file"
      accept="image/*"
      onChange={(e) => setPartPhoto(e.target.files[0])}
      className="w-full text-sm text-zinc-300 file:mr-4 file:rounded-full file:border-0 file:bg-yellow-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-black"
    />
  </label>

  <label className="block rounded-2xl border border-yellow-500/20 bg-zinc-900/80 p-5">
    <span className="mb-3 block text-sm font-semibold text-yellow-400">
      Upload VIN Disc
    </span>

    <input
      type="file"
      accept="image/*,.pdf"
      onChange={(e) => setVinDisc(e.target.files[0])}
      className="w-full text-sm text-zinc-300 file:mr-4 file:rounded-full file:border-0 file:bg-yellow-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-black"
    />
  </label>

  <label className="block rounded-2xl border border-yellow-500/20 bg-zinc-900/80 p-5">
    <span className="mb-3 block text-sm font-semibold text-yellow-400">
      Upload Existing Quote
    </span>

    <input
      type="file"
      accept="image/*,.pdf"
      onChange={(e) => setExistingQuote(e.target.files[0])}
      className="w-full text-sm text-zinc-300 file:mr-4 file:rounded-full file:border-0 file:bg-yellow-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-black"
    />
  </label>
</div>
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
              {loading ? "Submitting..." : "SUBMIT REQUEST"}
            </button>
          </form>
        </div>
      </section>

      {/* POPULAR BRANDS */}
<section className="mx-auto max-w-7xl px-6 py-24">

  <div className="mb-16 text-center">
    <h2 className="mb-4 text-4xl font-bold text-yellow-400">
      Popular Vehicle Brands
    </h2>

    <div className="mx-auto mb-6 h-px w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

    <p className="mx-auto max-w-3xl text-zinc-400">
      We source OEM parts, aftermarket components, accessories,
      performance upgrades and vehicles for leading manufacturers
      across South Africa.
    </p>
  </div>

  <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

    {[
      { icon: "🚘", name: "Toyota" },
      { icon: "🚗", name: "Volkswagen" },
      { icon: "🛻", name: "Ford" },
      { icon: "🏁", name: "BMW" },
      { icon: "⭐", name: "Mercedes-Benz" },
      { icon: "🚙", name: "Nissan" },
      { icon: "⚡", name: "Hyundai" },
      { icon: "🔥", name: "Kia" },
    ].map((brand) => (
      <div
        key={brand.name}
        className="group rounded-3xl border border-yellow-500/20 bg-gradient-to-b from-zinc-900/90 to-black p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(250,204,21,0.15)]"
      >
        <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">
          {brand.icon}
        </div>

        <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-yellow-400">
          {brand.name}
        </h3>

        <div className="mx-auto mt-4 h-px w-10 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      </div>
    ))}

  </div>
{/* OUTSIDE GRID */}
<div className="mt-16 text-center">
  <p className="text-zinc-500 uppercase tracking-[0.35em] text-xs">
    And Many More Brands Available On Request
  </p>
</div>
</section>
    </div>
    </div>
  );
}