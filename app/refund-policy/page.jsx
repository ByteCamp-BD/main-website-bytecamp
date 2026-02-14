'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RefundPolicy() {
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
              Categories
              <span className="ml-1">&#9662;</span>
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

          <Link href="/about-us" className="relative group">
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
            {mobileOpen ? "✖" : "☰"}
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

  const Footer = () => (
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
              <li><Link href="/about-us" className="hover:text-white">About us</Link></li>
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
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 pt-24">
      {/* Navbar */}
      <Navbar />

      {/* Refund Policy Content */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-teal-400 text-center">
            Refund and Return Policy
          </h1>

         

          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              আমাদের রিফান্ড পলিসি খুবই সহজ এবং শিক্ষার্থী-বান্ধব। নিচে বিস্তারিতভাবে উল্লেখ করা হলো 👇
            </p>

            <div className="space-y-4">
              <p>
                <span className="text-teal-400 font-semibold">১.</span> কোর্স পারচেজের ৭২ ঘন্টার মধ্যে আপনি রিফান্ড রিকোয়েস্ট করতে পারবেন।
              </p>
              <p>
                <span className="text-teal-400 font-semibold">২.</span> রিফান্ড রিকোয়েস্টের জন্য{" "}
                <span className="text-white font-medium">bytecampskill@gmail.com</span> এ বিস্তারিত লিখে ইমেইল করুন।
              </p>
              <p>
                <span className="text-teal-400 font-semibold">৩.</span> ইমেইল করার পর ৪৮ ঘণ্টার মধ্যে রেস্পন্স করা হবে এবং আরও বিস্তারিত কিছু তথ্য জানতে চাওয়া হতে পারে।
              </p>
              <p>
                <span className="text-teal-400 font-semibold">৪.</span> আমাদের মূল ফোকাস শেখানোর ক্ষেত্রে হওয়ায়, কোনো রিফান্ড প্রসেস সম্পূর্ণ হতে{" "}
                <span className="text-white font-medium">৩–৫ দিন</span> সময় লাগতে পারে।
              </p>
              <p>
                <span className="text-teal-400 font-semibold">৫.</span> আমরা যেহেতু ব্যাচ সিস্টেমে কাজ করি, তাই কোনো কোর্সের ওরিয়েন্টেশন শুরু হয়ে গেলে রিফান্ড রিকোয়েস্ট আর গ্রহণ করা হয় না। এরপর আমরা কোর্স শেখানোর দিকেই ফোকাস করি।
              </p>
            </div>

            <div className="mt-10 bg-gray-800/60 p-6 rounded-2xl border border-gray-700 shadow-lg text-center">
              <p className="text-lg text-gray-300">
                🎓 বাইটক্যাম্প সর্বদা শিক্ষার্থীর পাশে থাকে।  
                রিফান্ডের প্রয়োজন হলে আমাদের সাথে যোগাযোগ করুন:
              </p>
              <p className="mt-3 text-white font-semibold">
                📧 bytecampskill@gmail.com
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
