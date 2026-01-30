'use client';
import { useState } from 'react';

export default function Pengaduan() {
  const [formData, setFormData] = useState({ nama: '', email: '', pesan: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Data pengaduan:', formData);
    alert('Pengaduan berhasil dikirim!');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Pengaduan & Aspirasi</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Nama</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={formData.nama}
            onChange={(e) => setFormData({...formData, nama: e.target.value})}
            required
          />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        <div>
          <label className="block mb-2">Pesan</label>
          <textarea
            className="w-full border p-2 rounded"
            rows={5}
            value={formData.pesan}
            onChange={(e) => setFormData({...formData, pesan: e.target.value})}
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Kirim
        </button>
      </form>
    </div>
  );
}