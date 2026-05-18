import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProjectAdmin() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    client_email: "",
    project_title: "",
    service_type: "",
    status: "In Progress",
    progress: 0,
    next_step: "",
    notes: "",
  });

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("client_projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setProjects(data || []);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "progress" ? Number(e.target.value) : e.target.value,
    });
  };

  const createProject = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("client_projects").insert([form]);

    if (error) {
      alert(error.message);
      return;
    }

    setForm({
      client_email: "",
      project_title: "",
      service_type: "",
      status: "In Progress",
      progress: 0,
      next_step: "",
      notes: "",
    });

    fetchProjects();
  };

  const updateProject = async (id, field, value) => {
    const cleanValue = field === "progress" ? Number(value) : value;

    const { error } = await supabase
      .from("client_projects")
      .update({ [field]: cleanValue })
      .eq("id", id);

    if (!error) {
      setProjects((current) =>
        current.map((project) =>
          project.id === id ? { ...project, [field]: cleanValue } : project
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
          Project Manager
        </h1>

        <form
          onSubmit={createProject}
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
            name="project_title"
            value={form.project_title}
            onChange={handleChange}
            placeholder="Project Title"
            required
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400"
          />

          <input
            name="service_type"
            value={form.service_type}
            onChange={handleChange}
            placeholder="Service Type"
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400"
          >
            <option>Planning</option>
            <option>In Progress</option>
            <option>Awaiting Content</option>
            <option>Review</option>
            <option>Completed</option>
            <option>Paused</option>
          </select>

          <input
            type="number"
            name="progress"
            min="0"
            max="100"
            value={form.progress}
            onChange={handleChange}
            placeholder="Progress %"
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400"
          />

          <input
            name="next_step"
            value={form.next_step}
            onChange={handleChange}
            placeholder="Next Step"
            className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400"
          />

          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Project Notes"
            className="min-h-[120px] rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400 md:col-span-2"
          />

          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-8 py-4 font-semibold text-black transition hover:scale-[1.02] md:col-span-2"
          >
            Create Client Project
          </button>
        </form>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <div className="mb-5 grid gap-4 md:grid-cols-2">
                <input
                  value={project.project_title || ""}
                  onChange={(e) =>
                    updateProject(project.id, "project_title", e.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-black px-5 py-4 text-yellow-400 outline-none"
                />

                <input
                  value={project.client_email || ""}
                  onChange={(e) =>
                    updateProject(project.id, "client_email", e.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none"
                />

                <input
                  value={project.service_type || ""}
                  onChange={(e) =>
                    updateProject(project.id, "service_type", e.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none"
                />

                <select
                  value={project.status || "In Progress"}
                  onChange={(e) =>
                    updateProject(project.id, "status", e.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none"
                >
                  <option>Planning</option>
                  <option>In Progress</option>
                  <option>Awaiting Content</option>
                  <option>Review</option>
                  <option>Completed</option>
                  <option>Paused</option>
                </select>

                <input
                  type="number"
                  min="0"
                  max="100"
                  value={project.progress || 0}
                  onChange={(e) =>
                    updateProject(project.id, "progress", e.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none"
                />

                <input
                  value={project.next_step || ""}
                  onChange={(e) =>
                    updateProject(project.id, "next_step", e.target.value)
                  }
                  className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none"
                />

                <textarea
                  value={project.notes || ""}
                  onChange={(e) =>
                    updateProject(project.id, "notes", e.target.value)
                  }
                  className="min-h-[100px] rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none md:col-span-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}