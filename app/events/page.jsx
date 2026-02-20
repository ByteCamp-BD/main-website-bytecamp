'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, Award, Heart, BookOpen  ,GraduationCap, Rocket, Trophy,CalendarDays ,Clock , ChevronDown, Menu, X } from "lucide-react";
import Button from "@mui/material/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function EventPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

 const Navbar = () => (
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
            <Link href="/about-us" className="block text-slate-200 font-medium">About</Link>
            <Link href="/exclusive-batch" className="block text-slate-200 font-medium">Exclusive Batch</Link>
          
          </div>
        </div>
      )}
    </nav>
  );

return (
  <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white pt-28">
    
    {/* Navbar */}
    <Navbar />

    {/* PAGE HEADER */}
    <section className="text-center mb-14 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
        ByteCamp Events
      </h1>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Participate in exciting competitions, quizzes and community events
        organized by ByteCamp BD.
      </p>
    </section>

    {/* EVENT GRID */}
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* EVENT CARD */}
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group relative bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-teal-500/10"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-teal-500/10 to-emerald-500/10" />

        {/* Image */}
        <div className="relative overflow-hidden">
          <Image
            src="/vote.png"
            alt="ByteCamp Election"
            width={400}
            height={220}
            className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
          />

          {/* Tag */}
          <span className="absolute top-4 left-4 bg-teal-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
            LIVE EVENT
          </span>
        </div>

        {/* CONTENT */}
        <div className="p-6 relative z-10">

          <h2 className="text-xl font-bold mb-4">
            ByteCamp Election 2026
          </h2>

          {/* Date */}
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <CalendarDays size={18} />
            <span>13 - 16 February 2026</span>
          </div>

          {/* Time */}
          <div className="flex items-center gap-2 text-gray-400 mb-6">
            <CalendarDays size={18} />
            <span>19 February</span>
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-teal-500 to-red-500 text-red shadow-lg hover:shadow-teal-500/30 transition"
         
          >
            Event Closed
          </motion.button>
        </div>
      </motion.div>

    </div>

    {/* PAGINATION */}
    <div className="flex justify-center items-center gap-4 mt-16 pb-16">
      <button className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
        {"<"}
      </button>

      <button className="w-10 h-10 rounded-lg bg-teal-500 text-white font-bold">
        1
      </button>

      <button className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
        {">"}
      </button>
    </div>

  </div>
);

}
