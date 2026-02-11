export const dynamic = 'force-dynamic'

import { supabase } from "../../src/lib/supabase";
import { AnimatedProgramKerjaHeader, AnimatedProgramKerjaCards } from './AnimatedProgramKerjaSections';

export default async function ProgramKerjaPage() {
  // Fetch data dari database
  const { data: programs } = await supabase
    .from("program_kerja")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      {/* Header Section dengan Animasi */}
      <AnimatedProgramKerjaHeader />

      {/* Cards Grid Section dengan Animasi */}
      <AnimatedProgramKerjaCards programs={programs || []} />
    </>
  );
}