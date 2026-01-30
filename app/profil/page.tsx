'use client';

import React, { useState } from 'react';
import { Users, Target, BookOpen, Shield, Award, ChevronDown, ChevronUp, Star, FileText, Activity } from 'lucide-react';

export default function ProfilPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const logoMakna = [
    {
      title: "Bentuk Segi Delapan",
      image: "/segidelapan.jpeg",
      description:
        "Segi delapan melambangkan keseimbangan, keteguhan, dan arah yang jelas. Bentuk ini merepresentasikan prinsip hidup taruna yang berdiri kokoh di atas nilai disiplin, integritas, dan tanggung jawab."
    },
    {
      title: "Perisai",
      image: "/perisai.jpeg",
      description:
        "Perisai melambangkan perlindungan dan ketahanan moral. Maknanya, Dewan Musyawarah Taruna menjadi benteng nilai, etika, dan keadilan dalam menjaga kehormatan taruna dan institusi."
    },
    {
      title: "Timbangan",
      image: "timbangan.jpeg",
      description:
        "Timbangan melambangkan keadilan, objektivitas, dan keseimbangan dalam mengambil keputusan. Setiap persoalan ditimbang secara adil, tanpa keberpihakan, menjunjung tinggi kebenaran dan nurani."
    },
    {
      title: "Padi",
      image: "padi.jpeg",
      description:
        "Padi melambangkan kemakmuran, kerendahan hati, dan kesejahteraan bersama. Semakin berisi, semakin menunduk, mengajarkan taruna untuk tetap rendah hati meski memiliki ilmu dan kedudukan."
    },
    {
      title: "Kapas",
      image: "/kapas.jpeg",
      description:
        "Kapas melambangkan kesejahteraan, kemanusiaan, dan kepedulian sosial. Ia mencerminkan kepekaan taruna terhadap sesama serta tanggung jawab untuk menghadirkan keadilan sosial."
    },
    {
      title: "Buku Terbuka",
      image: "/buku.jpeg",
      description:
        "Buku terbuka melambangkan ilmu pengetahuan, kebijaksanaan, dan keterbukaan berpikir. Menjadi pengingat bahwa setiap keputusan dan sikap taruna harus berlandaskan pengetahuan, aturan, dan nilai akademik."
    },
    {
      title: "Bintang",
      image: "/bintang.jpeg",
      description:
        "Bintang melambangkan cita-cita luhur dan arah tujuan. Ia menjadi penuntun moral bagi taruna agar tetap berada di jalan yang benar dalam pengabdian dan kepemimpinan."
    }
  ];

  const komisData = [
    {
      name: "KOMISI I (KETARUNAAN)",
      kepala: "Muhammad Adib Iqbal",
      wakil: "Razka Zakhran Syah",
      icon: Shield,
      color: "emerald",
      subkomisi: [
        { nama: "Advokasi Imigrasi", kepala: "Muhammad Azmi Fathoni" },
        { nama: "Advokasi Pemasyarakatan", kepala: "Abdillah Putra Amar" },
        { nama: "Kajian Strategis Imigrasi", kepala: "Ervan Fawwaaz Wijanarko" },
        { nama: "Kajian Strategis Pemasyarakatan", kepala: "Dwiki Aditya Nugraha" }
      ],
      staf: [
        "Shabrina Rosyada", "Feliks Immanuel Fakto Kudadiri", "Qurrota Aini Amira Listiani",
        "Sebastian Theodorick B. S.", "Jefanya Tesayanti", "Muhammad Akmal Fadhilah",
        "Ijon Sadar Saragih", "Restu Hayu Ramadhani"
      ]
    },
    {
      name: "KOMISI II (PSDM)",
      kepala: "Fadhel Sunyata",
      wakil: "M Ghaza Al Ghifari",
      icon: Users,
      color: "blue",
      subkomisi: [
        { nama: "Pembinaan Imigrasi", kepala: "Anak Agung Istri Agung Cyntia Pramesti Dewi" },
        { nama: "Pembinaan Pemasyarakatan", kepala: "I Gede Sibang Suantara" },
        { nama: "Kaderisasi Imigrasi", kepala: "Akram Imam Syah" },
        { nama: "Kaderisasi Pemasyarakatan", kepala: "Achmad Rizkillah" }
      ],
      staf: [
        "Gusti Ngurah Ardika", "Farrid Alfatjra", "Muhammad Jagad Aditiya",
        "Chairunnisa Ananda Dewi", "Alexandra Lidya Tesalonika S", "Aurelius Felix Rimba Narayang",
        "Ridho Aziz Nugroho", "Syair Vani Anastasya"
      ]
    },
    {
      name: "KOMISI III (KEHUMASAN)",
      kepala: "Ni Kadek Dwi Ananda Putri",
      wakil: "Taruna Vradia Bagaskara",
      icon: Activity,
      color: "purple",
      subkomisi: [
        { nama: "Media Imigrasi", kepala: "Wildan Hanif Kumoro Jati" },
        { nama: "Media Pemasyarakatan", kepala: "Muhamad Husein Rifai" },
        { nama: "Humas Imigrasi", kepala: "Nafa Fadilah" },
        { nama: "Humas Pemasyarakatan", kepala: "Lely Zaidir" }
      ],
      staf: [
        "Jimly Asshidiqie", "Komang Anggi Vebiyanti", "Sausan Adela",
        "Sisilya Novena Sinurat", "Tasya Octaviani Setia Wijaya", "Andrenius Purba",
        "Carlos Felix Betani Silalahi", "Jihan Farhanah Ramadhani"
      ]
    },
    {
      name: "KOMISI IV (LEGISLASI)",
      kepala: "Ahmad Lungguh Putra",
      wakil: "Cindy Hertina Putri",
      icon: FileText,
      color: "red",
      subkomisi: [
        { nama: "Pengawasan Imigrasi", kepala: "Kasuma Bima Habibilah" },
        { nama: "Pengawasan Pemasyarakatan", kepala: "Febe Okuli Hia" },
        { nama: "Formulasi Imigrasi", kepala: "Putri Amelia Casturie" },
        { nama: "Formulasi Pemasyarakatan", kepala: "Haris Yoga Saputra" }
      ],
      staf: [
        "Muhammad Afif Naliansyah", "Fadhila Panisyah Bangun", "Nur Khalimatus Sya'diyah",
        "Zacky Faiz Alfaridzi", "Arya Juna Fathan", "Fania Ghita Az Zahra",
        "I Wayan Agus Mas Saputra", "Dennis Andriano Imanuel Ginting"
      ]
    },
    {
      name: "KOMISI V (KEORGANISASIAN)",
      kepala: "Dicky Extrada Surbakti",
      wakil: "Amelia Gresya Pasaribu",
      icon: Star,
      color: "amber",
      auditor: [
        "Widya Hafizhah", "Wesly Gabriel Matthew Hasibuan",
        "Adio Benno Zahtio Hamzah", "Chefli"
      ],
      staf: [
        "Fauzan Nur Khadavy", "Mikha Rosaria Silaban", "Muhammad Yoni Erlando",
        "Ni Made Rista Putri", "Octario Tegar Maulana", "Abrar Anugrah Alfarobi",
        "Amanda Khoirunnisa", "Dody Hendriq Pangestu"
      ]
    }
  ];

  // Reusable Components
  const PersonCard = ({ name, role, imagePath, size = "md", badge = null }: {
    name: string;
    role?: string;
    imagePath?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    badge?: string | null;
  }) => {
    const sizes = {
      xs: "w-12 h-12",
      sm: "w-16 h-16",
      md: "w-20 h-20",
      lg: "w-28 h-28",
      xl: "w-40 h-40"
    };

    const textSizes = {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl"
    };

    return (
      <div className="group relative">
        <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm p-4 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-1">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="relative">
              <div className={`${sizes[size]} rounded-full overflow-hidden border-4 border-yellow-500/40 group-hover:border-yellow-500 transition-all duration-300 shadow-lg group-hover:shadow-yellow-500/50 group-hover:scale-105`}>
                <img 
                  src={imagePath || `/assets/${name.toLowerCase().replace(/\s+/g, '_')}.jpeg`}
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add('bg-gradient-to-br', 'from-yellow-500', 'to-yellow-600');
                      const icon = document.createElement('div');
                      icon.className = 'w-full h-full flex items-center justify-center text-white';
                      icon.innerHTML = '<svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
                      parent.appendChild(icon);
                    }
                  }}
                />
              </div>
              {badge && (
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/50 border-2 border-gray-900">
                  <span className="text-xl">{badge}</span>
                </div>
              )}
            </div>
            <div className="w-full">
              {role && (
                <div className="mb-2">
                  <span className="inline-block bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold border border-yellow-500/40">
                    {role}
                  </span>
                </div>
              )}
              <h4 className={`font-bold text-white ${textSizes[size]} leading-tight`}>{name}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MemberRow = ({ name, role, imagePath }: { name: string; role?: string; imagePath?: string }) => (
    <div className="bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 hover:bg-black/60 transition-all duration-300 group">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-500/30 group-hover:border-yellow-500/60 flex-shrink-0 transition-all duration-300 shadow-md group-hover:shadow-yellow-500/30">
          <img 
            src={imagePath || `/assets/${name.toLowerCase().replace(/\s+/g, '_')}.jpeg`}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.classList.add('bg-gradient-to-br', 'from-yellow-600', 'to-yellow-700');
                const icon = document.createElement('div');
                icon.className = 'w-full h-full flex items-center justify-center text-white';
                icon.innerHTML = '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
                parent.appendChild(icon);
              }
            }}
          />
        </div>
        <div className="flex-1">
          {role && <p className="text-yellow-400 text-xs font-semibold mb-1">{role}</p>}
          <p className="text-white font-semibold text-sm">{name}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white mt-5">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 border-b border-yellow-500/30">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/50">
                <Shield size={48} className="text-black" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Profil <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Demustar</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dewan Musyawarah Taruna Politeknik Pengayoman Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-yellow-500" size={32} />
              <h2 className="text-4xl font-bold text-yellow-500">Sejarah Singkat</h2>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Demustar Poltekpin adalah kelanjutan dari <strong className="text-yellow-500">Badan Perwakilan Taruna Poltekip</strong> dan <strong className="text-yellow-500">Demustar Poltekim</strong> yang berdiri pada <strong className="text-white">5 Juni 2025</strong>. Sebagai Dewan Perwakilan Taruna, Demustar memiliki fungsi legislatif di lingkungan Taruna Politeknik Pengayoman Indonesia.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Organisasi ini bersifat <strong className="text-yellow-500">non-politik, kekeluargaan, transparan</strong>, serta menjunjung musyawarah mufakat. Demustar berperan sebagai fasilitator bagi taruna melalui penyaluran aspirasi, pengawasan, dan evaluasi kegiatan organisasi, serta pelaksanaan fungsi legislasi dan kaderisasi.
              </p>
              
              {/* Parlemen ABSOLUT */}
              <div className="bg-black/50 border border-yellow-500/20 rounded-xl p-6 mt-8">
                <h3 className="text-2xl font-bold text-yellow-500 mb-4">Parlemen ABSOLUT</h3>
                <p className="text-gray-300 mb-4">
                  Dewan Musyawarah Taruna Politeknik Pengayoman Indonesia telah memiliki orta kepengurusan baru periode <strong className="text-white">2025/2026</strong> yang bernama <strong className="text-yellow-500">Parlemen ABSOLUT</strong>.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-lg p-4">
                    <h4 className="font-bold text-yellow-500 text-lg mb-1">ASPIRATIF</h4>
                    <p className="text-sm text-gray-400">Menampung aspirasi taruna</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-lg p-4">
                    <h4 className="font-bold text-yellow-500 text-lg mb-1">KOLABORATIF</h4>
                    <p className="text-sm text-gray-400">Bekerja sama untuk kemajuan</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-lg p-4">
                    <h4 className="font-bold text-yellow-500 text-lg mb-1">SOLUTIF</h4>
                    <p className="text-sm text-gray-400">Memberikan solusi terbaik</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Parlemen Absolut melambangkan <strong className="text-yellow-500">kedaulatan tertinggi, ketegasan prinsip, dan keutuhan nilai</strong>. Berdaulat dalam menentukan arah organisasi dan kesejahteraan Taruna, menjunjung tinggi integritas dan independensi, serta menjadi pusat kebenaran, keadilan, dan moral tertinggi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Makna Logo Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-500/30">
                Filosofi Logo
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
              7 Makna Logo Demustar
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Setiap elemen dalam logo kami memiliki makna mendalam yang merepresentasikan nilai-nilai Poltekpin
            </p>
          </div>

          {/* Baris 1 - 2 Kolom */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {logoMakna.slice(0, 2).map((item, index) => (
              <div key={index} className="group relative">
                <div className="h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm
                              border border-yellow-500/20 rounded-3xl p-8
                              hover:border-yellow-500/60 hover:shadow-2xl hover:shadow-yellow-500/20
                              transition-all duration-500 hover:-translate-y-2">
                  
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 
                                rounded-2xl flex items-center justify-center font-bold text-gray-900 text-lg
                                shadow-lg shadow-yellow-500/50 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    {index + 1}
                  </div>

                  <div className="flex flex-col">
                    <div className="w-20 h-20 mb-6 mx-auto
                                  bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl 
                                  flex items-center justify-center
                                  border border-yellow-500/30
                                  group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                                  shadow-lg shadow-yellow-500/20">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-[80%] max-h-[80%] object-contain drop-shadow-2xl"
                      />
                    </div>

                    <div className="flex-1 text-center">
                      <h3 className="text-yellow-400 font-bold text-xl md:text-2xl mb-3 
                                   group-hover:text-yellow-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                      
                      <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-yellow-500 to-transparent 
                                    transition-all duration-700 rounded-full mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Baris 2 - 3 Kolom */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {logoMakna.slice(2, 5).map((item, index) => (
              <div key={index + 2} className="group relative">
                <div className="h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm
                              border border-yellow-500/20 rounded-3xl p-8
                              hover:border-yellow-500/60 hover:shadow-2xl hover:shadow-yellow-500/20
                              transition-all duration-500 hover:-translate-y-2">
                  
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 
                                rounded-2xl flex items-center justify-center font-bold text-gray-900 text-lg
                                shadow-lg shadow-yellow-500/50 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    {index + 3}
                  </div>

                  <div className="flex flex-col">
                    <div className="w-20 h-20 mb-6 mx-auto
                                  bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl 
                                  flex items-center justify-center
                                  border border-yellow-500/30
                                  group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                                  shadow-lg shadow-yellow-500/20">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-[80%] max-h-[80%] object-contain drop-shadow-2xl"
                      />
                    </div>

                    <div className="flex-1 text-center">
                      <h3 className="text-yellow-400 font-bold text-xl md:text-2xl mb-3 
                                   group-hover:text-yellow-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                      
                      <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-yellow-500 to-transparent 
                                    transition-all duration-700 rounded-full mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Baris 3 - 2 Kolom */}
          <div className="grid md:grid-cols-2 gap-6">
            {logoMakna.slice(5, 7).map((item, index) => (
              <div key={index + 5} className="group relative">
                <div className="h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm
                              border border-yellow-500/20 rounded-3xl p-8
                              hover:border-yellow-500/60 hover:shadow-2xl hover:shadow-yellow-500/20
                              transition-all duration-500 hover:-translate-y-2">
                  
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 
                                rounded-2xl flex items-center justify-center font-bold text-gray-900 text-lg
                                shadow-lg shadow-yellow-500/50 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    {index + 6}
                  </div>

                  <div className="flex flex-col">
                    <div className="w-20 h-20 mb-6 mx-auto
                                  bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl 
                                  flex items-center justify-center
                                  border border-yellow-500/30
                                  group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                                  shadow-lg shadow-yellow-500/20">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-[80%] max-h-[80%] object-contain drop-shadow-2xl"
                      />
                    </div>

                    <div className="flex-1 text-center">
                      <h3 className="text-yellow-400 font-bold text-xl md:text-2xl mb-3 
                                   group-hover:text-yellow-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                      
                      <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-yellow-500 to-transparent 
                                    transition-all duration-700 rounded-full mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Target className="text-yellow-500" size={32} />
              <h2 className="text-4xl font-bold text-yellow-500">Visi & Misi</h2>
            </div>
            
            {/* Visi */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl p-8 md:p-12 mb-8">
              <h3 className="text-3xl font-bold text-yellow-500 mb-6">Visi</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Mewujudkan Dewan Musyawarah Taruna sebagai lembaga perwakilan taruna yang <strong className="text-yellow-500">berintegritas, aspiratif, adil, dan profesional</strong> dalam menjalankan fungsi legislasi, pengawasan, dan kaderisasi guna membentuk taruna Politeknik Pengayoman Indonesia yang berkarakter pengayom, berlandaskan <strong className="text-white">Pancasila</strong> dan <strong className="text-white">Undang-Undang Dasar 1945</strong>.
              </p>
            </div>
            
            {/* Misi */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-yellow-500 mb-6">Misi</h3>
              <div className="space-y-6">
                {[
                  "Menjadi wadah penyaluran aspirasi Taruna yang terbuka, bertanggung jawab, dan berorientasi pada kepentingan bersama dalam kehidupan ketarunaan.",
                  "Melaksanakan fungsi pengawasan dan evaluasi secara objektif dan berkeadilan guna memastikan setiap kegiatan dan kebijakan organisasi taruna berjalan sesuai dengan aturan dan nilai yang dijunjung bersama.",
                  "Menjalankan fungsi legislasi melalui musyawarah dan mufakat, dengan mengedepankan prinsip keadilan, keterbukaan, serta kepastian aturan dalam organisasi korps taruna.",
                  "Mendorong pembinaan dan kaderisasi Taruna secara berkelanjutan sebagai upaya membentuk pribadi yang berintegritas, berkarakter kepemimpinan, dan siap mengabdi sebagai insan pengayom.",
                  "Menumbuhkan budaya organisasi yang menjunjung nilai kekeluargaan, etika, dan profesionalisme, sehingga tercipta lingkungan ketarunaan yang harmonis dan saling menghargai.",
                  "Membangun komunikasi dan sinergi yang konstruktif antara Demustar, organisasi korps taruna, serta pihak institusi demi terwujudnya tata kelola organisasi yang sehat dan berkelanjutan.",
                  "Menghadirkan Demustar sebagai lembaga yang adaptif dan responsif, yang tidak hanya menjalankan fungsi struktural, tetapi juga berperan aktif dalam menjaga keseimbangan dan keberlangsungan kehidupan taruna."
                ].map((misi, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-black font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <p className="text-gray-300 leading-relaxed pt-1">{misi}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-500/30">
                  Organisasi
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="text-yellow-500" size={40} />
                <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Struktur Organisasi
                </h2>
              </div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Tim solid yang berkomitmen untuk kemajuan Poltekpin
              </p>
            </div>
            
            {/* Pimpinan Utama */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 rounded-3xl p-1 shadow-2xl shadow-yellow-500/30">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    <PersonCard 
                      name="Bangkit Filippo Pane"
                      role="Kepala Dewan"
                      imagePath="/pasfoto-anggota/Tk1/"
                      size="xl"
                      badge="👑"
                    />
                    <PersonCard 
                      name="Muhammad Riza Halilullah"
                      role="Wakil Dewan"
                      imagePath="/assets/riza.jpeg"
                      size="xl"
                      badge="⭐"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sekretariat */}
            <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 mb-12 hover:border-yellow-500/50 transition-all duration-300 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center border border-yellow-500/30">
                  <Users className="text-yellow-500" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-yellow-500">Sekretariat</h3>
              </div>
              
              {/* Pimpinan Sekretariat */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <PersonCard 
                  name="Shavy Salsa Agustin"
                  role="Sekretaris"
                  imagePath="/assets/shavy.jpeg"
                  size="lg"
                />
                <PersonCard 
                  name="Rifda Alverina Rachman"
                  role="Kepala Bagian Keuangan"
                  imagePath="/assets/rifda.jpeg"
                  size="lg"
                />
              </div>
              
              {/* Staf Khusus Keuangan */}
              <div className="mb-8">
                <h4 className="text-yellow-400 font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Staf Khusus Keuangan
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <MemberRow name="Firda Royyani Yudhantari" imagePath="/assets/firda.jpeg" />
                  <MemberRow name="Shofah Aprilia Riyanto" imagePath="/assets/shofah.jpeg" />
                </div>
              </div>

              {/* Tata Usaha */}
              <div className="bg-gradient-to-br from-black/50 to-transparent p-6 rounded-xl border border-yellow-500/20">
                <h4 className="text-yellow-400 font-bold text-xl mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Bagian Tata Usaha
                </h4>
                
                <div className="mb-6">
                  <PersonCard 
                    name="Nawang Wulan Yuli Astuti"
                    role="Kepala Bagian"
                    imagePath="/assets/nawang.jpeg"
                    size="md"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Subbagian Administrasi */}
                  <div className="bg-black/30 p-5 rounded-lg border border-yellow-500/10">
                    <p className="text-yellow-400 font-semibold mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                      Subbagian Administrasi
                    </p>
                    
                    <div className="mb-4">
                      <PersonCard 
                        name="Adinda Aulia Putri"
                        role="Kepala Subbagian"
                        imagePath="/assets/adinda.jpeg"
                        size="sm"
                      />
                    </div>
                    
                    <div className="space-y-3 mt-4">
                      {[
                        { name: 'Triani Martauli Tondang', img: 'triani' },
                        { name: 'Imam Zhafran Kaharuddin', img: 'imam' },
                        { name: 'Gigih Nanda Wirayuda', img: 'gigih' },
                        { name: 'Mahardika Suwardana Putra', img: 'mahardika' }
                      ].map((staff, idx) => (
                        <MemberRow 
                          key={idx}
                          name={staff.name}
                          imagePath={`/assets/${staff.img}.jpeg`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Subbagian Umum */}
                  <div className="bg-black/30 p-5 rounded-lg border border-yellow-500/10">
                    <p className="text-yellow-400 font-semibold mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                      Subbagian Umum
                    </p>
                    
                    <div className="mb-4">
                      <PersonCard 
                        name="Mutiara Callista Prasmestya"
                        role="Kepala Subbagian"
                        imagePath="/assets/mutiara.jpeg"
                        size="sm"
                      />
                    </div>
                    
                    <div className="space-y-3 mt-4">
                      {[
                        { name: 'Ardanendra', img: 'ardanendra' },
                        { name: 'Januar Gangga Pratama', img: 'januar' },
                        { name: 'Sasabilla Detatama', img: 'sasabilla' },
                        { name: 'Marisa Debora Letty DF', img: 'marisa' }
                      ].map((staff, idx) => (
                        <MemberRow 
                          key={idx}
                          name={staff.name}
                          imagePath={`/assets/${staff.img}.jpeg`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Komisi-Komisi */}
            <div className="space-y-6">
              {komisData.map((komisi, index) => {
                const IconComponent = komisi.icon;
                const isExpanded = expandedSection === `komisi-${index}`;
                
                return (
                  <div key={index} className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm border border-yellow-500/30 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all shadow-xl">
                    <button
                      onClick={() => toggleSection(`komisi-${index}`)}
                      className="w-full p-6 flex justify-between items-center hover:bg-yellow-500/5 transition-colors group"
                    >
                      <div className="text-left flex items-center gap-4">
                        <div className="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center border border-yellow-500/30 group-hover:bg-yellow-500/30 transition-colors">
                          <IconComponent className="text-yellow-500" size={28} />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-3">{komisi.name}</h3>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-3 bg-black/30 px-3 py-2 rounded-lg">
                              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500/40">
                                <img 
                                  src={`/assets/${komisi.kepala.toLowerCase().replace(/\s+/g, '_')}.jpeg`}
                                  alt={komisi.kepala}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                      parent.classList.add('bg-gradient-to-br', 'from-yellow-500', 'to-yellow-600');
                                      const icon = document.createElement('div');
                                      icon.className = 'w-full h-full flex items-center justify-center text-white text-xs';
                                      icon.innerHTML = '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
                                      parent.appendChild(icon);
                                    }
                                  }}
                                />
                              </div>
                              <div>
                                <p className="text-gray-400 text-xs">Kepala</p>
                                <p className="text-white font-semibold">{komisi.kepala}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 bg-black/30 px-3 py-2 rounded-lg">
                              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500/40">
                                <img 
                                  src={`/assets/${komisi.wakil.toLowerCase().replace(/\s+/g, '_')}.jpeg`}
                                  alt={komisi.wakil}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                      parent.classList.add('bg-gradient-to-br', 'from-yellow-500', 'to-yellow-600');
                                      const icon = document.createElement('div');
                                      icon.className = 'w-full h-full flex items-center justify-center text-white text-xs';
                                      icon.innerHTML = '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
                                      parent.appendChild(icon);
                                    }
                                  }}
                                />
                              </div>
                              <div>
                                <p className="text-gray-400 text-xs">Wakil</p>
                                <p className="text-white font-semibold">{komisi.wakil}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {isExpanded ? 
                        <ChevronUp className="text-yellow-500 flex-shrink-0" size={28} /> : 
                        <ChevronDown className="text-yellow-500 flex-shrink-0" size={28} />
                      }
                    </button>
                    
                    {isExpanded && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-yellow-500/20 pt-6">
                          {/* Subkomisi */}
                          {komisi.subkomisi && (
                            <div className="mb-8">
                              <h4 className="text-yellow-400 font-bold text-xl mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                Subkomisi
                              </h4>
                              <div className="grid md:grid-cols-2 gap-6">
                                {komisi.subkomisi.map((sub, subIdx) => (
                                  <div key={subIdx} className="bg-black/50 p-5 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all group">
                                    <div className="flex items-start gap-4">
                                      <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-yellow-500/40 group-hover:border-yellow-500/70 flex-shrink-0 transition-all shadow-lg group-hover:shadow-yellow-500/30">
                                        <img 
                                          src={`/assets/${sub.kepala.toLowerCase().replace(/\s+/g, '_')}.jpeg`}
                                          alt={sub.kepala}
                                          className="w-full h-full object-cover"
                                          onError={(e) => {
                                            const target = e.currentTarget;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                              parent.classList.add('bg-gradient-to-br', 'from-gray-600', 'to-gray-700');
                                              const icon = document.createElement('div');
                                              icon.className = 'w-full h-full flex items-center justify-center text-white';
                                              icon.innerHTML = '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
                                              parent.appendChild(icon);
                                            }
                                          }}
                                        />
                                      </div>
                                      <div className="flex-1">
                                        <p className="text-yellow-400 font-bold text-sm mb-2">{sub.nama}</p>
                                        <div className="bg-black/40 px-3 py-2 rounded-lg inline-block">
                                          <p className="text-white font-semibold text-sm">{sub.kepala}</p>
                                          <p className="text-gray-400 text-xs">Kepala Subkomisi</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* Auditor */}
                          {komisi.auditor && (
                            <div className="mb-8">
                              <h4 className="text-yellow-400 font-bold text-xl mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                Auditor
                              </h4>
                              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {komisi.auditor.map((aud, audIdx) => (
                                  <PersonCard 
                                    key={audIdx}
                                    name={aud}
                                    size="md"
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* Staf */}
                          <div>
                            <h4 className="text-yellow-400 font-bold text-xl mb-6 flex items-center gap-2">
                              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                              Staf
                            </h4>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {komisi.staf.map((staff, staffIdx) => (
                                <MemberRow 
                                  key={staffIdx}
                                  name={staff}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}