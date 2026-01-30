"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { supabase } from "../../../src/lib/supabase"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  const menu = [
    { name: "Program Kerja", href: "/admin/program-kerja", icon: "📋" },
    { name: "Laporan", href: "/admin/laporan", icon: "📝" },
  ]

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-6 flex flex-col">
        <h1 className="text-xl font-bold text-yellow-500 mb-8">
          Admin Demustar
        </h1>

        <nav className="flex-1 space-y-2">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition
                ${
                  pathname === item.href
                    ? "bg-yellow-500 text-black font-semibold"
                    : "hover:bg-zinc-800"
                }`}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto text-sm text-red-400 hover:underline"
        >
          Logout
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
