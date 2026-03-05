import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Image from 'next/image'

import { Hanken_Grotesk } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'Website Organisasi',
  description: 'Website resmi organisasi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
 <html lang="en" className={hankenGrotesk.variable}>
      <body className={`${hankenGrotesk.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white border-t border-yellow-600/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Top Section - Logos and Address */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            
            {/* Left Side - Logos */}
<div className="flex flex-col items-start gap-5 text-center">

  {/* LOGO ROW */}
  <div className="flex items-center gap-4">

    {/* Logo DEMUSTAR */}
    <div className="w-20 h-20 sm:w-24 sm:h-24  rounded-full p-2 flex items-center justify-center">
      <Image
        src="/logo.PNG"
        alt="Logo DEMUSTAR"
        width={80}
        height={80}
        className="object-contain"
      />
    </div>

    {/* Logo Poltekpin */}
    <div className="w-20 h-20 sm:w-24 sm:h-24  rounded-full p-2 flex items-center justify-center">
      <Image
        src="/Poltekpin.png"
        alt="Logo Poltekpin"
        width={60}
        height={60}
        className="object-contain"
      />
    </div>

  </div>

  {/* TEXT DI BAWAH LOGO */}
  <div>
    <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2 text-left">
      Politeknik Imigrasi dan Pemasyarakatan
    </h3>

    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xl">
      Tanah Tinggi, Kec. Tangerang, Kota Tangerang, Banten 15119
    </p>
  </div>

</div>


            {/* Right Side - Address Badge */}
            <div className="flex justify-center ">
               <div>
              <h4 className="text-yellow-400 font-bold text-lg mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Lokasi
              </h4>
             <div className="w-full  rounded-xl overflow-hidden border border-yellow-500/30">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.696055825076!2d106.6428042!3d-6.171435799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f93c8580d1bf%3A0xa0d36ca7daaea455!2sKampus%20POLTEKIP%20dan%20POLTEKIM%20Tangerang!5e0!3m2!1sid!2sid!4v1770710408974!5m2!1sid!2sid"
 ></iframe>
</div>

            </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        
        {/* Bottom Section - Social Media & Copyright */}
        <div className="border-t border-yellow-600/30 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Social Media Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-gray-400 text-sm font-medium">Ikuti Kami:</p>
              <div className="flex items-center gap-3">
                <a 
                  href="https://instagram.com/demustar_poltekimipas" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-600/20 hover:bg-yellow-600 border border-yellow-500 px-4 py-2 rounded-full text-yellow-400 hover:text-white transition-all flex items-center gap-2 group"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-semibold text-xs">@demustar_poltekimipas</span>
                </a>
                
                <a 
                  href="https://instagram.com/poltekpin_id" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-600/20 hover:bg-yellow-600 border border-yellow-500 px-4 py-2 rounded-full text-yellow-400 hover:text-white transition-all flex items-center gap-2 group"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-semibold text-xs">@poltekpin_id</span>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center sm:text-right">
              <p className="text-gray-300 text-sm">
                © 2026 - Demustar - Politeknik Imigrasi dan Pemasyarakatan
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
      </body>
    </html>
  );
}