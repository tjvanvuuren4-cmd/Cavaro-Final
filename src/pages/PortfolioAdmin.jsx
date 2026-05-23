import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Trash2, Edit, Save, Upload } from "lucide-react";

const emptyForm = {
  title: "",
  category: "",
  description: "",
  image_url: "",
  website_url: "",
  featured: false,
  is_active: true,
};

export default function PortfolioAdmin() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("portfolio_projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setProjects(data || []);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}.${fileExt}`;

    const filePath = `portfolio/${fileName}`;

    const { error } = await supabase.storage
      .from("gallery-images")
      .upload(filePath, file);

    if (error) {
      alert(error.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from("gallery-images")
      .getPublicUrl(filePath);

    setForm((current) => ({
      ...current,
      image_url: data.publicUrl,
    }));

    setUploading(false);
  };

  const saveProject = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (editingId) {
      const { error } = await supabase
        .from("portfolio_projects")
        .update(form)
        .eq("id", editingId);

      setLoading(false);

      if (error) {
        alert(error.message);
        return;
      }
    } else {
      const { error } = await supabase
        .from("portfolio_projects")
        .insert([form]);

      setLoading(false);

      if (error) {
        alert(error.message);
        return;
      }
    }

    setForm(emptyForm);
    setEditingId(null);
    fetchProjects();
  };

  const editProject = (project) => {
    setEditingId(project.id);
    setForm({
      title: project.title || "",
      category: project.category || "",
      description: project.description || "",
      image_url: project.image_url || "",
      website_url: project.website_url || "",
      featured: project.featured ?? false,
      is_active: project.is_active ?? true,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteProject = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this portfolio project?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("portfolio_projects")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchProjects();
  };

  const toggleActive = async (project) => {
    const { error } = await supabase
      .from("portfolio_projects")
      .update({ is_active: !project.is_active })
      .eq("id", project.id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchProjects();
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  return (
    <section className="min-h-screen bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
          Cavaro Admin
        </p>

        <h1 className="mb-10 text-4xl font-semibold md:text-6xl">
          Portfolio Manager
        </h1>

        <form
          onSubmit={saveProject}
          className="mb-12 grid gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:grid-cols-2"
        >
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Project Title"
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
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400 md:col-span-2"
          />

          <label className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl border border-dashed border-yellow-500/40 bg-yellow-500/5 px-5 py-5 text-yellow-400 transition hover:bg-yellow-500/10 md:col-span-2">
            <Upload className="h-5 w-5" />
            {uploading ? "Uploading image..." : "Upload Image To Supabase"}
            <input
              type="file"
              accept="image/*"
              onChange={uploadImage}
              className="hidden"
            />
          </label>

          {form.image_url && (
            <img
              src={form.image_url}
              alt="Preview"
              className="h-56 w-full rounded-2xl object-cover md:col-span-2"
            />
          )}

          <input
            name="website_url"
            value={form.website_url}
            onChange={handleChange}
            placeholder="Website URL"
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400 md:col-span-2"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Project Description"
            className="min-h-[140px] rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400 md:col-span-2"
          />

          <label className="flex items-center gap-3 text-sm text-zinc-300 md:col-span-2">
            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={handleChange}
            />
            Mark as featured project
          </label>

          <label className="flex items-center gap-3 text-sm text-zinc-300 md:col-span-2">
            <input
              type="checkbox"
              name="is_active"
              checked={form.is_active}
              onChange={handleChange}
            />
            Show on website
          </label>

          <div className="flex flex-col gap-3 md:col-span-2 md:flex-row">
            <button
              type="submit"
              disabled={loading}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-8 py-4 font-semibold text-black transition hover:scale-[1.02] disabled:opacity-60"
            >
              {editingId ? <Save className="h-5 w-5" /> : null}
              {loading
                ? "Saving..."
                : editingId
                ? "Update Portfolio Project"
                : "Save Portfolio Project"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="rounded-full border border-white/10 px-8 py-4 text-zinc-300 transition hover:border-yellow-400 hover:text-yellow-400"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              {project.image_url && (
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="h-64 w-full object-cover"
                />
              )}

              <div className="p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-yellow-400">
                    {project.category}
                  </p>

                  <button
                    onClick={() => toggleActive(project)}
                    className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                      project.is_active
                        ? "bg-green-500 text-black"
                        : "bg-zinc-700 text-white"
                    }`}
                  >
                    {project.is_active ? "Active" : "Hidden"}
                  </button>
                </div>

                <h2 className="text-xl font-semibold">{project.title}</h2>

                {project.featured && (
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-yellow-400">
                    Featured
                  </p>
                )}

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                {project.website_url && (
                  <a
                    href={project.website_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm text-yellow-400 underline"
                  >
                    View Website
                  </a>
                )}

                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => editProject(project)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-yellow-400 px-4 py-2 text-sm text-yellow-400"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProject(project.id)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-red-500 px-4 py-2 text-sm text-red-400"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          {projects.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center text-zinc-400 md:col-span-3">
              No portfolio projects yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}