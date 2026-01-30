"use client"

import { useState } from "react"
import { supabase } from "../../../../src/lib/supabase"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async () => {
    setLoading(true)
    setError("")

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setError(error.message)
    } else {
      router.push("/admin/program-kerja")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-xl space-y-5">
        <h1 className="text-2xl font-bold text-center">
          Login Admin Demustar
        </h1>

        {error && (
          <p className="bg-red-600/20 text-red-400 p-2 rounded">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email admin"
          className="w-full p-3 rounded bg-zinc-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-zinc-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-yellow-500 text-black font-semibold py-3 rounded hover:bg-yellow-600"
        >
          {loading ? "Login..." : "Masuk"}
        </button>
      </div>
    </div>
  )
}
