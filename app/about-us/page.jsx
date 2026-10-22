"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

// All team members in a single array, to display 3 per row perfectly
const team = [
  { name: "S M Mesbah Uddin Yusuf", role: "Chief Executive Officer (CEO)", photo: "m1.png" },
  { name: "Mahmudul Hasan", role: "Chief Operating Officer (COO)", photo: "h1.png" },
  { name: "Tahsin Imam Al Rafee ", role: "Manager", photo: "r1.png" },
  { name: "Suaid Mohammad ", role: "Executive, Student Relationship & Growth", photo: "s1.png" },
  { name: "Redowan Faraz", role: "Executive, Student Relationship & Growth", photo: "r2.png" },
  { name: "Sayed Anowar ", role: "Web developer", photo: "s2.png" },
  { name: "Mujahid", role: "Graphics designer", photo: "m21.png" },
  { name: "Minhajul islam", role: "Executive, Social Media", photo: "m2.png" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/ByteCamp logo.jpg"
            alt="ByteCamp"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-slate-100">ByteCamp</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="relative group">
            <span className="text-slate-200 font-medium">Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all group-hover:w-full"></span>
          </Link>

          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center text-slate-200 font-medium">
              Categories <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-8 left-0 bg-gray-800 border border-gray-700 rounded-lg shadow-lg w-48 py-2">
                <Link
                  href="/courses?category=education"
                  className="block px-4 py-2 text-slate-200 hover:bg-gray-700 transition"
                >
                  Education
                </Link>
                <Link
                  href="/courses?category=skill-development"
                  className="block px-4 py-2 text-slate-200 hover:bg-gray-700 transition"
                >
                  Skill Development
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="relative group">
            <span className="text-slate-200 font-medium">About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/exclusive-batch" className="relative group">
            <span className="text-slate-200 font-medium">Exclusive Batch</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all group-hover:w-full"></span>
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Link href="/courses">
              <button className="bg-gradient-to-r from-teal-500 to-emerald-400 text-white px-4 py-2 rounded-md">
                Get Started
              </button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-white/5 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-slate-100" /> : <Menu className="w-6 h-6 text-slate-100" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black/80 backdrop-blur-sm">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link href="/" className="block text-slate-200 font-medium">Home</Link>
            <Link href="/courses?category=education" className="block text-slate-200 font-medium">Education</Link>
            <Link href="/courses?category=skill-development" className="block text-slate-200 font-medium">Skill Development</Link>
            <Link href="/about" className="block text-slate-200 font-medium">About</Link>
            <Link href="/exclusive-batch" className="block text-slate-200 font-medium">Exclusive Batch</Link>
            <Link href="/courses">
              <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-400 text-white px-4 py-2 rounded-md mt-2">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-8 pt-32">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl font-extrabold text-cyan-400 mb-5">About Us</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-sm">
          আমরা দেশের সেরা না–ও হতে পারি, কিন্তু আমরা সবসময় সেই সকল পরিশ্রমী ও আগ্রহী শিক্ষার্থীদের পাশে থাকি—
          যারা স্বপ্ন গড়ে, স্বপ্ন দেখে এবং সেই স্বপ্ন বাস্তবায়নে লড়ে যায়।
          তাদের পথচলাকে সহজ করতে, দিকনির্দেশনা দিতে এবং সামান্য হলেও সহায়তা করতে বাইটক্যাম্প সর্বদা প্রস্তুত।
        </p>
      </motion.div>

     {/* Team Section — 3 members per row */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
    {team.map((member, i) => (
      <motion.div
        key={member.name}
        className="group flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.08 }}
      >
        {/* Phitron-style image */}
        <div className="relative mb-4 flex h-64 w-full max-w-[260px] items-end justify-center">
          {/* Blue geometric background */}
          <div
            className="absolute left-[12%] top-[12%] h-[68%] w-[76%] bg-gradient-to-br from-blue-700/70 via-blue-900/70 to-cyan-500/20 transition-all duration-500 group-hover:scale-105 group-hover:from-blue-500/80 group-hover:to-cyan-400/40"
            style={{
              clipPath:
                "polygon(0 0, 68% 24%, 100% 72%, 48% 100%, 0 56%)",
            }}
          />

          {/* Blue glow */}
          <div className="absolute inset-8 rounded-full bg-blue-500/0 blur-3xl transition duration-500 group-hover:bg-blue-500/30" />

          {/* Member photo */}
          <div className="relative z-10 h-full w-48 overflow-hidden">
            <Image
              src={member.photo.startsWith("/") ? member.photo : `/${member.photo}`}
              alt={member.name}
              width={240}
              height={280}
              className="h-full w-full object-contain object-bottom transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-90"
            />

            {/* Blue hover overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-600/40 via-blue-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>

        {/* Name */}
        <h3 className="mt-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300">
          {member.name}
        </h3>

        {/* Accent line */}
        <div className="mt-2 h-[2px] w-10 rounded-full bg-blue-500/70 transition-all duration-300 group-hover:w-16 group-hover:bg-cyan-300" />

        {/* Role */}
        <p className="mt-2 max-w-[280px] text-sm leading-6 text-slate-300">
          {member.role}
        </p>
      </motion.div>
    ))}
  </div>
</motion.div>

      {/* Footer */}
      <footer className="bg-gray-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Logo Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/ByteCamp logo.jpg"
                  alt="ByteCamp"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold text-slate-100">ByteCamp</span>
              </div>
              <p>Let's build your dream and career without any obstacles.</p>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="font-semibold mb-4 text-slate-100">Platform</h3>
              <ul className="space-y-2">
                <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
              </ul>
            </div>

            {/* Policy Links */}
            <div>
              <h3 className="font-semibold mb-4 text-slate-100">Our Policy</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-white">Terms and Conditions</Link></li>
                <li><Link href="/refund-policy" className="hover:text-white">Refund and Return Policy</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-4 text-slate-100">Categories</h3>
              <ul className="space-y-2">
                <li><Link href="/courses?category=skill-development" className="hover:text-white">Skill Development</Link></li>
                <li><Link href="/courses?category=education" className="hover:text-white">Education</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-slate-100">Contact</h3>
              <p>bytecampskill@gmail.com</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-slate-500">
            <p>&copy; 2026 ByteCamp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}