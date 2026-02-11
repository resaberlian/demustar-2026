'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProgramKerja {
  id: number;
  slug: string;
  nama_program: string;
  deskripsi_program: string;
  image_url: string;
  penanggung_jawab: string;
  created_at: string;
}

// COMPONENT 1: Animated Header
export function AnimatedProgramKerjaHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden py-10 md:py-24 border-b border-yellow-500/20"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/assets/programkerja.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          {/* MAIN PANEL - Animated */}
          <div 
            className={`
              relative
              bg-black/30
              backdrop-blur-md
              border border-white/20
              rounded-3xl
              px-8 md:px-10 
              py-12 md:py-14
              shadow-2xl shadow-black/50
              transition-all duration-1000
              ${isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
              }
            `}
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/20 via-yellow-500/10 to-yellow-600/20 rounded-3xl blur-xl -z-10"></div>

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

            {/* SUBTITLE */}
            <p className="text-center text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Program kerja sebagai wujud pelaksanaan fungsi legislatif dan pengawasan aspirasi Taruna Poltekpin
            </p>

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
  );
}

// COMPONENT 2: Animated Cards Grid
export function AnimatedProgramKerjaCards({ programs }: { programs: ProgramKerja[] }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-black text-white px-6 pb-24 pt-12"
    >
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs?.map((p, idx) => (
          <Link
            key={p.id}
            href={`/program-kerja/${p.slug}`}
            className={`
              group relative block rounded-2xl overflow-hidden 
              bg-zinc-900 border border-yellow-600/30 
              hover:border-yellow-500 transition-all duration-700
              ${isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
              }
            `}
            style={{ 
              transitionDelay: isVisible ? `${idx * 100}ms` : '0ms' 
            }}
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
                                shadow-lg shadow-yellow-500/40
                                transform group-hover:scale-105 transition">
                  Lihat Detail →
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition">
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
                                bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
                  Aktif
                </span>
              </div>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 via-transparent to-transparent"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}