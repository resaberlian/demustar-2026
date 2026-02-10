export const dynamic = 'force-dynamic'

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
 <section className="relative overflow-hidden py-10 md:py-24 border-b border-yellow-500/20">
 
  {/* BACKGROUND */}
  <div className="absolute inset-0">
    <Image
      src="/assets/programkerja.jpeg"
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

      {/* MAIN PANEL - Lebih Transparan */}
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
            PROGRAM KERJA
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
          <span className="text-white drop-shadow-lg">Program Kerja</span>{" "}
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
