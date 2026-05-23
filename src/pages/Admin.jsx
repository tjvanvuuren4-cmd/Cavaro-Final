import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Mail, Phone, Briefcase } from "lucide-react";

import GalleryAdmin from "./GalleryAdmin";
import InvoiceAdmin from "./InvoiceAdmin";
import PortfolioAdmin from "./PortfolioAdmin";
import ProductAdmin from "./ProductAdmin";

export default function Admin() {
  const [leads, setLeads] = useState([]);
  const [activeTab, setActiveTab] = useState("quotes");
  const updateLeadStatus = async (id, status) => {
  const { error } = await supabase
    .from("quote_requests")
    .update({ status })
    .eq("id", id);

  if (!error) {
    setLeads((current) =>
      current.map((lead) =>
        lead.id === id ? { ...lead, status } : lead
      )
    );
  }
};

  useEffect(() => {
    const fetchLeads = async () => {
      const { data, error } = await supabase
        .from("quote_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) setLeads(data || []);
    };

    fetchLeads();
  }, []);

  return (
  <section className="min-h-screen bg-black px-6 py-28 text-white">
    <div className="mx-auto max-w-7xl">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
        Cavaro Admin
      </p>

      <h1 className="mb-8 text-4xl font-semibold md:text-6xl">
        Master Admin
      </h1>

      <div className="mb-10 flex flex-wrap gap-3">
        {[
          ["quotes", "Quote Requests"],
          ["gallery", "Gallery"],
          ["invoices", "Invoices"],
          ["portfolio", "Portfolio"],
          ["products", "Products"],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] ${
              activeTab === key
                ? "border-yellow-400 bg-yellow-400 text-black"
                : "border-white/10 bg-white/[0.03] text-zinc-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {activeTab === "quotes" && (
        <div className="grid gap-6">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-yellow-400">
                    {lead.name}
                  </h2>
                  <p className="text-zinc-400">{lead.business}</p>
                </div>

                <select
                  value={lead.status || "New"}
                  onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                  className="rounded-full border border-yellow-500/30 bg-black px-4 py-2 text-xs uppercase tracking-[0.2em] text-yellow-400 outline-none"
                >
                  <option>New</option>
                  <option>Contacted</option>
                  <option>In Progress</option>
                  <option>Quoted</option>
                  <option>Closed</option>
                  <option>Lost</option>
                </select>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <p className="flex items-center gap-3 text-zinc-300">
                  <Mail className="h-4 w-4 text-yellow-400" />
                  {lead.email}
                </p>

                <p className="flex items-center gap-3 text-zinc-300">
                  <Phone className="h-4 w-4 text-yellow-400" />
                  {lead.phone}
                </p>

                <p className="flex items-center gap-3 text-zinc-300">
                  <Briefcase className="h-4 w-4 text-yellow-400" />
                  {lead.service}
                </p>
              </div>

              <p className="mt-5 text-sm text-zinc-400">
                Budget: {lead.budget}
              </p>

              <p className="mt-4 leading-7 text-zinc-300">
                {lead.description}
              </p>
            </div>
          ))}

          {leads.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center text-zinc-400">
              No quote requests yet.
            </div>
          )}
        </div>
      )}

      {activeTab === "gallery" && <GalleryAdmin />}
      {activeTab === "invoices" && <InvoiceAdmin />}
      {activeTab === "portfolio" && <PortfolioAdmin />}
      {activeTab === "products" && <ProductAdmin />}
    </div>
  </section>
);
}