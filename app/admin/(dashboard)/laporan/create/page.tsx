"use client";

import { supabase } from "../../../../../src/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateLaporan() {
  const router = useRouter();
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Upload PDF ke Supabase Storage
  const uploadPDF = async (file: File) => {
    const fileName = `laporan-${Date.now()}-${file.name}`;
    const filePath = `laporan/${fileName}`;

    console.log("Uploading PDF:", filePath);

    const { error } = await supabase.storage
      .from("program-images") // Atau buat bucket baru khusus PDF
      .upload(filePath, file, {
        contentType: "application/pdf",
      });

    if (error) {
      console.error("Upload error:", error);
      throw error;
    }

    const { data } = supabase.storage
      .from("program-images")
      .getPublicUrl(filePath);

    console.log("PDF URL:", data.publicUrl);
    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setUploadProgress(0);

    try {
      let pdfUrl = "";

      // Upload PDF jika ada
      if (pdfFile) {
        console.log("Starting PDF upload...");
        setUploadProgress(50);
        pdfUrl = await uploadPDF(pdfFile);
        setUploadProgress(100);
      } else {
        alert("Pilih file PDF terlebih dahulu");
        setLoading(false);
        return;
      }

      // Insert ke database
      const { data, error } = await supabase
        .from("laporan")
        .insert([
          {
            judul,
            deskripsi,
            pdf_url: pdfUrl,
          },
        ])
        .select();

      if (error) {
        console.error("Insert error:", error);
        throw error;
      }

      console.log("Insert success:", data);
      alert("Laporan berhasil disimpan!");
      router.push("/admin/laporan");
    } catch (err: any) {
      console.error("Full error:", err);
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  };

  return (
    <div className="p-8 text-white max-w-xl">
      <h1 className="text-xl font-bold mb-6">Tambah Laporan</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-semibold">Judul Laporan</label>
          <input
            type="text"
            placeholder="Judul"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full p-2 bg-black border border-gray-700 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Deskripsi</label>
          <textarea
            placeholder="Deskripsi laporan"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            className="w-full p-2 bg-black border border-gray-700 rounded"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Upload File PDF</label>
          <input
            type="file"
            accept="application/pdf,.pdf"
            onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
            className="w-full p-2 bg-black border border-gray-700 rounded"
            required
          />
          
          {/* Preview file yang dipilih */}
          {pdfFile && (
            <div className="mt-2 p-3 bg-gray-800 rounded border border-yellow-600/30">
              <p className="text-sm text-gray-300">
                📄 <span className="font-semibold">{pdfFile.name}</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Size: {(pdfFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          )}
        </div>

        {/* Upload Progress Bar */}
        {loading && uploadProgress > 0 && (
          <div className="space-y-2">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-yellow-500 h-2 rounded-full transition-all"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <p className="text-sm text-gray-400 text-center">
              {uploadProgress < 100 ? "Uploading PDF..." : "Processing..."}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 text-black px-4 py-3 rounded font-bold hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Menyimpan..." : "Simpan Laporan"}
        </button>
      </form>
    </div>
  );
}