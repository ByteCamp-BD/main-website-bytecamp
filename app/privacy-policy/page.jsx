'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
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
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-24">
      {/* Navbar */}
      <Navbar />

      {/* Privacy Policy Content */}
      <div className="px-6 py-16 md:px-20 max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-teal-400">Privacy Policy of ByteCamp</h1>
        
        <p className="text-gray-300 leading-relaxed">
          বাইটক্যাম্প (“we”, “our”, “us”) আপনার ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষা করতে প্রতিশ্রুতিবদ্ধ। 
          এই Privacy Policy-তে আমরা কীভাবে আপনার তথ্য সংগ্রহ করি, ব্যবহার করি এবং সুরক্ষা করি তা ব্যাখ্যা করা হয়েছে।
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-teal-300 mb-3">1. আমরা যে তথ্য সংগ্রহ করি</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>নাম</li>
            <li>ইমেইল ঠিকানা (যেমন: abdxgmail.com)</li>
            <li>যোগাযোগের তথ্য</li>
            <li>শিক্ষাগত তথ্য (কোর্সে ভর্তি সম্পর্কিত)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-300 mb-3">2. আমরা তথ্য কীভাবে ব্যবহার করি</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>আমাদের কোর্স এবং সেবাগুলো প্রদান ও উন্নত করার জন্য</li>
            <li>শিক্ষার্থীকে প্রয়োজনীয় তথ্য, নোটিশ এবং আপডেট পাঠানোর জন্য</li>
            <li>প্রশাসনিক বা নিরাপত্তা বিষয়ক প্রয়োজনে যোগাযোগের জন্য</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-300 mb-3">3. তথ্য শেয়ারিং</h2>
          <p className="text-gray-300 leading-relaxed">
            আমরা কোনো অবস্থাতেই আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রি, ভাড়া বা অপ্রয়োজনীয়ভাবে প্রকাশ করি না। তবে, আইনগত প্রয়োজনে (যেমন: কোর্টের আদেশ) শেয়ার করতে হতে পারে।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-300 mb-3">4. কুকিজ এবং ওয়েবসাইট ব্যবহার</h2>
          <p className="text-gray-300 leading-relaxed">
            আমাদের ওয়েবসাইট নির্মাধীন অবস্থায় আছে। যখন চালু হবে তখন আমরা আমাদের ওয়েবসাইট বা অনলাইন প্ল্যাটফর্মে কুকিজ ব্যবহার করতে পারি যাতে ব্যবহারকারীর অভিজ্ঞতা উন্নত করা যায়। আপনি চাইলে ব্রাউজারের সেটিংস থেকে কুকিজ বন্ধ করতে পারবেন।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-300 mb-3">5. ডেটা নিরাপত্তা</h2>
          <p className="text-gray-300 leading-relaxed">
            আমরা যুক্তিসঙ্গত টেকনিক্যাল এবং প্রশাসনিক ব্যবস্থা গ্রহণ করি যাতে আপনার তথ্য নিরাপদ থাকে। তবে ইন্টারনেট-ভিত্তিক ডেটা ট্রান্সমিশনের ক্ষেত্রে ১০০% নিরাপত্তা নিশ্চিত করা সম্ভব নয়।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-300 mb-3">6. আপনার অধিকার</h2>
          <p className="text-gray-300 leading-relaxed">
            আপনি চাইলে আমাদের কাছে থাকা আপনার ব্যক্তিগত তথ্য দেখতে, সংশোধন করতে বা মুছে ফেলার অনুরোধ করতে পারেন।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-300 mb-3">7. যোগাযোগের তথ্য</h2>
          <p className="text-gray-300 leading-relaxed">
            Privacy Policy সম্পর্কিত যেকোনো প্রশ্ন বা অনুরোধের জন্য আমাদের সাথে যোগাযোগ করুন:
          </p>
          <p className="text-gray-200 mt-3">
            <strong>ByteCamp</strong><br />
            📧 Email: <a href="mailto:bytecampSkill@gmail.com" className="text-teal-400 hover:underline">
              bytecampskill@gmail.com
            </a>
          </p>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
