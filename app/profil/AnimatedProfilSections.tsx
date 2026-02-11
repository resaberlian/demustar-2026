'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// ============================================================
// HOOK: useInView — trigger animasi saat elemen masuk viewport
// ============================================================
function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect(); // animasi hanya sekali
      }
    }, { threshold: 0.15, ...options });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

// ============================================================
// COMPONENT 1: Hero Header
// ============================================================
export function AnimatedProfilHeader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden py-10 md:py-24 border-b border-yellow-500/20">
      <div className="absolute inset-0">
        <Image
          src="/assets/2.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`
            relative bg-black/30 backdrop-blur-md border border-white/20
            rounded-3xl px-8 md:px-10 py-12 md:py-14 shadow-2xl shadow-black/50
            transition-all duration-1000 ease-out
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}>
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/20 via-yellow-500/10 to-yellow-600/20 rounded-3xl blur-xl -z-10" />

            {/* Badge */}
            <div className={`text-center mb-6 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="inline-block px-5 py-2 bg-yellow-500/20 border border-yellow-400/50 text-yellow-400 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm">
                PROFIL ORGANISASI
              </span>
            </div>

            {/* Title */}
            <h1 className={`text-center text-4xl md:text-6xl font-extrabold leading-tight mb-6 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-white drop-shadow-lg">Profil</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Demustar
              </span>
            </h1>

            {/* Divider */}
            <div className={`flex items-center justify-center gap-3 mt-8 transition-all duration-700 delay-700 ${mounted ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-yellow-500" />
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-yellow-500" />
            </div>

            {/* Tagline */}
            <div className={`mt-8 text-center transition-all duration-700 delay-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500/15 border border-yellow-400/40 rounded-full text-yellow-400 font-semibold text-sm backdrop-blur-sm">
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

// ============================================================
// COMPONENT 2: Fade Up — wrapper umum untuk section
// ============================================================
export function AnimatedContentSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// ============================================================
// COMPONENT 3: Fade In dari kiri
// ============================================================
export function AnimatedFromLeft({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// ============================================================
// COMPONENT 4: Fade In dari kanan
// ============================================================
export function AnimatedFromRight({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// ============================================================
// COMPONENT 5: Scale up (zoom in)
// ============================================================
export function AnimatedScaleUp({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-700 ease-out
        ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// ============================================================
// COMPONENT 6: Stagger container — anak-anak muncul bergiliran
// ============================================================
export function AnimatedStaggerContainer({
  children,
  className = '',
  staggerDelay = 100,
}: {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          style={{ transitionDelay: inView ? `${i * staggerDelay}ms` : '0ms' }}
          className={`
            transition-all duration-600 ease-out
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          {child}
        </div>
      ))}
    </div>
  );
}