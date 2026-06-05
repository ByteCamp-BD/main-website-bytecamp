"use client"; 

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Calendar, Clock, Code, Award, CheckCircle2, 
  AlertTriangle, ShieldX, Trophy, Users, ChevronRight, ChevronDown, Menu, X 
} from 'lucide-react';

export default function CodeMindClash() {
  const [showModal, setShowModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Animation variants for reusability
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#080810] text-gray-100 font-sans selection:bg-purple-600 selection:text-white overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/ByteCamp logo.jpg" alt="ByteCamp" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold text-slate-100">ByteCamp</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="relative group">
              <span className="text-slate-200 font-medium">হোম</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all group-hover:w-full"></span>
            </Link>

            {/* Category Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center text-slate-200 font-medium">
                ক্যাটাগরিজ <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-8 left-0 bg-gray-800 border border-gray-700 rounded-lg shadow-lg w-48 py-2">
                  <Link href="/courses?category=education" className="block px-4 py-2 text-slate-200 hover:bg-gray-700 transition">এডুকেশন</Link>
                  <Link href="/courses?category=skill-development" className="block px-4 py-2 text-slate-200 hover:bg-gray-700 transition">স্কিল ডেভেলপমেন্ট</Link>
                </div>
              )}
            </div>

            <Link href="/about" className="relative group">
              <span className="text-slate-200 font-medium">এবাউট</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/exclusive-batch" className="relative group">
              <span className="text-slate-200 font-medium">এক্সক্লুসিভ ব্যাচ</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/events" className="relative group">
              <span className="text-slate-200 font-medium">বুটক্যাম্প / ইভেন্টস </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all group-hover:w-full"></span>
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Register Button */}
            <div className="hidden sm:block">
              <Link 
                href="/register" 
                className="px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-teal-500 to-emerald-400 text-white shadow-md hover:opacity-90 transition-opacity"
              >
                Register
              </Link>
            </div>

            {/* Login Button */}
            <div className="hidden sm:block">
              <Link 
                href="/login" 
                className="px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md hover:opacity-90 transition-opacity"
              >
                Login
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-white/5 transition"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-slate-100" />
              ) : (
                <Menu className="w-6 h-6 text-slate-100" />
              )}
            </button>

            {/* Mobile Menu */}
            {mobileOpen && (
              <div className="absolute top-16 right-4 w-56 bg-slate-900 border border-gray-800 p-4 rounded-xl shadow-2xl flex flex-col gap-2 md:hidden z-50">
                <Link href="/" className="text-white py-2 px-3 rounded hover:bg-white/10 transition" onClick={() => setMobileOpen(false)}>Home</Link>
                <Link href="/courses" className="text-white py-2 px-3 rounded hover:bg-white/10 transition" onClick={() => setMobileOpen(false)}>Courses</Link>
                <Link href="/about" className="text-white py-2 px-3 rounded hover:bg-white/10 transition" onClick={() => setMobileOpen(false)}>About</Link>
                <Link href="/events" className="text-white py-2 px-3 rounded hover:bg-white/10 transition" onClick={() => setMobileOpen(false)}>BootCamp/Events</Link>
                <Link href="/exclusive-batch" className="text-white py-2 px-3 rounded hover:bg-white/10 transition" onClick={() => setMobileOpen(false)}>Exclusive Batch</Link>
                <Link 
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 text-center bg-white text-slate-900 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* 1. HUGE ANIMATED BANNER */}
      <div className="relative min-h-[90vh] pt-20 flex flex-col items-center justify-center text-center px-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-blue-900/20 to-[#080810] border-b border-gray-800/50">
        
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/3 left-1/3 w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Floating Code Snippet Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900/80 border border-purple-500/30 text-purple-400 text-sm font-mono shadow-lg backdrop-blur-sm"
        >
          <Terminal className="w-4 h-4 animate-pulse" />
          <span>🚀 int main {'{ cout<<"Welcome!☺️ }'}</span>
        </motion.div>

        {/* Main Head Title */}
        <motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-400 md:whitespace-nowrap"
>
  CodeMind Clash with ByteCamp - 2026
</motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-400 font-medium max-w-2xl mb-10 px-4"
        >
          A Battlefield of Logic, Speed, and Competitive Excellence.
        </motion.p>

        {/* Top Floating Register Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(168, 85, 247, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
          className="relative group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl text-lg shadow-xl transition-all duration-300 border border-purple-400/20"
        >
          <span className="relative z-10 flex items-center gap-2">
            Register Now <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.button>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">

        {/* 2. PRELIMINARY ROUND & timeline TRACK */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative bg-gradient-to-b from-gray-900/60 to-gray-900/20 p-8 md:p-12 rounded-3xl border border-gray-800 backdrop-blur-md"
        >
         

          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400 flex items-center gap-3">
            <Terminal className="w-8 h-8" /> Preliminary Round Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-5 rounded-2xl bg-gray-950/50 border border-gray-800/80">
              <Calendar className="w-6 h-6 text-purple-400 mb-3" />
              <div className="text-sm text-gray-500">MCQ Event Date</div>
              <div className="text-lg font-bold text-gray-200">16 June 2026</div>
              <div className="text-xs text-gray-400">Tuesday</div>
            </div>
           <div className="p-5 rounded-2xl bg-gray-950/50 border border-gray-800/80">
              <Calendar className="w-6 h-6 text-purple-400 mb-3" />
              <div className="text-sm text-gray-500">Contest Event Date</div>
              <div className="text-lg font-bold text-gray-200">18 June 2026</div>
              <div className="text-xs text-gray-400">Tuesday</div>
            </div>
            <div className="p-5 rounded-2xl bg-gray-950/50 border border-gray-800/80">
              <Clock className="w-6 h-6 text-blue-400 mb-3" />
              <div className="text-sm text-gray-500">Contest & Mcq Duration</div>
              <div className="text-lg font-bold text-gray-200">3 Hours</div>
              <div className="text-xs text-gray-400">8:00 PM - 11:00 PM</div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-950/50 border border-gray-800/80">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-3" />
              <div className="text-sm text-gray-500">Registration Opens</div>
              <div className="text-lg font-bold text-gray-200">Coming Soon</div>
              <div className="text-xs text-emerald-400">Stay tuned!</div>
            </div>

            {/* <div className="p-5 rounded-2xl bg-gray-950/50 border border-gray-800/80">
              <AlertTriangle className="w-6 h-6 text-red-400 mb-3" />
              <div className="text-sm text-gray-500">Reg. Deadline</div>
              <div className="text-lg font-bold text-gray-200">28 Dec 2026</div>
              <div className="text-xs text-red-400">Strictly enforced</div>
            </div> */}
          </div>

          {/* ROADMAP TIMELINE */}
          <div className="border-t border-gray-800 pt-10">
            <h3 className="text-xl font-semibold mb-6 text-gray-400">Event Roadmap</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              
              <div className="relative pl-6 border-l-2 border-purple-500/50">
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1.5 shadow-[0_0_10px_#a855f7]" />
                <h4 className="font-bold text-white text-lg">Preliminary Round</h4>
                <p className="text-sm text-gray-400 mt-1">June 2026. Online assessment phase containing coding & conceptual questions.</p>
              </div>

              <div className="relative pl-6 border-l-2 border-blue-500/30">
                <div className="absolute w-4 h-4 bg-blue-500/50 rounded-full -left-[9px] top-1.5" />
                <h4 className="font-bold text-gray-400 text-lg">National Round</h4>
                <p className="text-sm text-gray-500 mt-1">Coming up next in October. Shortlisted candidates fight for the main stage.</p>
              </div>

              <div className="relative pl-6 border-l-2 border-amber-500/30">
                <div className="absolute w-4 h-4 bg-amber-500/50 rounded-full -left-[9px] top-1.5" />
                <h4 className="font-bold text-gray-400 text-lg">Grand Finale</h4>
                <p className="text-sm text-gray-500 mt-1">December. The ultimate physical/on-site battlefield for championship.</p>
              </div>

            </div>
          </div>
        </motion.section>

        {/* 3. EVENT DETAILS (PLATFORM & LANGUAGES) */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeInUp} className="bg-gray-900/40 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-purple-400 flex items-center gap-2">
              <Code className="w-6 h-6" /> Contest Format
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
             প্রাথমিক পর্বে অংশগ্রহণকারীদের প্রোগ্রামিং দক্ষতা, সমস্যা সমাধানের ক্ষমতা এবং যৌক্তিক বিশ্লেষণী চিন্তাশক্তি যাচাই করা হবে। এ জন্য কোডিং চ্যালেঞ্জ ও মূল্যায়ন কার্যক্রম পরিচালনার লক্ষ্যে আধুনিক অনলাইন প্ল্যাটফর্ম ব্যবহার করা হবে।
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-purple-500" />
                <span><strong>HackerRank Contest:</strong> Core programming and problem solving environment.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-blue-400" />
                <span><strong>Quiz & MCQ Session:</strong> Computer Science fundamentals and theoretical logic.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gray-900/40 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-purple-400 flex items-center gap-2">
              <Terminal className="w-6 h-6" /> Allowed Languages
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
           প্রতিযোগীরা নিচে উল্লেখিত পেশাদার প্রোগ্রামিং ভাষাগুলোর মধ্যে থেকে নিজেদের পছন্দ অনুযায়ী ভাষা ব্যবহার করে প্রতিযোগিতার সমস্যা সমাধান করতে পারবে:
            </p>
            <div className="flex flex-wrap gap-3">
              {['C', 'C++', 'Python'].map((lang) => (
                <span key={lang} className="px-4 py-2 bg-gray-950 rounded-xl border border-gray-800 font-mono text-sm text-gray-300 hover:border-purple-500/50 transition-colors">
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* 4. RULES & ACADEMIC INTEGRITY */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-gray-900/30 p-8 md:p-12 rounded-3xl border border-red-900/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-400 flex items-center gap-3">
            <ShieldX className="w-8 h-8" /> Event Rules & Regulations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gray-950/60 border border-gray-800 hover:border-red-900/30 transition-all">
              <h4 className="text-lg font-bold text-gray-200 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" /> Plagiarism & Copying
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
কোনো ধরনের কোড কপি করা বা কোড শেয়ার করা সম্পূর্ণভাবে নিষিদ্ধ। অন্য কারো কোড ব্যবহার করলে বা প্লেজিয়ারিজম ধরা পড়লে সরাসরি প্রতিযোগিতা থেকে ডিসকোয়ালিফাই করা হবে। ByteCamp-এর AI-ভিত্তিক মনিটরিং সিস্টেম “ByCam” প্রতিটি সাবমিশন বিশ্লেষণ করবে এবং যেকোনো ধরনের অনিয়ম বা কপি করা কন্টেন্ট শনাক্ত করতে সক্ষম। তাই সকল অংশগ্রহণকারীকে কঠোরভাবে সতর্ক করা হচ্ছে যে তারা শুধুমাত্র নিজের দক্ষতার ভিত্তিতেই প্রতিযোগিতায় অংশগ্রহণ করবে।              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-950/60 border border-gray-800 hover:border-red-900/30 transition-all">
              <h4 className="text-lg font-bold text-gray-200 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" /> False Information
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
             Registration form-এ কোনো ধরনের ভুল বা মিথ্যা তথ্য (যেমন ভুল profile URL, fake identity বা ভুল HackerRank username) প্রদান করা যাবে না। সঠিক এবং যাচাইকৃত তথ্য প্রদান করা বাধ্যতামূলক। ভুল তথ্য প্রদান করলে সরাসরি registration বাতিল করা হবে এবং প্রয়োজনে অ্যাকাউন্ট টার্মিনেশন পর্যন্ত ব্যবস্থা নেওয়া হতে পারে। প্রতিযোগিতার স্বচ্ছতা ও ন্যায্যতা বজায় রাখতে ByteCamp এই নিয়ম কঠোরভাবে অনুসরণ করে।
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-950/60 border border-gray-800 hover:border-red-900/30 transition-all col-span-1 md:col-span-2">
              <h4 className="text-lg font-bold text-amber-400 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Consequences of Misconduct
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
               কোনো ধরনের অনিয়ম, নকল করা বা সিস্টেম পলিসি ভঙ্গ করলে তাৎক্ষণিকভাবে নিয়ম অনুযায়ী ইভেন্ট থেকে ব্ল্যাকলিস্ট করা হবে। ByteCamp-এর ভবিষ্যৎ যেকোনো ইভেন্টে অংশগ্রহণের সুযোগ স্থায়ীভাবে বাতিল করা হতে পারে। প্রতিযোগিতার ন্যায্যতা ও স্বচ্ছতা বজায় রাখতে সকল অংশগ্রহণকারীকে সর্বোচ্চ সততা ও নৈতিকতা বজায় রাখার জন্য কঠোরভাবে নির্দেশ দেওয়া হচ্ছে।
              </p>
            </div>
          </div>
        </motion.section>

        {/* 5. PRIZES AND REWARDS */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-3 flex justify-center items-center gap-2">
              <Trophy className="w-8 h-8" /> Prizes & Rewards
            </h2>
            <p className="text-sm text-gray-400">Hard work deserves ultimate recognition. Push your limits.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-gradient-to-b from-gray-900 via-gray-900/40 to-transparent border border-gray-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-gray-950 flex items-center justify-center mx-auto mb-4 border border-gray-800">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-bold text-white mb-2">Preliminary Round</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
               প্রিলিমিনারি রাউন্ডে সরাসরি কোনো পার্কস না থাকলেও এটি অংশগ্রহণকারীদের দক্ষতা উন্নয়ন, বাস্তব অভিজ্ঞতা অর্জন এবং সমস্যা সমাধানের সক্ষমতা বৃদ্ধিতে গুরুত্বপূর্ণ ভূমিকা রাখবে। পরবর্তী রাউন্ডের বিস্তারিত তথ্য অংশগ্রহণকারীদের পারফরম্যান্স ট্র্যাকিং অনুযায়ী ধাপে ধাপে আনলক করা হবে।
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-gradient-to-b from-gray-900 via-gray-900/40 to-transparent border border-gray-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-gray-950 flex items-center justify-center mx-auto mb-4 border border-gray-800">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-bold text-white mb-2">National Round Perks</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                National Round-e achieve korbe <strong>choto choto special items</strong>, complementary rewards ebong performance-based recognitions.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-gradient-to-b from-gray-900 via-gray-900/40 to-transparent border border-amber-500/20 text-center relative">
              <div className="absolute inset-0 bg-amber-500/5 rounded-2xl blur-xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-amber-950/30 flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
                  <Trophy className="w-6 h-6 text-amber-400" />
                </div>
                <h4 className="font-bold text-amber-400 mb-2">Grand Finale Rewards</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Grand Final-er <strong>Top 5 winners</strong>-der jonno thakbe exclusive main heavy rewards! Grand finale reach kora prottek performance-er jonno guaranteed <strong>Bishesh Shomman (Special Honours) & mini rewards</strong> thakbe.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

      </div>

      {/* REGISTRATION SYSTEM MODAL (REGISTRATION NOT STARTED YET) */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md p-8 rounded-2xl bg-gray-950 border border-purple-500/30 text-center shadow-2xl z-10"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-14 h-14 bg-purple-950/50 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Registration Not Started</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
               CodeMind Clash with ByteCamp 2026-এর অফিসিয়াল রেজিস্ট্রেশন এখনো শুরু হয়নি।
  রেজিস্ট্রেশন চালু হলে আমাদের কমিউনিটি ও অফিসিয়াল প্ল্যাটফর্মে জানিয়ে দেওয়া হবে।
  সর্বশেষ আপডেটের জন্য আমাদের সাথে যুক্ত থাকুন।
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3 bg-gray-900 hover:bg-gray-850 text-gray-300 hover:text-white font-medium rounded-xl border border-gray-800 transition-colors"
              >
                Got it, Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* INTEGRATED FOOTER */}
      <footer className="bg-gray-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/ByteCamp logo.jpg" alt="ByteCamp" width={32} height={32} className="rounded-lg" />
                <span className="text-xl font-bold text-slate-100">ByteCamp</span>
              </div>
              <p className="text-sm">Let's build your dream and career without any obstacles.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-100">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/founder-coo" className="hover:text-white transition-colors">View Details our director</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-100">Our Policy</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</Link></li>
                <li><Link href="/refund-policy" className="hover:text-white transition-colors">Refund and Return Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-100">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/courses?category=skill-development" className="hover:text-white transition-colors">Skill Development</Link></li>
                <li><Link href="/courses?category=education" className="hover:text-white transition-colors">Education</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-100">Contact</h3>
              <p className="text-sm">bytecampskill@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-slate-500 text-xs">
            <p>&copy; {new Date().getFullYear()} ByteCamp. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}