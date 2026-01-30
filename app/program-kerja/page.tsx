import { supabase } from "../../src/lib/supabase";
import { Users, Target, Goal, Shield, Award, ChevronDown, ChevronUp } from 'lucide-react';
import Image from "next/image";
import Link from "next/link"

export default async function ProgramKerjaPage() {
  const { data: programs } = await supabase
    .from("program_kerja")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      {/* HEADER PROGRAM KERJA */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 border-b border-yellow-500/30 mt-6">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050b18] to-black" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(#facc15 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
         <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/50">
                <Goal size={48} className="text-black" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
            Program Kerja{" "}
            <span className="text-yellow-500">Demustar</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg pt-5">
            Kumpulan program kerja Dewan Musyawarah Taruna sebagai
            bentuk implementasi fungsi aspiratif, kolaboratif, dan
            solutif.
          </p>
          </div>
        </div>
      </section>

      {/* GRID CARD */}
      <section className="min-h-screen bg-black text-white px-6 pb-24 pt-12">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {programs?.map((p) => (
        <Link
          key={p.id}
          href={`/program-kerja/${p.slug}`}
          className="group relative block rounded-2xl overflow-hidden 
                    bg-zinc-900 border border-yellow-600/30 
                    hover:border-yellow-500 transition"
        >
          {/* IMAGE */}
          <div className="relative h-56 overflow-hidden">
            <Image
              src={p.image_url}
              alt={p.nama_program}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 
                            group-hover:opacity-100 transition flex items-center justify-center">
              <span className="px-5 py-2 rounded-full 
                              bg-yellow-500 text-black font-semibold 
                              shadow-lg shadow-yellow-500/40">
                Lihat Detail →
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-6 space-y-3">
            <h2 className="text-xl font-bold text-yellow-400">
              {p.nama_program}
            </h2>

            <p className="text-gray-300 text-sm line-clamp-3">
              {p.deskripsi_program}
            </p>

            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-gray-400">
                PJ: {p.penanggung_jawab}
              </span>

              <span className="text-xs px-3 py-1 rounded-full 
                              bg-yellow-500/10 text-yellow-400">
                Aktif
              </span>
            </div>
          </div>
        </Link>
      ))}


      </div>
      </section>


    </>
  );
}
