import { ReactNode } from "react"

export default function ProgramKerjaLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <section className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Admin • Program Kerja
        </h1>

        {children}
      </div>
    </section>
  )
}
