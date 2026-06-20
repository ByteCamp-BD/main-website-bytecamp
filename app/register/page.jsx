"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
// আপনার নববার ও ফর্মের জন্য প্রয়োজনীয় সকল আইকন
import {
  Mail, Lock, User, Eye, EyeOff, ArrowRight, Sparkles,
  Terminal, Phone, HelpCircle, ChevronDown, Menu, X
} from 'lucide-react';

// কাস্টম বাটন ডিজাইন
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

export default function ByteCampRegisterPage() {
  const router = useRouter();

  // Navbar States
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Form States
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    howHeard: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToTerms) return;
    console.log('Registering into ByteCamp with:', formData);
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
                variant="contained"
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
                variant="contained"
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
                    router.push("/login");
                  }}
                  className="mt-2 bg-white text-slate-900 py-2 rounded-lg font-medium hover:bg-gray-200 cursor-pointer border-none w-full"
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* 📝 REGISTER FORM SECTION */}
      <div className="flex-grow flex items-center justify-center px-6 py-28 md:py-36 relative z-10">
        {/* 🌌 Background Neon Glow Effects */}
        <div className="absolute top-[10%] right-[-10%] w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse z-0" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none z-0" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-2xl bg-gray-900/40 backdrop-blur-xl border border-gray-800 p-12 md:p-14 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.9)] relative z-10"
        >
          {/* Brand Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-5">
              <div className="relative group p-2.5 bg-gray-950 rounded-2xl border border-gray-800 shadow-xl">
                <Image src="/ByteCamp logo.jpg" alt="ByteCamp Logo" width={76} height={76} className="rounded-xl transition-transform duration-500 group-hover:rotate-12" />
                <div className="absolute -bottom-1 -right-1 bg-teal-500 rounded-full p-1 border-2 border-gray-950">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <h2 className="text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-teal-200 to-blue-400">
              Join ByteCamp
            </h2>
            <p className="text-lg text-slate-400 mt-2.5 flex items-center justify-center gap-2">
              <Terminal className="w-5 h-5 text-teal-400" />
              Start your tech journey with us today.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Full Name */}
            <div>
              <label className="block text-base font-extrabold uppercase tracking-wider text-slate-300 mb-3">Full Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-teal-400 transition-colors">
                  <User className="w-6 h-6" />
                </div>
                <input
                  type="text" required placeholder="Mesbah Uddin Yusuf"
                  className="w-full pl-14 pr-5 py-4 bg-gray-950/80 border border-gray-800 rounded-xl text-slate-100 placeholder-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-all text-lg font-medium"
                  value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-base font-extrabold uppercase tracking-wider text-slate-300 mb-3">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-teal-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <input
                  type="email" required placeholder="you@bytecamp.com"
                  className="w-full pl-14 pr-5 py-4 bg-gray-950/80 border border-gray-800 rounded-xl text-slate-100 placeholder-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-all text-lg font-medium"
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-base font-extrabold uppercase tracking-wider text-slate-300 mb-3">Phone Number</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-teal-400 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <input
                  type="tel" required placeholder="017XXXXXXXX"
                  className="w-full pl-14 pr-5 py-4 bg-gray-950/80 border border-gray-800 rounded-xl text-slate-100 placeholder-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-all text-lg font-medium"
                  value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Create Password */}
            <div>
              <label className="block text-base font-extrabold uppercase tracking-wider text-slate-300 mb-3">Create Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-teal-400 transition-colors">
                  <Lock className="w-6 h-6" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'} required placeholder="••••••••"
                  className="w-full pl-14 pr-14 py-4 bg-gray-950/80 border border-gray-800 rounded-xl text-slate-100 placeholder-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-all text-lg font-medium"
                  value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button" className="absolute inset-y-0 right-0 pr-5 flex items-center text-slate-500 hover:text-slate-300 transition-colors border-none bg-transparent cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* How did you hear about us */}
            <div>
              <label className="block text-base font-extrabold uppercase tracking-wider text-slate-300 mb-3">How did you hear about us?</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-teal-400 transition-colors">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <select
                  required
                  className="w-full pl-14 pr-12 py-4 bg-gray-950/80 border border-gray-800 rounded-xl text-slate-400 focus:text-slate-100 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 transition-all text-lg font-medium appearance-none cursor-pointer"
                  value={formData.howHeard} onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}
                >
                  <option value="" disabled hidden>Select an option</option>
                  <option value="facebook" className="bg-gray-950 text-slate-200">Facebook / Social Media</option>
                  <option value="friends" className="bg-gray-950 text-slate-200">Friends / Family</option>
                  <option value="programming_contest" className="bg-gray-950 text-slate-200">Programming Contest</option>
                  <option value="youtube" className="bg-gray-950 text-slate-200">YouTube</option>
                  <option value="other" className="bg-gray-950 text-slate-200">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none text-slate-500">
                  <span className="text-[14px]">▼</span>
                </div>
              </div>
            </div>

            {/* Terms and Privacy Checkbox */}
            <div className="flex items-start gap-4 pt-3 select-none">
              <input
                type="checkbox" id="terms" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-6 h-6 mt-0.5 rounded border-gray-800 bg-gray-950/80 accent-teal-500 text-teal-500 cursor-pointer"
              />
              <label htmlFor="terms" className="text-base text-slate-400 leading-relaxed cursor-pointer">
                I agree to the{' '}
                <Link href="/terms-and-conditions" className="text-teal-400 hover:underline font-bold">Terms of Service</Link>
                {' '}and{' '}
                <Link href="/privacy-policy" className="text-teal-400 hover:underline font-bold">Privacy Policy</Link>.
              </label>
            </div>

            {/* ⚡ SUBMIT BUTTON (এটিকে আরও বড় ও আকর্ষণীয় করা হয়েছে) */}
            <motion.button
              whileHover={agreedToTerms ? { scale: 1.02, boxShadow: "0 0 35px rgba(20, 184, 166, 0.5)" } : {}}
              whileTap={agreedToTerms ? { scale: 0.98 } : {}}
              type="submit" disabled={!agreedToTerms}
              className={`w-full mt-6 py-5 text-2xl font-black rounded-2xl shadow-xl flex items-center justify-center gap-4 group transition-all duration-300 border-none tracking-wide ${agreedToTerms
                  ? 'bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white cursor-pointer opacity-100'
                  : 'bg-gray-800 text-slate-500 cursor-not-allowed opacity-50'
                }`}
            >
              <span>Create Account</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </form>

          {/* Bottom Links */}
          <div className="mt-8 pt-6 border-t border-gray-800/60 text-center space-y-4">
            <p className="text-base text-slate-500">
              Already have an account?{' '}
              <Link href="/login" className="text-teal-400 font-bold hover:underline transition-all">
                Sign In
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* 🧾 FOOTER SECTION */}
      <footer className="bg-gray-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
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