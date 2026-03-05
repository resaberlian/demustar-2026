'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function AnimatedHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (currentSection) observer.observe(currentSection);
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="beranda" 
      className="relative overflow-hidden min-h-screen"
    >
      <div className="absolute inset-0">
        <Image
          src="/assets/1.jpeg"
          alt="Background DEMUSTAR Poltekpin"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/85 to-gray-900/90" />
        <div className="absolute inset-x-0 bottom-0 h-48 md:h-64 bg-gradient-to-t from-black via-black/70 to-transparent" />
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-yellow-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-yellow-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-yellow-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center py-12 md:py-35 ">
          
          <div 
            className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-yellow-600/30 backdrop-blur-sm border border-yellow-500/50 text-yellow-400 rounded-full text-xs sm:text-sm font-semibold">
                  Parlemen Absolut
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Selamat Datang di{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Demustar
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-yellow-400 font-semibold">
                   Politeknik Imigrasi dan Pemasyarakatan
              </h2>

              <div className="space-y-3 sm:space-y-4 text-gray-200">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  <strong className="text-yellow-400">Dewan Musyawarah Taruna Poltekimipas</strong> adalah wadah aspirasi dan representasi taruna dalam menyuarakan kepentingan bersama.
                </p>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Kami hadir sebagai parlemen yang <span className="text-yellow-400 font-semibold">Aspiratif, Kolaboratif, dan Solutif</span> untuk menciptakan lingkungan kampus yang lebih baik.
                </p>
              </div>

              <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 bg-gradient-to-r from-yellow-600/30 to-yellow-700/30 backdrop-blur-sm border border-yellow-500/40 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold text-xs sm:text-sm">Aspiratif</span>
                </div>
                <span className="text-yellow-400 text-xs sm:text-sm">•</span>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <span className="text-white font-semibold text-xs sm:text-sm">Kolaboratif</span>
                </div>
                <span className="text-yellow-400 text-xs sm:text-sm">•</span>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <span className="text-white font-semibold text-xs sm:text-sm">Solutif</span>
                </div>
              </div>
            </div>
          </div>

          <div 
            className={`space-y-4 sm:space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="p-2.5 sm:p-3 bg-yellow-600/30 rounded-lg sm:rounded-xl border border-yellow-500/40 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    Sampaikan Aspirasi Anda
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                    Temukan layanan yang anda butuhkan disini!
                  </p>
                </div>
              </div>
              
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe4VFTHU4H6u60ePmcpdBLWS6GFjhPdUpUf7eHXcyQn0NSEsg/viewform?pli=1" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-white text-sm sm:text-base transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-yellow-600/30 group"
              >
                <span className="truncate">SALUR - Form Aspirasi</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-4">
                <div className="p-2 bg-yellow-600/30 rounded-lg border border-yellow-500/40 flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Ikuti Media Sosial Kami
                </h3>
              </div>
              
              <a 
                href="https://instagram.com/demustar_poltekimipas" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-white/5 hover:bg-white/10 border border-yellow-500/30 hover:border-yellow-500/60 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all group"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <div className="min-w-0 flex-1">
                    <p className="text-yellow-400 font-semibold text-sm sm:text-base truncate">@demustar_poltekimipas</p>
                    <p className="text-gray-400 text-xs">Instagram</p>
                  </div>
                </div>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 border border-yellow-500/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 bg-yellow-600/40 rounded-lg flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-yellow-300 font-bold mb-1 text-lg sm:text-base">DEMUSTAR POLTEKIMIPAS</h4>
                  <p className="text-gray-200 text-md sm:text-sm leading-relaxed">
                    Dewan Musyawarah Taruna sebagai wadah aspirasi dan representasi taruna Politeknik Imigrasi dan Pemasyarakatan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AnimatedInfoCards() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (currentSection) observer.observe(currentSection);
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const cards = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />,
      title: 'Aspiratif',
      desc: 'Menampung dan menyuarakan setiap aspirasi taruna dengan penuh tanggung jawab.',
      delay: '0ms'
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
      title: 'Kolaboratif',
      desc: 'Bekerja sama dengan seluruh stakeholder untuk kemajuan bersama.',
      delay: '200ms'
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
      title: 'Solutif',
      desc: 'Memberikan solusi konkret untuk setiap permasalahan yang ada.',
      delay: '400ms'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className={`bg-gradient-to-br from-yellow-600/10 to-black border border-yellow-600/30 p-8 rounded-xl hover:border-yellow-600 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? card.delay : '0ms' }}
            >
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {card.icon}
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-3">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AnimatedProfileSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (currentSection) observer.observe(currentSection);
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-yellow-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div 
            className={`relative group transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="rounded-2xl overflow-hidden border-2 border-yellow-600/40 shadow-2xl shadow-yellow-600/30 transition-all duration-500 group-hover:border-yellow-500/60 group-hover:shadow-yellow-500/50">
              <div className="relative h-[200px] md:h-[400px] bg-gradient-to-br from-yellow-600/10 to-black">
                <Image
                  src="/assets/1.jpeg"
                  alt="DEMUSTAR Poltekpin"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center space-y-3 bg-black/60 backdrop-blur-sm px-8 py-6 rounded-xl">
                    <div className="text-4xl font-black text-yellow-500 tracking-wider">DEMUSTAR</div>
                    <p className="text-gray-300 text-base font-semibold">Dewan Musyawarah Taruna</p>
                    <p className="text-gray-400 text-sm">Politeknik Pengayoman Indonesia</p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-yellow-500/60"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-yellow-500/60"></div>
              </div>
            </div>

            <div className="absolute -bottom-5 left-6 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-8 py-3 rounded-full font-bold shadow-xl shadow-yellow-600/50 border-2 border-yellow-400/30 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Berdiri 5 Juni 2025</span>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-600/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl"></div>
          </div>

          <div 
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <span className="inline-block px-4 py-2 bg-yellow-600/20 border border-yellow-600 text-yellow-500 rounded-full text-xs md:text-md font-semibold">
              Profil Singkat
            </span>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Tentang <span className="text-yellow-500">Demustar Poltekpin</span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-md md:text-lg">
              <strong className="text-yellow-500">Demustar Poltekpin</strong>
              {' '}merupakan kelanjutan dari 
              <strong> Badan Perwakilan Taruna Poltekip</strong> dan 
              <strong> Demustar Poltekim</strong> yang resmi berdiri pada 
              <strong className="text-yellow-500"> 5 Juni 2025</strong>.
            </p>

            <p className="text-gray-300 leading-relaxed text-md md:text-lg">
              Sebagai <strong>Dewan Perwakilan Taruna</strong>, Demustar memiliki 
              <span className="text-yellow-500 font-semibold"> fungsi legislatif</span> 
              {' '}di lingkungan Taruna Politeknik Pengayoman Indonesia, berperan dalam
              menyalurkan aspirasi, merumuskan kebijakan, serta mengawal kepentingan taruna.
            </p>

            <div className="pt-4">
              <Link
                href="/profil"
                className="inline-flex items-center space-x-2 text-yellow-500 font-semibold hover:text-yellow-400 transition-colors group"
              >
                <span>Baca selengkapnya</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AnimatedProgramSection({ programs }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (currentSection) observer.observe(currentSection);
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-black text-white px-6 pb-20 pt-12"
    >
      <div 
        className={`text-center mb-14 space-y-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <span className="inline-block px-4 py-2 bg-yellow-600/20 border border-yellow-600 text-yellow-500 rounded-full text-xs md:text-md font-semibold">
          Program Unggulan
        </span>
        
        <h2 className="text-3xl md:text-5xl font-bold">
          Program Kerja <span className="text-yellow-500">DEMUSTAR</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-md md:text-lg">
          Program kerja Demustar sebagai wujud pelaksanaan fungsi legislatif dan
          pengawasan aspirasi Taruna Politeknik Pengayoman Indonesia.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs?.slice(0, 3).map((p, idx) => (
          <Link
            key={p.id}
            href={`/program-kerja/${p.slug}`}
            className={`group rounded-2xl overflow-hidden bg-zinc-900 border border-yellow-600/30 hover:border-yellow-500 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: isVisible ? `${idx * 150}ms` : '0ms' }}
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={p.image_url}
                alt={p.nama_program}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg">
                  Lihat Detail
                </span>
              </div>
            </div>

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
                <span className="text-xs px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400">
                  Aktif
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div 
        className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Link
          href="/program-kerja"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 px-10 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-yellow-600/40"
        >
          Lihat Semua Program Kerja
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}