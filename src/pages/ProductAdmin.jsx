import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Plus, Trash2, Save } from "lucide-react";

const emptyProduct = {
  title: "",
  short_description: "",
  full_description: "",
  upfront_price: "",
  monthly_price: "",
  duration: "",
  category: "",
  image_url: "",
  is_active: true,
};

export default function ProductAdmin() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyProduct);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setProducts(data || []);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const saveProduct = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      upfront_price: form.upfront_price ? Number(form.upfront_price) : null,
      monthly_price: form.monthly_price ? Number(form.monthly_price) : null,
    };

    if (editingId) {
      await supabase.from("products").update(payload).eq("id", editingId);
    } else {
      await supabase.from("products").insert([payload]);
    }

    setForm(emptyProduct);
    setEditingId(null);
    fetchProducts();
  };

  const editProduct = (product) => {
    setEditingId(product.id);
    setForm({
      title: product.title || "",
      short_description: product.short_description || "",
      full_description: product.full_description || "",
      upfront_price: product.upfront_price || "",
      monthly_price: product.monthly_price || "",
      duration: product.duration || "",
      category: product.category || "",
      image_url: product.image_url || "",
      is_active: product.is_active ?? true,
    });
  };

  const deleteProduct = async (id) => {
    await supabase.from("products").delete().eq("id", id);
    fetchProducts();
  };

  const toggleActive = async (product) => {
    await supabase
      .from("products")
      .update({ is_active: !product.is_active })
      .eq("id", product.id);

    fetchProducts();
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="mb-6 text-3xl font-semibold text-yellow-400">
        Product Admin
      </h2>

      <form onSubmit={saveProduct} className="mb-10 grid gap-4 md:grid-cols-2">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Product title"
          className="rounded-xl border border-white/10 bg-black p-3 text-white outline-none"
          required
        />

        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="rounded-xl border border-white/10 bg-black p-3 text-white outline-none"
        />

        <input
          name="upfront_price"
          value={form.upfront_price}
          onChange={handleChange}
          placeholder="Upfront price"
          type="number"
          className="rounded-xl border border-white/10 bg-black p-3 text-white outline-none"
        />

        <input
          name="monthly_price"
          value={form.monthly_price}
          onChange={handleChange}
          placeholder="Monthly price"
          type="number"
          className="rounded-xl border border-white/10 bg-black p-3 text-white outline-none"
        />

        <input
          name="duration"
          value={form.duration}
          onChange={handleChange}
          placeholder="Duration e.g. 12 weeks"
          className="rounded-xl border border-white/10 bg-black p-3 text-white outline-none"
        />

        <input
          name="image_url"
          value={form.image_url}
          onChange={handleChange}
          placeholder="Image URL"
          className="rounded-xl border border-white/10 bg-black p-3 text-white outline-none"
        />

        <textarea
          name="short_description"
          value={form.short_description}
          onChange={handleChange}
          placeholder="Short description"
          className="md:col-span-2 rounded-xl border border-white/10 bg-black p-3 text-white outline-none"
        />

        <textarea
          name="full_description"
          value={form.full_description}
          onChange={handleChange}
          placeholder="Full description"
          className="md:col-span-2 rounded-xl border border-white/10 bg-black p-3 text-white outline-none"
        />

        <label className="flex items-center gap-3 text-zinc-300">
          <input
            type="checkbox"
            name="is_active"
            checked={form.is_active}
            onChange={handleChange}
          />
          Active on website
        </label>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-black"
        >
          {editingId ? <Save size={18} /> : <Plus size={18} />}
          {editingId ? "Update Product" : "Add Product"}
        </button>
      </form>

      <div className="grid gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl border border-white/10 bg-black p-5"
          >
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {product.title}
                </h3>
                <p className="text-sm text-zinc-400">
                  {product.category} • R{product.upfront_price}
                  {product.monthly_price
                    ? ` • R${product.monthly_price}/month`
                    : ""}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => toggleActive(product)}
                  className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] ${
                    product.is_active
                      ? "bg-green-500 text-black"
                      : "bg-zinc-700 text-white"
                  }`}
                >
                  {product.is_active ? "Active" : "Hidden"}
                </button>

                <button
                  onClick={() => editProduct(product)}
                  className="rounded-full border border-yellow-400 px-4 py-2 text-xs uppercase tracking-[0.2em] text-yellow-400"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteProduct(product.id)}
                  className="rounded-full border border-red-500 px-4 py-2 text-xs uppercase tracking-[0.2em] text-red-400"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {products.length === 0 && (
          <p className="text-center text-zinc-500">No products yet.</p>
        )}
      </div>
    </div>
  );
}