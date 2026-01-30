import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

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
        <footer className="bg-black border-t border-yellow-600/30 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2026 Demustar Politeknik Pengayoman Indonesia. All rights reserved.</p>
        </div>
      </footer>
      </body>
    </html>
  );
}