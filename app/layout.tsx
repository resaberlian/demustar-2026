import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="id">
      <body className={inter.className}>
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
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="flex items-center gap-4">
                {/* Logo DEMUSTAR */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full p-2 flex items-center justify-center">
                    <Image
                      src="/logo.PNG"
                      alt="Logo DEMUSTAR"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Logo Poltekpin */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full p-2 flex items-center justify-center">
                    <Image
                      src="/assets/logo-poltekpin.png"
                      alt="Logo Poltekpin"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
              {/* Institution Info */}
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2">
                  Politeknik Pengayoman Indonesia
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
              <div className="bg-black/50 rounded-lg overflow-hidden border border-yellow-600/30 hover:border-yellow-500 transition-colors">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.468018984142!2d106.797308!3d-6.333362799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee5e1ba0a135%3A0x5b0a3fb0ec681dc3!2sPoliteknik%20Imigrasi!5e0!3m2!1sid!2sid!4v1770628657406!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
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
                  href="https://instagram.com/demustar_poltekpin" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-600/20 hover:bg-yellow-600 border border-yellow-500 px-4 py-2 rounded-full text-yellow-400 hover:text-white transition-all flex items-center gap-2 group"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-semibold text-sm">@demustar_poltekpin</span>
                </a>
                
                <a 
                  href="https://instagram.com/poltekpin" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-600/20 hover:bg-yellow-600 border border-yellow-500 px-4 py-2 rounded-full text-yellow-400 hover:text-white transition-all flex items-center gap-2 group"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-semibold text-sm">@poltekpin</span>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center sm:text-right">
              <p className="text-gray-300 text-sm">
                © 2026 - Demustar - Politeknik Pengayoman Indonesia.
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