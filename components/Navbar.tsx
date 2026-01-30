"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItemClass = (path: string) =>
    pathname === path
      ? "text-yellow-500 font-semibold border-b-2 border-yellow-500"
      : "text-gray-300 hover:text-yellow-500 transition";

  // ❌ navbar tidak tampil di halaman index

  // ❌ navbar tidak tampil di admin
  if (pathname.startsWith("/admin")) return null

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-yellow-600/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center">
                <Image
                  src="/logo.PNG"
                  alt="Logo DEMUSTAR"
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-yellow-500">DEMUSTAR</h1>
                <p className="text-xs text-gray-400">POLTEKPIN</p>
              </div>
            </Link>
          </div>

          {/* MENU */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/" className={navItemClass("/")}>
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/profil" className={navItemClass("/profil")}>
                Profil
              </Link>
            </li>
            <li>
              <Link href="/program-kerja" className={navItemClass("/program-kerja")}>
                Program Kerja
              </Link>
            </li>
            <li>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe4VFTHU4H6u60ePmcpdBLWS6GFjhPdUpUf7eHXcyQn0NSEsg/viewform?pli=1" className={navItemClass("/pengaduan")} target="_blank">
                Pengaduan
              </Link>
            </li>
            <li>
              <Link href="/laporan" className={navItemClass("/laporan")}>
                Laporan
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}
