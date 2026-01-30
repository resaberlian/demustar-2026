import { supabase } from "../../src/lib/supabase";
import { ClipboardMinus} from 'lucide-react';
export default async function LaporanPage() {
  const { data: laporan } = await supabase
    .from("laporan")
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
                <ClipboardMinus size={48} className="text-black" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
            Laporan{" "}
            <span className="text-yellow-500">Demustar</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg pt-5">
          Kumpulan laporan kegiatan dan dokumentasi pelaksanaan program kerja Dewan Musyawarah Taruna sebagai bentuk transparansi dan pertanggungjawaban organisasi.

          </p>
          </div>
        </div>
      </section>
      <div className="min-h-screen bg-black text-white pt-32 px-6">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
    {laporan?.map((l) => (
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
            />
          </div>

          {/* Footer */}
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs text-gray-500">
              Preview dokumen
            </span>

            <a
              href={l.pdf_url}
              target="_blank"
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
    ))}
  </div>
</div>

    </>
  );
}
