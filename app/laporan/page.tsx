"use client"

import { supabase } from "../../src/lib/supabase";
import { ClipboardMinus } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
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
            // Tambah data baru di awal array
            setLaporan((prev) => [payload.new as Laporan, ...prev]);
          } else if (payload.eventType === "UPDATE") {
            // Update data yang sudah ada
            setLaporan((prev) =>
              prev.map((item) =>
                item.id === payload.new.id ? (payload.new as Laporan) : item
              )
            );
          } else if (payload.eventType === "DELETE") {
            // Hapus data
            setLaporan((prev) =>
              prev.filter((item) => item.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    // Cleanup saat component unmount
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
      {/* HEADER PROGRAM KERJA */}
<section className="relative overflow-hidden py-10 md:py-24 border-b border-yellow-500/20">

  {/* BACKGROUND */}
  <div className="absolute inset-0">
    <Image
      src="/assets/laporankerja.jpeg"
      alt="Background"
      fill
      priority
      className="object-cover"
    />

    {/* Blur overlay untuk effect glassmorphism */}
    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

    {/* Gradient overlay lebih subtle */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 container mx-auto px-6">

    <div className="max-w-4xl mx-auto">

      {/* MAIN PANEL - Lebih Transparan seperti referensi */}
      <div className="
        relative
        bg-black/30
        backdrop-blur-md
        border border-white/20
        rounded-3xl
        px-8 md:px-10 
        py-12 md:py-14
        shadow-2xl shadow-black/50
      ">

        {/* Glow effect di belakang panel */}
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/0 via-yellow-500/10 to-yellow-600/0 rounded-3xl blur-xl -z-10"></div>

        {/* BADGE */}
        <div className="text-center mb-6">
          <span className="
            inline-block
            px-5 py-2
            bg-yellow-500/20
            border border-yellow-400/50
            text-yellow-400
            rounded-full
            text-sm font-semibold
            tracking-wide
            backdrop-blur-sm
          ">
           LAPORAN KERJA
          </span>
        </div>

        {/* TITLE */}
        <h1 className="
          text-center
          text-4xl md:text-6xl
          font-extrabold
          leading-tight
          mb-6
        ">
          <span className="text-white drop-shadow-lg">Laporan</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Demustar
          </span>
        </h1>

        {/* DIVIDER */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-yellow-500"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-yellow-500"></div>
        </div>

        {/* TAGLINE */}
        <div className="mt-8 text-center">
          <span className="
            inline-flex items-center gap-2
            px-6 py-3
            bg-yellow-500/15
            border border-yellow-400/40
            rounded-full
            text-yellow-400
            font-semibold
            text-sm
            backdrop-blur-sm
          ">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Aspiratif • Kolaboratif • Solutif
          </span>
        </div>

      </div>

    </div>
  </div>
</section>
      <div className="min-h-screen bg-black text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {laporan.length === 0 ? (
            <div className="col-span-2 text-center py-20">
              <p className="text-gray-400 text-lg">Belum ada laporan tersedia</p>
            </div>
          ) : (
            laporan.map((l) => (
              <div
                key={l.id}
                className="group relative rounded-2xl border border-yellow-600/40 
                           bg-gradient-to-b from-zinc-900/80 to-black/80 
                           overflow-hidden hover:shadow-[0_0_40px_rgba(234,179,8,0.25)] 
                           transition-all duration-300"
              >
                {/* Header */}
                <div className="p-6 border-b border-yellow-600/30">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-yellow-400">
                      {l.judul}
                    </h2>
                    <span className="text-xs px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
                      Laporan
                    </span>
                  </div>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    {l.deskripsi}
                  </p>
                </div>

                {/* PDF Preview */}
                <div className="p-6">
                  <div className="relative rounded-xl overflow-hidden border border-yellow-600/20">
                    <iframe
                      src={l.pdf_url}
                      className="w-full h-[380px]"
                      title={`Preview ${l.judul}`}
                    />
                  </div>

                  {/* Footer */}
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      Preview dokumen
                    </span>

                    
                      <a href={l.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 
                                 bg-yellow-500 text-black 
                                 px-4 py-2 rounded-lg text-sm font-semibold
                                 hover:bg-yellow-400 transition"
                    >
                      Buka PDF Full
                      <span>↗</span>
                    </a>
                  </div>
                </div>

                {/* Glow hover layer */}
                <div className="absolute inset-0 pointer-events-none 
                                opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-0 bg-gradient-to-tr 
                                  from-yellow-500/10 via-transparent to-transparent" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}