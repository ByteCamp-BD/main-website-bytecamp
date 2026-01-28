"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import { Eye, EyeOff } from "lucide-react";

export default function ByteCampRegistrationPage() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    country_code: "+880",
    phone: "",
    known_as: "",
    password: "",
    confirm_password: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ✅ No API – only local state
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Fake submit (no backend)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert(
        "⚠️ Website under development.\nRegistration saved locally only."
      );
      setLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/ByteCamp logo.jpg"
              alt="ByteCamp"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">ByteCamp</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-teal-400">হোম</Link>
            <Link href="/about" className="hover:text-teal-400">এবাউট</Link>
          </div>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                variant="contained"
                className="bg-gradient-to-r from-red-500 to-red-400 text-white"
              >
                Logout
              </Button>
            ) : (
              <Button
                component={Link}
                href="/login"
                variant="contained"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-12 text-center bg-gradient-to-b from-gray-800 to-black">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ByteCamp Registration
        </h1>
        <p className="text-gray-300">
          দুঃখিত! ওয়েবসাইট বর্তমানে ডেভেলপমেন্টে আছে।
        </p>
      </section>

      {/* FORM */}
      <div className="flex justify-center px-6">
        <div className="max-w-xl w-full bg-white/5 backdrop-blur-md rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded bg-black border border-gray-700"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 rounded bg-black border border-gray-700"
              required
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-2 rounded bg-black border border-gray-700"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            {/* Agree */}
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
              />
              I agree to the terms
            </label>

            <button
              disabled={!form.agree || loading}
              className="w-full py-2 bg-teal-500 rounded font-semibold"
            >
              {loading ? "Submitting..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
