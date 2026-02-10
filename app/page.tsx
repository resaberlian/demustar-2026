import { supabase } from "../src/lib/supabase";
import { 
  AnimatedHeroSection, 
  AnimatedInfoCards, 
  AnimatedProfileSection,
  AnimatedProgramSection 
} from './AnimatedSections';

export default async function Home() {
  // Ambil data dari database (JANGAN DIUBAH INI)
  const { data: programs } = await supabase
    .from("program_kerja")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Hero Section dengan Animasi */}
      <AnimatedHeroSection />

      {/* Info Cards dengan Animasi */}
      <AnimatedInfoCards />

      {/* Profile Section dengan Animasi */}
      <AnimatedProfileSection />

      {/* Program Kerja dengan Animasi - Data dari database */}
      <AnimatedProgramSection programs={programs} />

      {/* Footer kamu (kalau ada) taruh di sini */}
      
    </main>
  );
}