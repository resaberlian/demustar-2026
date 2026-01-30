"use client";

import { supabase } from "../../../../src/lib/supabase"
import { useEffect, useState } from "react";
import Link from "next/link";

type Laporan = {
  id: number;
  judul: string;
  deskripsi: string;
  pdf_url: string;
  created_at: string;
};

export default function AdminLaporanPage() {
  const [data, setData] = useState<Laporan[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLaporan = async () => {
    const { data, error } = await supabase
      .from("laporan")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setData(data || []);
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Hapus laporan ini?")) return;
    await supabase.from("laporan").delete().eq("id", id);
    fetchLaporan();
  };

  useEffect(() => {
    fetchLaporan();
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="p-8 text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Laporan</h1>
        <Link
          href="/admin/laporan/create"
          className="bg-yellow-500 text-black px-4 py-2 rounded"
        >
          + Tambah Laporan
        </Link>
      </div>

      <div className="space-y-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-gray-700 rounded p-4 flex justify-between"
          >
            <div>
              <h3 className="font-semibold">{item.judul}</h3>
              <p className="text-gray-400 text-sm">{item.deskripsi}</p>
            </div>

            <div className="flex gap-3">
              
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
