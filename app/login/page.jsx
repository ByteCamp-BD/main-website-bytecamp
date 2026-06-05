"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
// প্রয়োজনীয় সকল আইকন ইম্পোর্ট করা হয়েছে
import { 
  Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, Terminal,
  ChevronDown, Menu, X
} from 'lucide-react';

// কাস্টম বাটন কম্পোনেন্ট
const Button = ({ children, component: Component = 'button', href, className, ...props }) => {
  if (href) {
    return (
      <Link href={href} className={`px-5 py-2.5 rounded-xl font-bold transition-all text-sm inline-block text-center ${className}`} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={`px-5 py-2.5 rounded-xl font-bold transition-all text-sm ${className}`} {...props}>
      {children}
    </button>
  );
};

export default function ByteCampLogin() {
  const router = useRouter();

  // Navbar States
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Form States
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging into ByteCamp with:', formData);
  };

  return (
    <div className="min-h-screen bg-[#06060c] text-gray-100 font-sans flex flex-col justify-between relative overflow-hidden">
      
      {/* 🧭 NAVBAR SECTION */}
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
              <button className="flex items-center text-slate-200 font-medium bg-transparent border-none cursor-pointer outline-none">
                ক্যাটাগরিজ <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-6 left-0 bg-gray-800 border border-gray-700 rounded-lg shadow-lg w-48 py-2 z-50">
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
              <Button
                component={Link}
                href="/register"
                className="bg-gradient-to-r from-teal-500 to-emerald-400 text-white hover:opacity-90"
              >
                Register
              </Button>
            </div>

            {/* Login Button */}
            <div className="hidden sm:block">
              <Button
                component={Link}
                href="/login"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90"
              >
                Login
              </Button>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-white/5 transition border-none bg-transparent cursor-pointer"
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
              <div className="absolute top-16 right-4 bg-slate-900 p-4 rounded-lg shadow-lg flex flex-col gap-3 md:hidden min-w-[200px] border border-gray-800 z-50">
                <Link href="/" className="text-white py-2 px-3 rounded hover:bg-white/10" onClick={() => setMobileOpen(false)}>Home</Link>
                <Link href="/courses" className="text-white py-2 px-3 rounded hover:bg-white/10" onClick={() => setMobileOpen(false)}>Courses</Link>
                <Link href="/about" className="text-white py-2 px-3 rounded hover:bg-white/10" onClick={() => setMobileOpen(false)}>About</Link>
                <Link href="/events" className="text-white py-2 px-3 rounded hover:bg-white/10" onClick={() => setMobileOpen(false)}>BootCamp/Events</Link>
                <Link href="/exclusive-batch" className="text-white py-2 px-3 rounded hover:bg-white/10" onClick={() => setMobileOpen(false)}>Exclusive Batch</Link>

                <button
                  onClick={() => {
                    setMobileOpen(false);
                    router.push("/register");
                  }}
                  className="mt-2 bg-white text-slate-900 py-2 rounded-lg font-medium hover:bg-gray-200 cursor-pointer border-none w-full"
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* 📝 LOGIN FORM SECTION */}
      <div className="flex-grow flex items-center justify-center px-4 py-28 md:py-36 relative z-10">
        {/* 🌌 Background Neon Glow */}
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse z-0" />
        <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none z-0" />
        
        {/* 💻 Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#141425_1px,transparent_1px),linear-gradient(to_bottom,#141425_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-25 z-0" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md bg-gray-900/40 backdrop-blur-xl border border-gray-800 p-8 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] relative z-10"
        >
          
          {/* 🚀 ByteCamp Brand Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-3">
              <div className="relative group p-1.5 bg-gray-950 rounded-2xl border border-gray-800 shadow-xl">
                <Image 
                  src="/ByteCamp logo.jpg" 
                  alt="ByteCamp Logo" 
                  width={56} 
                  height={56} 
                  className="rounded-xl transition-transform duration-500 group-hover:rotate-12"
                />
                <div className="absolute -bottom-1 -right-1 bg-teal-500 rounded-full p-1 border-2 border-gray-950">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-teal-200 to-blue-400">
              ByteCamp
            </h2>
            <p className="text-xs text-slate-400 mt-1.5 flex items-center justify-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-teal-400" />
              Build your dream and career without obstacles.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Email Input */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-teal-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="you@bytecamp.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-950/80 border border-gray-800 rounded-xl text-slate-200 placeholder-slate-700 outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all text-base"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Password
                </label>
                <Link href="/forgot-password" className="text-xs text-teal-400 hover:text-teal-300 transition-colors">
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-teal-400 transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 bg-gray-950/80 border border-gray-800 rounded-xl text-slate-200 placeholder-slate-700 outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all text-base"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 transition-colors border-none bg-transparent cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* ⚡ Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(20, 184, 166, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-2 py-3.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 group transition-all duration-300 border-none cursor-pointer text-base"
            >
              <span>Sign In to Camp</span> 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>

          {/* 🔗 Links */}
          <div className="mt-8 pt-6 border-t border-gray-800/60 text-center space-y-3">
            <p className="text-xs text-slate-500">
              New to our platform?{' '}
              <Link href="/register" className="text-teal-400 font-medium hover:underline transition-all">
                Create an account
              </Link>
            </p>
          </div>

        </motion.div>
      </div>

      {/* 🧾 FOOTER SECTION */}
      <footer className="bg-gray-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/ByteCamp logo.jpg" alt="ByteCamp" width={32} height={32} className="rounded-lg" />
                <span className="text-xl font-bold text-slate-100">ByteCamp</span>
              </div>
              <p className="text-sm leading-relaxed">Let's build your dream and career without any obstacles.</p>
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
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; 2026 ByteCamp. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}