"use client"

import { supabase } from "../../src/lib/supabase";
import { useEffect, useState } from "react";
import { AnimatedLaporanHeader, AnimatedLaporanCards } from './AnimatedLaporanSections';

interface Laporan {
  id: number;
  judul: string;
  deskripsi: string;
  pdf_url: string;
  created_at: string;
}

export default function LaporanPage() {
  const [laporan, setLaporan] = useState<Laporan[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data
  const fetchLaporan = async () => {
    const { data, error } = await supabase
      .from("laporan")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching laporan:", error);
    } else {
      setLaporan(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    // Fetch pertama kali
    fetchLaporan();

    // Subscribe ke realtime updates
    const channel = supabase
      .channel("public-laporan-realtime")
      .on(
        "postgres_changes",
        {
          event: "*", // INSERT, UPDATE, DELETE
          schema: "public",
          table: "laporan",
        },
        (payload) => {
          console.log("🔄 Realtime update detected:", payload);

          if (payload.eventType === "INSERT") {
            setLaporan((prev) => [payload.new as Laporan, ...prev]);
          } else if (payload.eventType === "UPDATE") {
            setLaporan((prev) =>
              prev.map((item) =>
                item.id === payload.new.id ? (payload.new as Laporan) : item
              )
            );
          } else if (payload.eventType === "DELETE") {
            setLaporan((prev) =>
              prev.filter((item) => item.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Memuat laporan...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header Section dengan Animasi */}
      <AnimatedLaporanHeader />

      {/* Cards Section dengan Animasi */}
      <AnimatedLaporanCards laporan={laporan} />
    </>
  );
}