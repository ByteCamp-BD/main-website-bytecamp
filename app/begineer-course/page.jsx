// pages/CoursePage.jsx
"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import { Menu, X, ChevronDown } from "lucide-react";
const instructors = [
  { name: "Mahmudul Hasan", role: "Instructor", photo: "/mypic.jpg" },

];

const courseFor = [
  "সি++ নতুন এবং যারা  শিখতে চান",
  "প্রতিযোগিতামূলক প্রোগ্রামিংয়ের লক্ষ্যে কাজ করা শিক্ষার্থীরা",
  "যে কেউ সমস্যা সমাধানের শক্তিশালী দক্ষতা চান",
 
];

const courseGives = [
  { icon: "🎥", text: "20+ Pre-recorded videos " },
  //{ icon: "❤️", text: "1:1 Mentor support and guidance" },
  { icon: "📞", text: "Daily Support Sessions" },
  //{ icon: "👨‍💻", text: "Mastery from C to C++ and core DSA concepts" },
  { icon: "📝", text: "Weekly Assignments,Quiz" },
  { icon: "🧩", text: "Weekly Problem Set" },
  //{ icon: "🏆", text: "Contests for competitive" },
  //{ icon: "💻", text: "Codeforces & CodeChef Upsolving Classes" },
 // { icon: "⭐", text: "Exclusive batch" },
];

export default function CoursePage() {

const [dropdownOpen, setDropdownOpen] = useState(false);
const [mobileOpen, setMobileOpen] = useState(false);

  return (
   <div className="min-h-screen bg-gray-900 text-slate-100 antialiased">
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
          </div>


         {/* Actions */}
<div className="flex items-center gap-3">
  {/* Register Button */}
  <div className="hidden sm:block">
    <Button
      component={Link}
      href="/register"
      variant="contained"
      className="bg-gradient-to-r from-teal-500 to-emerald-400 text-white"
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
      className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
    >
      Login
    </Button>
  </div>

  {/* Mobile Menu Toggle */}
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
</div>

        </div>
      </nav>
      

      {/* Course Info */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">
          
          {/* Left Column */}
          <div className="flex-2 space-y-4 ">
            <h1 className="text-4xl md:text-5xl font-bold">C++ for Begineer</h1>
            <p className="text-gray-300 text-lg ">
              সি++ এর হাতেখড়ি 
            </p>
           

            {/* Ratings & Price */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
              <div className="flex items-center gap-2 text-yellow-400 font-semibold text-lg">
                {/* <span>⭐ 4.8</span>
                <span className="text-gray-400 text-sm">(313 Ratings)</span> */}
              </div>
              <div className="text-xl font-bold text-green-500">
               ৳00 
                {/* <span className="text-sm text-purple-400 font-normal">প্রোমো অ্যাপ্লাইড</span> */}
              </div>
            </div>

          
            {/* Demo + Batch */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">

              <button
  onClick={() =>
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdbA75NDrSuCFfFVL1cM0kJ-wIVYYNv4ePK_ExFBpjwj3dRpA/viewform?usp=header",
      "_blank"
    )
  }
  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold"
>
  ব্যাচে ভর্তি হোন
</button>

            </div>

            {/* Batch Timing Info */}
            <div className="mt-4 text-gray-300">
              <p><strong>ব্যাচ নং:</strong>১</p>  
              <p><strong>কোর্স চলবে :</strong>১৫ দিন+</p>
              <p><strong>ব্যাচ এনরোলমেন্ট শুরু:</strong> ১৪ তারিখ </p>
              <p><strong>ব্যাচ এনরোলমেন্ট শেষ:</strong> ২০ তারিখ</p>
              <p><strong>ক্লাস শুরু:</strong>২১ তারিখ</p>
              <p><strong>সাপোর্ট ক্লাস:</strong> এক বেলা</p>
             
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 flex justify-center items-center">
            <Image src="/course.png" alt="C to C++ Course Banner" width={400} height={400} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-center">What You'll Get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseGives.map((item, idx) => (
            <div key={idx} className="bg-gray-800 text-white p-6 rounded-lg shadow hover:scale-105 transition-transform duration-300 flex flex-col items-center gap-4">
              <div className="text-4xl">{item.icon}</div>
              <p className="font-semibold text-base text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
 

      {/* Expert Mentors */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Expert Mentors</h2>
        <p className="text-lg mb-8 text-center text-gray-300">
         Our experienced Bangladesh Olympiad Informatics participant candidates will take classes in this course.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {instructors.map((inst) => (
            <div
              key={inst.name}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-full max-w-xs"
            >
              {/* Circle Image Container */}
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src={inst.photo}
                  alt={inst.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
              <p className="font-semibold text-lg">{inst.name}</p>
              <p className="text-gray-400 text-sm">{inst.role}</p>
            </div>
          ))}
        </div>
      </section>
 {/* Cheating Warning */}
<section className="max-w-4xl mx-auto px-6 py-8 bg-red-900 rounded-xl border border-red-700 mt-12 shadow-lg">
  <h2 className="text-2xl font-bold text-center text-red-400 mb-4">⚠️ গুরুত্বপূর্ণ সতর্কবার্তা</h2>
  <p className="text-sm text-gray-100 leading-relaxed text-justify">
    কোর্সে ভর্তি হওয়ার আগে মনে রাখবেন, যদি কোনো <strong>Assignment</strong> এ আপনি <strong>নকল</strong> করেন, তা ধরা পড়বে। আমাদের নিজস্ব <strong>AI সিস্টেম</strong> আছে যা আপনার Assignment যাচাই করবে এবং নকলের তথ্য দেখাবে।  
  </p>
  <p className="text-sm text-gray-100 leading-relaxed text-justify mt-2">
    আমরা কোনো রকম সতর্কবার্তা, ক্ষমা বা সুযোগ দিব না। নকল করলে <strong>শরাসরি BAN</strong> করা হবে, এবং আপনি ByteCamp এর এই কোর্সে এক নকল ছাত্র হিসেবে পরিচিত হবেন। আগের ব্যাচে এমন ঘটনা ঘটেছে এবং আমরা অত্যন্ত কঠোর হয়েছি।  
  </p>
  <p className="text-sm text-gray-100 leading-relaxed text-justify mt-2 italic">
    এই কোর্সটি শিখার জন্য, দক্ষতা তৈরি করার জন্য। নকল করার জন্য নয়। অনুরোধ, সতর্ক থাকুন এবং সঠিকভাবে শিখুন। যেকোনো প্রশ্ন বা সাহায্যের জন্য <strong>support</strong> team-এর সঙ্গে যোগাযোগ করুন।  
  </p>
</section>

     {/* What You'll Learn */}
<section className="max-w-5xl mx-auto px-6 py-12">
  <h2 className="text-3xl font-bold mb-10 text-white text-center">What You'll Learn</h2>

  {/* Semester 1 */}
  <div className="mb-10">
    <h3 className="text-xl font-semibold text-green-400 mb-4 border-b border-gray-700 pb-2">🎯 Course Overview</h3>
    <div className="grid md:grid-cols-2 gap-4">
      {[
        "C++ Introduction",
        "C++ Syntax",
        "Variables,Operators",
        "Data types",
        "Input and Output Statements",
        "Loop (For, While), Nested Loop",
        "Conditional Statements (if-else, nested if-else)",
        "Basic Array knowledge(Not Fixed)",
        "Problem Solving"

      ].map((topic, idx) => (
        <div key={idx} className="flex items-center gap-2 text-gray-300">
          <span className="inline-flex items-center justify-center w-5 h-5 bg-green-700 text-green-300 rounded-full">✓</span>
          <p className="text-sm">{topic}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Semester 2 */}
  {/* <div>
    <h3 className="text-xl font-semibold text-blue-400 mb-4 border-b border-gray-700 pb-2">🚀 Semester 2: C++ FOR DSA & Problem Solving Topics </h3>
    <div className="grid md:grid-cols-2 gap-4">
      {[
        "Introduction to C++",
        "min(), max(), swap() function in C++",
        "Common Header file in C++",
        "Dynamic Memory Allocation",
        "Array of Classes",
        "Introduction to Class & Object",
        "String Class in C++",
        "Array of Object",
        "Basic Problem solving",
        "Loop & String related problems",
        "Array & Function  related problems",
        "Introduction to various Online judges (Codeforces, Leetcode, Codechef)",
      ].map((topic, idx) => (
        <div key={idx} className="flex items-center gap-2 text-gray-300">
          <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-700 text-blue-300 rounded-full">✓</span>
          <p className="text-sm">{topic}</p>
        </div>
      ))}
    </div>
  </div> */}
</section>


      {/* Who This Course Is For */}
      <section className="max-w-4xl mx-auto px-6 py-12 bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">এই কোর্সটি কাদের জন্য</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {courseFor.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </section>
  
  {/* Course Requirements */}
<section className="max-w-6xl mx-auto px-6 py-12">
  <h2 className="text-4xl font-bold mb-8 text-center text-white">এই কোর্সটি করার জন্য যা যা লাগবে</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      { icon: "💻", text: "একটা ল্যাপটপ বা ডেস্কটপ কম্পিউটার — অনুশীলন ও ক্লাস করার জন্য" },
      { icon: "⏰", text: "প্রতিদিন অন্তত 3-4 ঘন্টা সময় দিতে হবে শেখা ও প্র্যাকটিসের জন্য" },
      { icon: "📖", text: "ভালো পড়ার অভ্যাস ও নিয়মিত অনুশীলনের মানসিকতা থাকা দরকার" },
      { icon: "🔥", text: "সবচেয়ে গুরুত্বপূর্ণ — পরিশ্রমী ও অধ্যবসায়ী হতে হবে" },
    ].map((req, idx) => (
      <div
        key={idx}
        className="bg-gray-800 text-white p-6 rounded-lg shadow hover:scale-105 transition-transform duration-300 flex flex-col items-center gap-4"
      >
        <div className="text-4xl">{req.icon}</div>
        <p className="font-semibold text-base text-center">{req.text}</p>
      </div>
    ))}
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/ByteCamp logo.jpg" alt="ByteCamp" width={32} height={32} className="rounded-lg" />
                <span className="text-xl font-bold text-white">ByteCamp</span>
              </div>
              <p className="text-gray-400">Let's build your dream and career without any obstacles.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Platform</h3>
              <ul className="space-y-2">
                <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
                <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Our Policy</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-white">Terms and Conditions</Link></li>
                <li><Link href="/refund-policy" className="hover:text-white">Refund and Return Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Categories</h3>
              <ul className="space-y-2">
                <li><Link href="/courses?category=skill-development" className="hover:text-white">Skill Development</Link></li>
                <li><Link href="/courses?category=education" className="hover:text-white">Education</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Contact</h3>
              <p className="text-gray-400">bytecampskill@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 ByteCamp. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
