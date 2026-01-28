"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import { Eye, EyeOff } from "lucide-react"; // 👁️ Add these icons
import { supabase } from "../../lib/supabase"; 

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
  const [showPassword, setShowPassword] = useState(false); // 👁️ state
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // 👁️ state

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.full_name || !form.email) return alert("Please fill name and email.");
    if (!form.password || !form.confirm_password)
      return alert("Please enter and confirm your password.");
    if (form.password !== form.confirm_password)
      return alert("Passwords do not match!");
    if (!form.agree)
      return alert("You must agree to Privacy Policy and Terms & Conditions.");

    setLoading(true);

    try {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();

      const { error } = await supabase
        .from("otp_verification")
        .insert([
          {
            email: form.email,
            otp,
            full_name: form.full_name,
            phone: `${form.country_code}${form.phone}`,
            known_as: form.known_as,
            password: form.password,
          },
        ]);

      if (error) throw error;

     await fetch("/api", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: form.email, otp }),
});


      sessionStorage.setItem("registrationForm", JSON.stringify(form));

      alert("✅ OTP sent to your email! Please check your inbox.");
      window.location.href = `/register/otp?email=${encodeURIComponent(form.email)}`;
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <Image src="/ByteCamp logo.jpg" alt="ByteCamp" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold">ByteCamp</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-teal-400">হোম</Link>
            <Link href="/about" className="hover:text-teal-400">এবাউট</Link>
          </div>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <Button onClick={handleLogout} variant="contained" className="bg-gradient-to-r from-red-500 to-red-400 text-white">
                Logout
              </Button>
            ) : (
              <Button component={Link} href="/login" variant="contained" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                Login
              </Button>
            )}
            <button className="md:hidden p-2 rounded-md hover:bg-white/5" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-12 text-center bg-gradient-to-b from-gray-800 to-black">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">ByteCamp Registration</h1>
        <p className="text-gray-300">Fill the form below to join ByteCamp.</p>
        <p className="text-gray-300">দুঃখিত! ওয়েবসাইট এর কাজ চলমান  অবস্থায় আছে তাই রেজিস্টার করলেও আপনার একাউন্ট সফল ভাবে তৈরী হবে না ।</p>
      </section>

      {/* FORM */}
      <div className="flex justify-center px-6">
        <div className="max-w-4xl w-full bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-gray-300 text-sm">Full name</label>
                <input
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  placeholder="e.g. Redowan Faraz"
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-300 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="text-gray-300 text-sm">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full mt-1 px-4 py-2 pr-10 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 cursor-pointer text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <label className="text-gray-300 text-sm">Confirm Password</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirm_password"
                  value={form.confirm_password}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full mt-1 px-4 py-2 pr-10 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400"
                  required
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-9 cursor-pointer text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>

              {/* Phone */}
              <div>
                <label className="text-gray-300 text-sm">Phone</label>
                <div className="flex gap-2">
                  <select
                    name="country_code"
                    value={form.country_code}
                    onChange={handleChange}
                    className="w-1/3 mt-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                  >
                    <option value="+880">🇧🇩 +880</option>
                    <option value="+91">🇮🇳 +91 (India)</option>
                    <option value="+1">🇺🇸 +1 (USA)</option>
                  </select>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-2/3 mt-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Known As */}
              <div>
                <label className="text-gray-300 text-sm">How do you know ByteCamp?</label>
                <select
                  name="known_as"
                  value={form.known_as}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-black border border-white/10 text-white"
                >
                  <option value="">Select an option</option>
                  <option value="social_media">Through Social Media</option>
                  <option value="friends">From Friends</option>
                  <option value="poster">College Poster / Banner</option>
                  <option value="event">Attended Previous Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Agree */}
              <div className="flex items-center text-gray-300 text-sm">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  className="mr-2 accent-emerald-500"
                />
                <span>
                  I agree to{" "}
                  <Link href="/privacy-policy" className="text-emerald-400 underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms-and-conditions" className="text-emerald-400 underline">
                    Terms & Conditions
                  </Link>.
                </span>
              </div>

              <button
                type="submit"
                disabled={!form.agree || loading}
                className="px-5 py-2 rounded-full font-semibold shadow bg-teal-500 hover:bg-teal-600 transition w-full"
              >
                {loading ? "Submitting..." : "Register"}
              </button>
            </form>
          </div>

          <div className="relative bg-gradient-to-b from-blue-700 via-indigo-700 to-purple-700 flex items-center justify-center p-6">
            <Image
              src="/download.png"
              alt="ByteCamp Registration Illustration"
              width={300}
              height={300}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 ByteCamp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
