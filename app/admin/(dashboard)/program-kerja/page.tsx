"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../../../src/lib/supabase";

type ProgramKerja = {
  id: number;
  nama_program: string;
  status: string | null;
  penanggung_jawab: string | null;
};

export default function ProgramKerjaAdminPage() {
  const [data, setData] = useState<ProgramKerja[]>([]);

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("program_kerja")
      .select("id,nama_program,status,penanggung_jawab")
      .order("created_at", { ascending: false });

    if (!error) setData(data ?? []);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Hapus program kerja ini?")) return;
    await supabase.from("program_kerja").delete().eq("id", id);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-8 text-white">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Program Kerja</h1>
        <Link
          href="/admin/program-kerja/create"
          className="bg-yellow-500 text-black px-4 py-2 rounded"
        >
          + Tambah Program
        </Link>
      </div>

      <div className="space-y-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-gray-700 rounded p-4 flex justify-between"
          >
            <div>
              <h3 className="font-semibold">{item.nama_program}</h3>
              <p className="text-gray-400 text-sm">
                PJ: {item.penanggung_jawab ?? "-"} • Status:{" "}
                {item.status ?? "-"}
              </p>
            </div>

            <div className="flex gap-4">
               {/* Tombol Edit */}
 
             
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-400"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
