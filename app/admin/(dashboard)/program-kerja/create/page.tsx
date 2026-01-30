"use client";

import { supabase } from "../../../../../src/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function CreateProgramKerja() {
  const router = useRouter();
  const [cover, setCover] = useState<File | null>(null);
  const [dokumentasi, setDokumentasi] = useState<File[]>([]); // ← Multiple files
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [form, setForm] = useState({
    nama_program: "",
    deskripsi_program: "",
    tujuan_program: "",
    penanggung_jawab: "",
    status: "draft",
    waktu_pelaksanaan: "",
  });

  // Upload single image (untuk cover)
  const uploadCover = async (file: File) => {
    const ext = file.name.split(".").pop();
    const fileName = `cover-${Date.now()}.${ext}`;
    const filePath = `cover/${fileName}`;

    const { error } = await supabase.storage
      .from("program-images")
      .upload(filePath, file);

    if (error) throw error;

    const { data } = supabase.storage
      .from("program-images")
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  // Upload multiple images (untuk dokumentasi)
  const uploadDokumentasi = async (files: File[]) => {
    const urls: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const ext = file.name.split(".").pop();
      const fileName = `dokumentasi-${Date.now()}-${i}.${ext}`;
      const filePath = `dokumentasi/${fileName}`;

      const { error } = await supabase.storage
        .from("program-images")
        .upload(filePath, file);

      if (error) {
        console.error("Upload error:", error);
        throw error;
      }

      const { data } = supabase.storage
        .from("program-images")
        .getPublicUrl(filePath);

      urls.push(data.publicUrl);
      
      // Update progress
      setUploadProgress(Math.round(((i + 1) / files.length) * 100));
    }

    return urls;
  };

  // Handle multiple file selection
  const handleDokumentasiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setDokumentasi(Array.from(files));
    }
  };

  // Remove selected dokumentasi
  const removeDokumentasi = (index: number) => {
    setDokumentasi(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setUploadProgress(0);

    try {
      let coverUrl = null;
      let dokumentasiUrls: string[] = [];

      // Upload cover
      if (cover) {
        console.log("Uploading cover...");
        coverUrl = await uploadCover(cover);
      }

      // Upload dokumentasi (multiple)
      if (dokumentasi.length > 0) {
        console.log("Uploading dokumentasi...");
        dokumentasiUrls = await uploadDokumentasi(dokumentasi);
      }

      const dataToInsert = {
        nama_program: form.nama_program,
        deskripsi_program: form.deskripsi_program,
        tujuan_program: form.tujuan_program,
        penanggung_jawab: form.penanggung_jawab,
        status: form.status,
        waktu_pelaksanaan: new Date(form.waktu_pelaksanaan).toISOString(),
        image_url: coverUrl,
        dokumentasi: dokumentasiUrls, // ← Array of URLs
      };

      console.log("Inserting data:", dataToInsert);

      const { data, error } = await supabase
        .from("program_kerja")
        .insert(dataToInsert)
        .select();

      if (error) throw error;

      console.log("Insert success:", data);
      alert("Program kerja berhasil disimpan");
      router.push("/admin/program-kerja");
    } catch (err: any) {
      console.error("Full error:", err);
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-3xl text-white space-y-6">
      <h1 className="text-2xl font-bold">Tambah Program Kerja</h1>

      {/* Cover Image */}
      <div className="space-y-2">
        <label className="block font-semibold">Cover Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setCover(e.target.files?.[0] || null)}
          className="w-full p-2 bg-black border border-gray-700 rounded"
        />
        {cover && (
          <div className="relative w-full h-48 rounded border border-yellow-600/30">
            <Image
              src={URL.createObjectURL(cover)}
              alt="Preview"
              fill
              className="object-cover rounded"
            />
          </div>
        )}
      </div>

      {/* Form Fields */}
      <input
        type="text"
        placeholder="Nama Program"
        value={form.nama_program}
        onChange={(e) => setForm({ ...form, nama_program: e.target.value })}
        className="w-full p-2 bg-black border border-gray-700 rounded"
        required
      />

      <textarea
        placeholder="Deskripsi Program"
        value={form.deskripsi_program}
        onChange={(e) => setForm({ ...form, deskripsi_program: e.target.value })}
        className="w-full p-2 bg-black border border-gray-700 rounded"
        rows={4}
        required
      />

      <textarea
        placeholder="Tujuan Program"
        value={form.tujuan_program}
        onChange={(e) => setForm({ ...form, tujuan_program: e.target.value })}
        className="w-full p-2 bg-black border border-gray-700 rounded"
        rows={4}
        required
      />

      <input
        type="text"
        placeholder="Penanggung Jawab"
        value={form.penanggung_jawab}
        onChange={(e) => setForm({ ...form, penanggung_jawab: e.target.value })}
        className="w-full p-2 bg-black border border-gray-700 rounded"
        required
      />

      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
        className="w-full p-2 bg-black border border-gray-700 rounded"
      >
        <option value="draft">Draft</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>

      <input
        type="datetime-local"
        value={form.waktu_pelaksanaan}
        onChange={(e) => setForm({ ...form, waktu_pelaksanaan: e.target.value })}
        className="w-full p-2 bg-black border border-gray-700 rounded"
        required
      />

      {/* Dokumentasi - Multiple Images */}
      <div className="space-y-3">
        <label className="block font-semibold">
          Dokumentasi (Multiple Images)
        </label>
        <input
          type="file"
          accept="image/*"
          multiple // ← Allow multiple files
          onChange={handleDokumentasiChange}
          className="w-full p-2 bg-black border border-gray-700 rounded"
        />
        
        {/* Preview Selected Images */}
        {dokumentasi.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm text-gray-400">
              {dokumentasi.length} gambar dipilih
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {dokumentasi.map((file, index) => (
                <div key={index} className="relative group">
                  <div className="relative w-full h-32 rounded border border-yellow-600/30">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={`Dokumentasi ${index + 1}`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeDokumentasi(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                  >
                    ×
                  </button>
                  <p className="text-xs text-gray-400 mt-1 truncate">
                    {file.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Upload Progress */}
      {loading && uploadProgress > 0 && (
        <div className="space-y-2">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-yellow-500 h-2 rounded-full transition-all"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
          <p className="text-sm text-gray-400 text-center">
            Uploading... {uploadProgress}%
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-yellow-500 text-black px-4 py-3 rounded font-bold hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Menyimpan..." : "Simpan Program Kerja"}
      </button>
    </form>
  );
}