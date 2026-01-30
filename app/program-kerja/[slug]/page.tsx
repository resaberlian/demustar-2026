import { supabase } from "@/src/lib/supabase";
import Image from "next/image";

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: program, error } = await supabase
    .from("program_kerja")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !program) {
    return (
      <div className="min-h-screen bg-black text-red-500 p-10">
        Program tidak ditemukan <br />
        Slug: {slug}
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white pt-28 px-6">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ================= JUDUL ================= */}
        <h1 className="text-4xl font-bold text-yellow-400">
          {program.nama_program}
        </h1>

        {/* ================= COVER IMAGE ================= */}
        {program.image_url && (
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-yellow-600/30">
            <Image
              src={program.image_url}
              alt={program.nama_program}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* ================= DESKRIPSI ================= */}
        {program.deskripsi_program && (
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-yellow-300">
              Deskripsi Program
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {program.deskripsi_program}
            </p>
          </div>
        )}

        {/* ================= TUJUAN ================= */}
        {program.tujuan_program && (
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-yellow-300">
              Tujuan Program
            </h2>

            {/* kalau tujuan berupa TEXT */}
            <p className="text-gray-300 leading-relaxed">
              {program.tujuan_program}
            </p>

            {/* 
            kalau ternyata tujuan ARRAY, pakai ini:
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {program.tujuan_program.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            */}
          </div>
        )}

        {/* ================= PENANGGUNG JAWAB ================= */}
        {program.penanggung_jawab && (
          <div className="text-gray-300">
            <span className="font-semibold text-yellow-300">
              Penanggung Jawab:
            </span>{" "}
            {program.penanggung_jawab}
          </div>
        )}

        {/* ================= DOKUMENTASI ================= */}
        {Array.isArray(program.dokumentasi) &&
          program.dokumentasi.length > 0 && (
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
