"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const team = [
  { name: "S M Mesbah Uddin Yusuf", role: "Chief Executive Officer (CEO)", photo: "mesbah.jpeg" },
  { name: "Mahmudul Hasan", role: "Chief Operating Officer (COO)", photo: "mypic.jpg" },
   { name: "Tahsin Imam Al Rafee ", role: "Manager", photo: "rafee.jpg" },
  { name: "Redowan Faraz", role: "Executive, Student Relationship & Growth", photo: "redowan.jpg" },
  { name: "Sayed Anowar ", role: "Web developer", photo: "sayed.jpg" },
  { name: "Mujahid", role: "Graphics designer", photo: "muja.png" },
  { name: "Minhajul islam", role: "Executive, Social Media", photo: "minhaj.jpg" },
  { name: "Farhana islam neha", role: "Intern", photo: "neha.jpg" },
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
  আমরা দেশের সেরা না–ও হতে পারি, কিন্তু আমরা সবসময় সেই সকল পরিশ্রমী ও আগ্রহী শিক্ষার্থীদের পাশে থাকি—
  যারা স্বপ্ন গড়ে, স্বপ্ন দেখে এবং সেই স্বপ্ন বাস্তবায়নে লড়ে যায়।
  তাদের পথচলাকে সহজ করতে, দিকনির্দেশনা দিতে এবং সামান্য হলেও সহায়তা করতে বাইটক্যাম্প  সর্বদা প্রস্তুত ।
</p>

      </motion.div>

      {/* Team Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-2 border-cyan-400 shadow-md">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-cyan-300 text-sm mt-1 mb-3">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 mt-16">
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
