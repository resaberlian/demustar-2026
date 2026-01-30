"use client";

import { supabase } from "../../../../../../../src/lib/supabase";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateDokumentasi() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    file_name: "",
    file_url: "",
    file_type: "",
    file_size: "",
    caption: "",
    uploaded_by: "",
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    await supabase.from("dokumentasi").insert([
      {
        ...form,
        program_id: id,
      },
    ]);

    router.push(`/admin/program-kerja/${id}/dokumentasi`);
  };

  return (
    <form onSubmit={submit} className="p-8 max-w-xl text-white space-y-4">
      <h1 className="text-xl font-bold">Tambah Dokumentasi</h1>

      {Object.entries(form).map(([key, value]) => (
        <input
          key={key}
          placeholder={key.replace("_", " ")}
          value={value}
          onChange={(e) =>
            setForm({ ...form, [key]: e.target.value })
          }
          className="w-full p-2 bg-black border border-gray-700 rounded"
        />
      ))}

      <button className="bg-yellow-500 text-black px-4 py-2 rounded">
        Simpan
      </button>
    </form>
  );
}
