"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  Code,
  Users,
  Trophy,
  MessageSquare,
  Video,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
function AccordionItem({ topic }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-purple-50"
      >
        <span className={open ? "text-purple-600 font-semibold" : "text-purple-700"}>
          {topic.title}
        </span>
        <ChevronDownIcon
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""} text-purple-600`}
        />
      </button>

      {topic.content && open && (
        <ul className="px-6 py-2 text-gray-700 list-disc space-y-1">
          {topic.content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
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
                <Link href="/courses?category=education" className="block px-4 py-2 text-slate-200 hover:bg-gray-700 transition">
                  Education
                </Link>
                <Link href="/courses?category=skill-development" className="block px-4 py-2 text-slate-200 hover:bg-gray-700 transition">
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

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button
              component={Link}
              href="/"
              variant="contained"
              className="bg-gradient-to-r from-teal-500 to-emerald-400 text-white"
            >
              Get Started
            </Button>
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
            <Button
              component={Link}
              href="/"
              variant="contained"
              className="w-full bg-gradient-to-r from-teal-500 to-emerald-400 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}


export default function ExclusiveBatchPage() {
  return (
    <main className="bg-white min-h-screen text-gray-800">
      <Navbar />

      {/* HERO SECTION */}
      <section className="text-center py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Master The Art Of Learning With <span className="text-purple-600">ByteCamp Exclusive Batch</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          ByteCamp Exclusive Batch তৈরি করা হয়েছে শিক্ষার্থীদের জন্য যাঁরা চান প্র্যাকটিক্যাল স্কিল, প্রজেক্ট এবং পার্সোনাল মেন্টরশিপের মাধ্যমে নিজেদের উন্নত করতে। 🚀
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Key Features</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: <Video className="w-10 h-10 text-purple-500" />, title: "20+ Hours of Recorded Classes", desc: "সুসংগঠিত রেকর্ডেড ভিডিওর মাধ্যমে শিখুন নিজের গতিতে।" },
            { icon: <MessageSquare className="w-10 h-10 text-blue-500" />, title: "Daily Live Support", desc: "প্রতিদিন লাইভ সাপোর্ট সেশনের মাধ্যমে কনসেপ্ট পরিষ্কার করুন।" },
            { icon: <Users className="w-10 h-10 text-teal-500" />, title: "Group & 1:1 Mentorship", desc: "অভিজ্ঞ মেন্টরের কাছ থেকে সরাসরি গাইডলাইন ও ফিডব্যাক।" },
            { icon: <BookOpen className="w-10 h-10 text-orange-500" />, title: "Structured Learning Path", desc: "ধাপে ধাপে সাজানো কোর্স কারিকুলাম যা শেখাকে সহজ করে তোলে।" },
            { icon: <Code className="w-10 h-10 text-pink-500" />, title: "Real Projects & Assignments", desc: "প্রজেক্ট তৈরি ও অ্যাসাইনমেন্টের মাধ্যমে শিখুন বাস্তব কাজে।" },
            { icon: <Trophy className="w-10 h-10 text-green-500" />, title: "Certificate of Completion", desc: "কোর্স শেষের পর পাবেন একটি অফিসিয়াল সার্টিফিকেট 🎓" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section className="bg-white py-24 px-6 sm:px-10 lg:px-20 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-gray-900">Our Teaching System</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-indigo-200"></div>
            {[
              { left: "Kickoff", leftDesc: "Batch শুরু হলো programming ও modern tech এর পরিচিতি দিয়ে", right: "Foundation Sessions", rightDesc: "Problem-solving, algorithmic thinking শেখানো হলো।" },
              { left: "Regular Practice", leftDesc: "প্রতিদিন নানা ধরনের প্রব্লেম সল্ভিং।", right: "Advanced Workshops", rightDesc: "DS, optimization techniques শেখানো হলো।" },
              { left: "Preparation of Contest", leftDesc: "Preparation for international and domestic contests", right: "Personal Mentor", rightDesc: "Personal মেন্টরের guidance।" },
              { left: "Celebration", leftDesc: "Participants experiences share ও certificates পেলো।" },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="mb-12 flex flex-col md:flex-row items-center w-full relative"
              >
                <div className="md:w-1/2 md:pr-8 text-right">
                  <h3 className="text-xl font-bold">{step.left}</h3>
                  <p className="mt-2 text-gray-700">{step.leftDesc}</p>
                </div>
                <div className="w-6 h-6 bg-indigo-600 rounded-full z-10 mx-4 my-6 md:my-0"></div>
                <div className="md:w-1/2 md:pl-8 text-left">
                  {step.right && (
                    <>
                      <h3 className="text-xl font-bold">{step.right}</h3>
                      <p className="mt-2 text-gray-700">{step.rightDesc}</p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
     {/* 🌟 PHITRON PROBLEM SOLVERS JOURNEY SECTION */}
<section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-indigo-50 text-gray-900 py-16 px-6 flex flex-col items-center">

  {/* Header */}
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-5xl font-extrabold mb-4">
      ByteCamp Exclusive Batch Journey
    </h1>
    <p className="text-gray-600 text-lg">
      A roadmap to becoming a minimum <span className="text-indigo-600 font-semibold">2-Star Coder</span>
    </p>
  </motion.div>

  {/* Journey Steps */}
  <div className="flex flex-col items-center space-y-10">

    {/* Step 1 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      <div className="border-2 border-indigo-400 rounded-xl px-8 py-4 font-semibold text-indigo-700 bg-white shadow-lg hover:shadow-indigo-400/40 transition">
        Selection Contest
      </div>
      <div className="w-1 h-8 bg-indigo-400 mx-auto"></div>
    </motion.div>

    {/* Step 2 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="text-center"
    >
      <div className="border-2 border-indigo-400 rounded-xl px-8 py-4 font-semibold text-indigo-700 bg-white shadow-lg hover:shadow-indigo-400/40 transition">
        Onboarding
      </div>
      <div className="w-1 h-8 bg-indigo-400 mx-auto"></div>
    </motion.div>

    {/* Step 3 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="text-center"
    >
      <div className="border-2 border-indigo-600 bg-indigo-600 text-white rounded-xl px-8 py-4 font-semibold shadow-xl hover:shadow-indigo-500/50 transition">
        Newbie Problem Solver
      </div>
      <div className="w-1 h-8 bg-indigo-400 mx-auto"></div>
    </motion.div>
  </div>

  {/* Subtitle */}
  <motion.p
    className="text-gray-700 mt-10 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.9 }}
  >
    On the journey to becoming a{" "}
    <span className="text-indigo-600 font-semibold">A hardworking competitive programmer</span>
  </motion.p>

  {/* Topics */}
  <div className="mt-14 w-full max-w-6xl">
    <div className="w-full border-t-2 border-indigo-400 mb-10"></div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
      {[
        "C++ STL (Standard Template Library)",
        "Data Structures",
        "Binary tree",
        "Basic Math & Number Theory",
        "Binary Search Tree",
      ].map((topic, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="h-12 w-1 bg-indigo-400 mb-3"></div>
          <div className="border-2 border-indigo-400 bg-white rounded-xl px-4 py-3 text-sm font-medium text-indigo-700 shadow-md hover:shadow-indigo-500/40 hover:scale-105 transition">
            {topic}
          </div>
        </motion.div>
      ))}
    </div>
  </div>

</section>

      {/* ByteCamp INSIGHTS SECTION */}
      <section className="bg-gray-50 py-24 px-6 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-gray-900">
            ByteCamp Exclusive Batch Insights
          </h2>

          <div className="divide-y border rounded-lg border-gray-300">
            {[
              {
                title: "C++ STL (Standard Template Library)",
                content: [
                  "Pair, Tuple, String, Vector & Deque",
                  "Map, Set, Multiset & Priority Queue",
                  "Complex Structure of Vector, Map, Set, Multiset & Priority Queue",
                ],
              },
              { title: "Data Structure",
                content: [
                  "Array & 2D Array",
                  "Linked List",
                ],
               },
              { title: "Binary Tree",
                content: [
                  "Basics of Tree",
                  "Binary Tree Traversals (Inorder, Preorder, Postorder)",
                  "Binary Search Tree Operations",
                ],
               },
              { title: "Basic Math & Number Theory",
                content: [
                  "Prime Numbers & Sieve of Eratosthenes",
                  "Greatest Common Divisor (GCD) & Least Common Multiple (LCM)",
                ],
               },
              { title: "Binary Search Tree",
                content: [
                  "Insertion, Deletion & Searching in BST",
                  "Balanced BST Concepts",
                ],
               },
            ].map((topic, idx) => (
              <AccordionItem key={idx} topic={topic} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/ByteCamp logo.jpg" alt="ByteCamp" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold text-slate-100">ByteCamp</span>
            </div>
            <p>Let's build your dream and career without any obstacles.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-slate-100">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
              <li><Link href="/about-us" className="hover:text-white">About us</Link></li>
              <li><Link href="/" className="hover:text-white">Home</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-slate-100">Our Policy</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white">Refund & Return Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-slate-100">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/courses?category=skill-development" className="hover:text-white">Skill Development</Link></li>
              <li><Link href="/courses?category=education" className="hover:text-white">Education</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-slate-100">Contact</h3>
            <p>bytecampskill@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-slate-500">
          <p>&copy; 2025 ByteCamp. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
