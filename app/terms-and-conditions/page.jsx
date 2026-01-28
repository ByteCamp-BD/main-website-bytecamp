'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
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
          <p>&copy; 2025 ByteCamp. All rights reserved.</p>
          <p className="mt-2 text-sm">Developed by Mahmudul Hasan</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 pt-24">
      {/* Navbar */}
      <Navbar />

      {/* Terms and Conditions Content */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400 text-center">
            Terms and Conditions – <span className="text-white">ByteCamp</span>
          </h1>
          <p className="text-gray-400 text-center mb-10">
            Effective Date: <span className="text-gray-200">10/6/2025</span>
          </p>

          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              এই Terms and Conditions (“Terms”) আপনার এবং ByteCamp (“we”, “our”, “us”) এর মধ্যে চুক্তি হিসেবে গণ্য হবে।
              আমাদের কোর্স বা ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি এই Terms-এ সম্মত হচ্ছেন।
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-3">
                1. কোর্স এনরোলমেন্ট ও ব্যবহার
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>আপনি শুধুমাত্র নিজের শিক্ষা ও ব্যক্তিগত ব্যবহারের জন্য আমাদের কোর্সে এনরোল করতে পারবেন।</li>
                <li>কোর্স কনটেন্ট, ভিডিও, ই-বুক বা অন্য কোনো ডিজিটাল উপকরণ বিক্রি, বিতরণ বা শেয়ার করা কঠোরভাবে নিষিদ্ধ।</li>
                <li>ByteCamp-এর সাথে সংযুক্ত কোনো ভিডিও, কনটেন্ট বা পাসওয়ার্ড শেয়ার করা আইনত অপরাধ।</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-3">
                2. Intellectual Property Rights
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>আমাদের সমস্ত কনটেন্ট, ভিডিও, নোট এবং ডিজাইন ByteCamp-এর সম্পত্তি।</li>
                <li>আমাদের লিখিত অনুমতি ছাড়া এগুলো ব্যবহার করা যাবে না।</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-3">
                3. Cyber Security
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>আমরা আমাদের কনটেন্ট সুরক্ষিত রাখতে উন্নত Cyber Security প্রযুক্তি ব্যবহার করি।</li>
                <li>আপনার IP, লোকেশন এবং অনলাইন কার্যক্রম মনিটর করা হয়।</li>
                <li>অযৌক্তিক বা অবৈধ কনটেন্ট ব্যবহার/শেয়ার করলে আইনি ব্যবস্থা নেওয়া হবে।</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-3">
                4. নিষিদ্ধ কার্যক্রম
              </h2>
              <ul className="list-decimal list-inside space-y-1">
                <li>কোর্স কনটেন্ট অননুমোদিতভাবে শেয়ার করা।</li>
                <li>ভিডিও বা পাসওয়ার্ড অন্যকে প্রদান করা।</li>
                <li>ওয়েবসাইট বা কোর্স প্ল্যাটফর্মে কোনো ধরনের হ্যাকিং বা ভুয়া কার্যক্রম।</li>
                <li>অন্য শিক্ষার্থী বা ByteCamp-এর সিস্টেমকে ক্ষতিগ্রস্ত করা।</li>
              </ul>
              <p className="mt-3 text-gray-300">
                অপরাধ করলে ৫ লক্ষ থেকে ৫০ লক্ষ টাকা জরিমানা বা ৪–১৪ বছর কারাদণ্ড হতে পারে।
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-3">
                5. Limitation of Liability
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  ByteCamp কোর্স বা ওয়েবসাইট ব্যবহার করার কারণে কোনো প্রকার সরাসরি বা পরোক্ষ ক্ষতির জন্য দায়ী থাকবে না।
                </li>
                <li>
                  কোর্সে প্রদত্ত তথ্য শিক্ষাগত উদ্দেশ্যে দেওয়া হয়; ব্যক্তিগত সিদ্ধান্তের দায় শিক্ষার্থী নিজেই বহন করবে।
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-3">
                6. Termination
              </h2>
              <p>
                ByteCamp যেকোনো সময়ে ব্যবহারকারীর অ্যাকাউন্ট বন্ধ করতে পারে যদি Terms লঙ্ঘন করা হয়।
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-3">
                7. যোগাযোগ
              </h2>
              <p>
                যেকোনো প্রশ্ন বা অভিযোগের জন্য আমাদের সাথে যোগাযোগ করুন:
                <br />
                📧 <span className="text-white">bytecampskill@gmail.com</span>
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
