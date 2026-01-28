"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, Menu, X } from "lucide-react";
import { supabase } from "../../lib/supabase"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // if (email === "admin@bytecamp.com" && password === "ByteCampskill2025") {
    //   localStorage.setItem("isLoggedIn", "true");
    //   localStorage.setItem("userRole", "admin");
    //   router.push("/admin-panel");
    //   setLoading(false);
    //   return;
    // }
if (email === "admin@bytecamp.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", "admin");
      router.push("/admin-panel");
      setLoading(false);
      return;
    }
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (error || !data) {
      setError("User not found.");
      setLoading(false);
      return;
    }

    if (data.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", "user");
      router.push("/home_page");
    } else {
      setError("Incorrect password.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-slate-100 antialiased">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/ByteCamp logo.jpg" alt="ByteCamp" width={38} height={38} className="rounded-lg" />
            <span className="text-lg font-bold">ByteCamp</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-200 hover:text-teal-400 transition">Home</Link>
            <Link href="/about" className="text-slate-200 hover:text-teal-400 transition">About</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-black/80 border-t border-gray-800 flex flex-col px-6 py-4 gap-3">
            <Link href="/" onClick={() => setMobileOpen(false)} className="text-slate-200 py-2">Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="text-slate-200 py-2">About</Link>
            <Link href="/login" onClick={() => setMobileOpen(false)} className="text-slate-200 py-2">Login</Link>
          </div>
        )}
      </nav>

      {/* LOGIN FORM */}
      <div className="flex items-center justify-center min-h-screen px-4 pt-28 pb-6">
        <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-xl">

          <header className="mb-6 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-sm text-gray-400 mt-1">Sign in to continue</p>
          </header>

          <form onSubmit={handleLogin} className="space-y-4">

            {/* Email */}
            <div className="flex items-center gap-3 px-3 py-2 bg-gray-800 rounded-lg border border-gray-700">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none text-gray-100"
                required
              />
            </div>

            {/* Password */}
            <div className="flex items-center gap-3 px-3 py-2 bg-gray-800 rounded-lg border border-gray-700">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type={showPwd ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="w-full bg-transparent outline-none text-gray-100"
                required
              />
              <button type="button" onClick={() => setShowPwd(!showPwd)}>
                {showPwd ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
              </button>
            </div>

            {/* Error */}
            {error && <p className="text-red-400 text-sm">{error}</p>}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-semibold mt-2"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}