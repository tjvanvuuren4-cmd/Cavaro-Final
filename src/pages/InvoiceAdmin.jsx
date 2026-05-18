import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function InvoiceAdmin() {
  const [invoices, setInvoices] = useState([]);
  const [form, setForm] = useState({
    client_email: "",
    project_id: "",
    invoice_number: "",
    title: "",
    amount: "",
    status: "Unpaid",
    due_date: "",
    notes: "",
  });

  const fetchInvoices = async () => {
    const { data, error } = await supabase
      .from("invoices")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setInvoices(data || []);
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const createInvoice = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("invoices").insert([
      {
        ...form,
        project_id: form.project_id ? Number(form.project_id) : null,
        amount: Number(form.amount),
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    setForm({
      client_email: "",
      project_id: "",
      invoice_number: "",
      title: "",
      amount: "",
      status: "Unpaid",
      due_date: "",
      notes: "",
    });

    fetchInvoices();
  };

  const updateInvoice = async (id, field, value) => {
    const cleanValue =
      field === "amount"
        ? Number(value)
        : field === "project_id"
        ? value
          ? Number(value)
          : null
        : value;

    const { error } = await supabase
      .from("invoices")
      .update({ [field]: cleanValue })
      .eq("id", id);

    if (!error) {
      setInvoices((current) =>
        current.map((invoice) =>
          invoice.id === id ? { ...invoice, [field]: cleanValue } : invoice
        )
      );
    }
  };

  return (
    <section className="min-h-screen bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
          Cavaro Admin
        </p>

        <h1 className="mb-10 text-4xl font-semibold md:text-6xl">
          Invoice Manager
        </h1>

        <form
          onSubmit={createInvoice}
          className="mb-12 grid gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:grid-cols-2"
        >
          <input
            name="client_email"
            value={form.client_email}
            onChange={handleChange}
            placeholder="Client Email"
            required
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400"
          />

          <input
            name="project_id"
            value={form.project_id}
            onChange={handleChange}
            placeholder="Project ID"
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400"
          />

          <input
            name="invoice_number"
            value={form.invoice_number}
            onChange={handleChange}
            placeholder="Invoice Number e.g. CAV-001"
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400"
          />

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Invoice Title"
            required
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400"
          />

          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Amount"
            required
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400"
          />

          <input
            type="date"
            name="due_date"
            value={form.due_date}
            onChange={handleChange}
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400"
          >
            <option>Unpaid</option>
            <option>Paid</option>
            <option>Overdue</option>
            <option>Cancelled</option>
          </select>

          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Invoice Notes"
            className="min-h-[120px] rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400 md:col-span-2"
          />

          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-8 py-4 font-semibold text-black transition hover:scale-[1.02] md:col-span-2"
          >
            Create Invoice
          </button>
        </form>

        <div className="grid gap-6">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <div className="mb-5 grid gap-4 md:grid-cols-3">
                <input
                  value={invoice.invoice_number || ""}
                  onChange={(e) =>
                    updateInvoice(invoice.id, "invoice_number", e.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-black px-5 py-4 text-yellow-400 outline-none"
                />

                <input
                  value={invoice.title || ""}
                  onChange={(e) =>
                    updateInvoice(invoice.id, "title", e.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none"
                />

                <input
                  type="number"
                  value={invoice.amount || ""}
                  onChange={(e) =>
                    updateInvoice(invoice.id, "amount", e.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none"
                />

                <input
                  value={invoice.client_email || ""}
                  onChange={(e) =>
                    updateInvoice(invoice.id, "client_email", e.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none"
                />

                <select
                  value={invoice.status || "Unpaid"}
                  onChange={(e) =>
                    updateInvoice(invoice.id, "status", e.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none"
                >
                  <option>Unpaid</option>
                  <option>Paid</option>
                  <option>Overdue</option>
                  <option>Cancelled</option>
                </select>

                <input
                  type="date"
                  value={invoice.due_date || ""}
                  onChange={(e) =>
                    updateInvoice(invoice.id, "due_date", e.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none"
                />

                <textarea
                  value={invoice.notes || ""}
                  onChange={(e) =>
                    updateInvoice(invoice.id, "notes", e.target.value)
                  }
                  className="min-h-[100px] rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none md:col-span-3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}