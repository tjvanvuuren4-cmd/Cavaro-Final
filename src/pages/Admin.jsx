import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Mail, Phone, Briefcase, Car, FileText, Image } from "lucide-react";

import GalleryAdmin from "./GalleryAdmin";
import InvoiceAdmin from "./InvoiceAdmin";
import PortfolioAdmin from "./PortfolioAdmin";
import ProductAdmin from "./ProductAdmin";

export default function Admin() {
  const [leads, setLeads] = useState([]);
  const [autoRequests, setAutoRequests] = useState([]);
  const [activeTab, setActiveTab] = useState("quotes");

  const updateLeadStatus = async (id, status) => {
    const { error } = await supabase
      .from("quote_requests")
      .update({ status })
      .eq("id", id);

    if (!error) {
      setLeads((current) =>
        current.map((lead) => (lead.id === id ? { ...lead, status } : lead))
      );
    }
  };

  const updateAutoStatus = async (id, status) => {
    const { error } = await supabase
      .from("auto_requests")
      .update({ status })
      .eq("id", id);

    if (!error) {
      setAutoRequests((current) =>
        current.map((item) => (item.id === id ? { ...item, status } : item))
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

    const fetchAutoRequests = async () => {
      const { data, error } = await supabase
        .from("auto_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) setAutoRequests(data || []);
    };

    fetchLeads();
    fetchAutoRequests();
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
            ["auto", "Auto Requests"],
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

        {activeTab === "auto" && (
          <div className="grid gap-6">
            {autoRequests.map((request) => (
              <div
                key={request.id}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
              >
                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-yellow-400">
                      {request.name}
                    </h2>

                    <p className="text-zinc-400">
                      {request.make} {request.model} {request.year}
                    </p>
                  </div>

                  <select
                    value={request.status || "new"}
                    onChange={(e) => updateAutoStatus(request.id, e.target.value)}
                    className="rounded-full border border-yellow-500/30 bg-black px-4 py-2 text-xs uppercase tracking-[0.2em] text-yellow-400 outline-none"
                  >
                    <option value="new">New</option>
                    <option value="sourcing">Sourcing</option>
                    <option value="quoted">Quoted</option>
                    <option value="awaiting_payment">Awaiting Payment</option>
                    <option value="ordered">Ordered</option>
                    <option value="delivered">Delivered</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <p className="flex items-center gap-3 text-zinc-300">
                    <Phone className="h-4 w-4 text-yellow-400" />
                    {request.whatsapp}
                  </p>

                  <p className="flex items-center gap-3 text-zinc-300">
                    <Car className="h-4 w-4 text-yellow-400" />
                    {request.engine || "Engine not provided"}
                  </p>

                  <p className="text-zinc-400">
                    {new Date(request.created_at).toLocaleDateString()}
                  </p>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.25em] text-yellow-400">
                    Request Details
                  </p>

                  <p className="leading-7 text-zinc-300">
                    {request.part_needed}
                  </p>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {request.part_photo_url && (
                    <a
                      href={request.part_photo_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-yellow-500/30 px-4 py-3 text-sm text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                    >
                      <Image className="h-4 w-4" />
                      Part Photo
                    </a>
                  )}

                  {request.vin_disc_url && (
                    <a
                      href={request.vin_disc_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-yellow-500/30 px-4 py-3 text-sm text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                    >
                      <FileText className="h-4 w-4" />
                      VIN Disc
                    </a>
                  )}

                  {request.quote_url && (
                    <a
                      href={request.quote_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-yellow-500/30 px-4 py-3 text-sm text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                    >
                      <FileText className="h-4 w-4" />
                      Existing Quote
                    </a>
                  )}
                </div>
              </div>
            ))}

            {autoRequests.length === 0 && (
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center text-zinc-400">
                No auto requests yet.
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