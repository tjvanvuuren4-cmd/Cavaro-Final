import React, { useState } from "react";
import { Upload } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function FileUpload({ projectId, clientEmail }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);

    const filePath = `${clientEmail}/${projectId}/${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("client-files")
      .upload(filePath, file);

    if (uploadError) {
      setUploading(false);
      alert(uploadError.message);
      return;
    }

    const { data } = supabase.storage
      .from("client-files")
      .getPublicUrl(filePath);

    await supabase.from("client_files").insert([
      {
        project_id: projectId,
        client_email: clientEmail,
        file_name: file.name,
        file_url: data.publicUrl,
      },
    ]);

    setUploading(false);
    setSuccess(true);
    setFile(null);

    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-yellow-400">
        Upload Project File
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-zinc-300"
        />

        <button
          type="button"
          onClick={handleUpload}
          disabled={!file || uploading}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-700 px-6 py-3 font-semibold text-black transition hover:scale-105 disabled:opacity-60"
        >
          <Upload className="h-4 w-4" />
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {success && (
        <p className="mt-3 text-sm text-yellow-400">
          File uploaded successfully.
        </p>
      )}
    </div>
  );
}