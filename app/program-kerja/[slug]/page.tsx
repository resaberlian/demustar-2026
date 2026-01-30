import { supabase } from "@/src/lib/supabase";
import Image from "next/image";

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // 🔥 INI KUNCINYA

  const { data: program } = await supabase
    .from("program_kerja")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!program) {
    return (
      <div className="min-h-screen bg-black text-red-500 p-10">
        Program tidak ditemukan <br />
        Slug: {slug}
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white pt-28 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <div>
          <h1 className="text-4xl font-bold text-yellow-400">
            {program.nama_program}
          </h1>
          <p className="text-gray-300 mt-3">
            {program.deskripsi_program}
          </p>
        </div>

        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-yellow-600/30">
          <Image
            src={program.image_url}
            alt={program.nama_program}
            fill
            className="object-cover"
          />
        </div>

        <div className="text-gray-300 space-y-2">
          <p><b>PJ:</b> {program.penanggung_jawab}</p>
          <p><b>Tujuan:</b></p>
          <p>{program.tujuan}</p>
        </div>
          {/* DOKUMENTASI */}
{Array.isArray(program.dokumentasi) && program.dokumentasi.length > 0 && (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-yellow-400">
      Dokumentasi Kegiatan
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {program.dokumentasi.map((img: string, i: number) => (
        <div
          key={i}
          className="relative h-64 rounded-xl overflow-hidden border border-yellow-600/30 group"
        >
          <Image
            src={img}
            alt={`Dokumentasi ${i + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition"
          />
        </div>
      ))}
    </div>
  </div>
)}

      </div>
    </section>
  );
}
