"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Mail, Lock, User, Eye, EyeOff, ArrowRight, Sparkles,
  Terminal, Phone, HelpCircle, ChevronDown, Menu, X, CheckCircle2
} from 'lucide-react';

// ✅ Field component কে বাইরে নিয়ে আসা হয়েছে — এটাই মূল fix
// ভেতরে রাখলে প্রতি keystroke-এ re-mount হয়ে input focus হারায়
const Field = ({ label, icon: Icon, children, check }) => (
  <div className="group">
    <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-teal-400 transition-colors">
      {label}
    </label>
    <div className="relative flex items-center">
      <Icon className="absolute left-4 w-[18px] h-[18px] text-slate-500 group-focus-within:text-teal-400 transition-colors pointer-events-none z-10 shrink-0" />
      {children}
      {check && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute right-4 pointer-events-none"
        >
          <CheckCircle2 className="w-5 h-5 text-teal-400" />
        </motion.div>
      )}
    </div>
  </div>
);

const inputClass =
  'w-full pl-12 pr-12 py-4 bg-white/[0.04] border border-white/[0.09] rounded-2xl text-slate-100 placeholder-slate-600 outline-none focus:border-teal-500/60 focus:bg-teal-500/[0.04] focus:ring-4 focus:ring-teal-500/[0.08] transition-all text-[15px] font-medium leading-tight';

export default function ByteCampRegisterPage() {
  const router = useRouter();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    howHeard: '',
  });

  const fieldChecks = {
    fullName: formData.fullName.trim().length > 2,
    email: /\S+@\S+\.\S+/.test(formData.email),
    phone: formData.phone.trim().length >= 10,
    password: formData.password.length >= 6,
    howHeard: !!formData.howHeard,
  };

  const filledCount = Object.values(fieldChecks).filter(Boolean).length;
  const progress = Math.round((filledCount / 5) * 100);
  const allDone = filledCount === 5 && agreedToTerms;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!allDone) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    setSubmitted(true);
    console.log('Registering:', formData);
  };

  const update = (key) => (e) => setFormData((prev) => ({ ...prev, [key]: e.target.value }));

  const progressLabels = [
    { label: 'তথ্য', threshold: 0 },
    { label: 'যোগাযোগ', threshold: 40 },
    { label: 'নিরাপত্তা', threshold: 70 },
    { label: 'সম্পন্ন', threshold: 100 },
  ];

  return (
    <div className="min-h-screen bg-[#06060c] text-gray-100 font-sans flex flex-col justify-between relative overflow-hidden">

      {/* Animated background orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[15%] w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[140px] animate-pulse" />
        <div className="absolute -bottom-[20%] -left-[20%] w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[140px] animate-pulse [animation-delay:3s]" />
        <div className="absolute top-1/2 left-[40%] w-[400px] h-[400px] rounded-full bg-violet-500/[0.07] blur-[140px] animate-pulse [animation-delay:6s]" />
      </div>

      {/* Grid lines */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(20,184,166,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(20,184,166,.04) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/[0.08]"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/ByteCamp logo.jpg"
              alt="ByteCamp Logo"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className="text-xl font-bold text-slate-100">ByteCamp</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="relative group text-slate-200 font-medium text-sm">
              হোম
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all group-hover:w-full" />
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-slate-200 font-medium text-sm bg-transparent border-none cursor-pointer outline-none">
                ক্যাটাগরিজ <ChevronDown className="w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-7 left-0 bg-gray-800 border border-gray-700 rounded-xl shadow-lg w-52 py-2 z-50">
                  <Link href="/courses?category=education" className="block px-4 py-2.5 text-slate-200 text-sm hover:bg-gray-700 transition">এডুকেশন</Link>
                  <Link href="/courses?category=skill-development" className="block px-4 py-2.5 text-slate-200 text-sm hover:bg-gray-700 transition">স্কিল ডেভেলপমেন্ট</Link>
                </div>
              )}
            </div>

            {[
              { href: '/about', label: 'এবাউট' },
              { href: '/exclusive-batch', label: 'এক্সক্লুসিভ ব্যাচ' },
              { href: '/events', label: 'বুটক্যাম্প / ইভেন্টস' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="relative group text-slate-200 font-medium text-sm">
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/register"
              className="hidden sm:inline-block px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-500 to-emerald-400 text-white hover:opacity-90 hover:shadow-[0_0_20px_rgba(20,184,166,.4)] transition-all"
            >
              Register
            </Link>
            <Link
              href="/login"
              className="hidden sm:inline-block px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90 hover:shadow-[0_0_20px_rgba(99,102,241,.4)] transition-all"
            >
              Login
            </Link>

            <button
              className="md:hidden p-2 rounded-md hover:bg-white/5 transition border-none bg-transparent cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6 text-slate-100" /> : <Menu className="w-6 h-6 text-slate-100" />}
            </button>

            {mobileOpen && (
              <div className="absolute top-16 right-4 bg-slate-900 p-4 rounded-xl shadow-lg flex flex-col gap-2 md:hidden min-w-[200px] border border-gray-800 z-50">
                {[
                  ['/', 'Home'],
                  ['/courses', 'Courses'],
                  ['/about', 'About'],
                  ['/events', 'BootCamp/Events'],
                  ['/exclusive-batch', 'Exclusive Batch'],
                ].map(([href, label]) => (
                  <Link key={href} href={href} className="text-white py-2 px-3 rounded-lg hover:bg-white/10 text-sm" onClick={() => setMobileOpen(false)}>
                    {label}
                  </Link>
                ))}
                <button
                  onClick={() => { setMobileOpen(false); router.push('/login'); }}
                  className="mt-2 bg-white text-slate-900 py-2 rounded-lg font-medium hover:bg-gray-200 cursor-pointer border-none w-full text-sm"
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.nav>

      {/* REGISTER FORM */}
      <div className="flex-grow flex items-center justify-center px-6 py-28 md:py-36 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-2xl relative"
        >
          <div className="bg-gray-900/40 backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-10 md:p-14 shadow-[0_0_80px_rgba(0,0,0,.8)] relative overflow-hidden">

            {/* shimmer top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent animate-pulse" />

            {/* Success overlay */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-[#06060c]/95 rounded-3xl flex flex-col items-center justify-center gap-5 z-50"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-20 h-20 rounded-full border-2 border-teal-500/30 flex items-center justify-center animate-pulse"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <p className="text-2xl font-black text-slate-100">স্বাগতম বাইটক্যাম্পে! 🎉</p>
                <p className="text-slate-500 text-sm">আপনার অ্যাকাউন্ট তৈরি হয়েছে</p>
              </motion.div>
            )}

            {/* Brand header */}
            <div className="text-center mb-10">
              <div className="inline-flex relative mb-5">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 border border-teal-500/30 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/ByteCamp logo.jpg"
                    alt="ByteCamp Logo"
                    width={80}
                    height={80}
                    className="rounded-2xl object-cover"
                  />
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center border-2 border-[#06060c]">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-teal-200 to-blue-400 mb-2">
              Build Your Skill With ByteCamp
              </h2>
              <p className="text-base text-slate-500 flex items-center justify-center gap-2">
                <Terminal className="w-4 h-4 text-teal-400 shrink-0" />
                আজই আপনার টেক যাত্রা শুরু করুন
              </p>
            </div>

            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {progressLabels.map(({ label, threshold }) => (
                  <span
                    key={label}
                    className={`text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                      progress >= threshold ? 'text-teal-400' : 'text-slate-600'
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">

              <Field label="পূর্ণ নাম" icon={User} check={fieldChecks.fullName}>
                <input
                  type="text"
                  required
                  placeholder="Minhajul Islam"
                  className={inputClass}
                  value={formData.fullName}
                  onChange={update('fullName')}
                />
              </Field>

              <Field label="ইমেইল ঠিকানা" icon={Mail} check={fieldChecks.email}>
                <input
                  type="email"
                  required
                  placeholder="you@bytecamp.com"
                  className={inputClass}
                  value={formData.email}
                  onChange={update('email')}
                />
              </Field>

              <Field label="ফোন নম্বর" icon={Phone} check={fieldChecks.phone}>
                <input
                  type="tel"
                  required
                  placeholder="017XXXXXXXX"
                  className={inputClass}
                  value={formData.phone}
                  onChange={update('phone')}
                />
              </Field>

              {/* Password field — eye button replaces check icon on the right */}
              <div className="group">
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-teal-400 transition-colors">
                  পাসওয়ার্ড তৈরি করুন
                </label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-4 w-[18px] h-[18px] text-slate-500 group-focus-within:text-teal-400 transition-colors pointer-events-none z-10 shrink-0" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    minLength={6}
                    className={inputClass}
                    value={formData.password}
                    onChange={update('password')}
                  />
                  <button
                    type="button"
                    className="absolute right-4 text-slate-500 hover:text-slate-300 transition-colors border-none bg-transparent cursor-pointer p-0 flex items-center z-10"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Select field — chevron replaces check icon on the right */}
              <div className="group">
                <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within:text-teal-400 transition-colors">
                  কীভাবে জানলেন?
                </label>
                <div className="relative flex items-center">
                  <HelpCircle className="absolute left-4 w-[18px] h-[18px] text-slate-500 group-focus-within:text-teal-400 transition-colors pointer-events-none z-10 shrink-0" />
                  <select
                    required
                    className={`${inputClass} appearance-none cursor-pointer ${
                      formData.howHeard ? 'text-slate-100' : 'text-slate-600'
                    }`}
                    value={formData.howHeard}
                    onChange={update('howHeard')}
                  >
                    <option value="" disabled hidden>একটি বিকল্প বেছে নিন</option>
                    <option value="facebook" className="bg-gray-950 text-slate-200">Facebook / Social Media</option>
                    <option value="friends" className="bg-gray-950 text-slate-200">বন্ধু / পরিবার</option>
                    <option value="contest" className="bg-gray-950 text-slate-200">Programming Contest</option>
                    <option value="youtube" className="bg-gray-950 text-slate-200">YouTube</option>
                    <option value="other" className="bg-gray-950 text-slate-200">অন্যান্য</option>
                  </select>
                  <ChevronDown className="absolute right-4 w-4 h-4 text-slate-500 pointer-events-none z-10" />
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => setAgreedToTerms((v) => !v)}
                  className={`w-6 h-6 min-w-[24px] rounded-lg border flex items-center justify-center transition-all cursor-pointer bg-transparent ${
                    agreedToTerms ? 'bg-teal-500/20 border-teal-500/60' : 'border-white/[0.12] bg-white/[0.04]'
                  }`}
                >
                  {agreedToTerms && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    </motion.div>
                  )}
                </button>
                <p className="text-sm text-slate-400 leading-relaxed">
                  আমি{' '}
                  <Link href="/terms-and-conditions" className="text-teal-400 hover:underline font-bold">
                    Terms of Service
                  </Link>{' '}
                  এবং{' '}
                  <Link href="/privacy-policy" className="text-teal-400 hover:underline font-bold">
                    Privacy Policy
                  </Link>{' '}
                  এর সাথে একমত।
                </p>
              </div>

              {/* Submit */}
              <motion.button
                whileHover={allDone ? { scale: 1.02, boxShadow: '0 0 35px rgba(20,184,166,.5)' } : {}}
                whileTap={allDone ? { scale: 0.98 } : {}}
                type="submit"
                disabled={!allDone || loading}
                className={`w-full mt-2 py-5 text-xl font-black rounded-2xl flex items-center justify-center gap-4 group transition-all duration-300 border-none tracking-wide ${
                  allDone
                    ? 'bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white cursor-pointer'
                    : 'bg-gray-800 text-slate-500 cursor-not-allowed opacity-50'
                }`}
              >
                {loading ? (
                  <svg className="w-6 h-6 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                ) : (
                  <>
                    <span>অ্যাকাউন্ট তৈরি করুন</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-800/60 text-center">
              <p className="text-sm text-slate-500">
                ইতিমধ্যে অ্যাকাউন্ট আছে?{' '}
                <Link href="/login" className="text-teal-400 font-bold hover:underline">
                  সাইন ইন করুন
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
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
