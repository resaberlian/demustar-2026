"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItemClass = (path: string) =>
    pathname === path
      ? "text-yellow-500 font-semibold"
      : "text-gray-300 hover:text-yellow-500 transition-colors duration-200";

  const mobileNavItemClass = (path: string) =>
    pathname === path
      ? "text-yellow-500 font-bold bg-yellow-500/10 border-l-4 border-yellow-500"
      : "text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/5 border-l-4 border-transparent";

  // Don't show navbar on admin pages
  if (pathname.startsWith("/admin")) return null;

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/profil", label: "Profil" },
    { href: "/program-kerja", label: "Program Kerja" },
    { href: "https://docs.google.com/forms/d/e/1FAIpQLSe4VFTHU4H6u60ePmcpdBLWS6GFjhPdUpUf7eHXcyQn0NSEsg/viewform?pli=1", label: "Pengaduan", external: true },
    { href: "/laporan", label: "Laporan" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg shadow-yellow-500/10"
            : "bg-black/90 backdrop-blur-sm"
        } border-b border-yellow-600/30`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 z-50">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30">
                <Image
                  src="/logo.PNG"
                  alt="Logo DEMUSTAR"
                  width={50}
                  height={50}
                  priority
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-yellow-500">
                  DEMUSTAR
                </h1>
                <p className="text-[10px] md:text-xs text-gray-400">POLTEKPIN</p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${navItemClass(link.href)} relative group py-2`}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform origin-left transition-transform duration-300 ${
                        pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden z-50 p-2 rounded-lg hover:bg-yellow-500/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-yellow-500" />
              ) : (
                <Menu className="w-6 h-6 text-yellow-500" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* MOBILE MENU PANEL - SLIDE DARI KIRI */}
      <div
        className={`lg:hidden fixed top-16 left-0 h-[calc(100vh-4rem)] w-80 max-w-[85vw] bg-gradient-to-b from-gray-900 to-black border-r border-yellow-500/30 shadow-2xl z-40 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto py-6">
          <ul className="space-y-1 px-4">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`transform transition-all duration-300 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Link
                  href={link.href}
                  className={`${mobileNavItemClass(
                    link.href
                  )} block py-4 px-4 text-base font-medium transition-all duration-200 rounded-lg text-left`}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-yellow-500/20">
            <p className="text-left text-gray-400 text-xs px-4">
              © 2024 DEMUSTAR Poltekpin
            </p>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
}