'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, Award, Heart, BookOpen, GraduationCap, Rocket, Trophy, ChevronDown, Menu, X } from "lucide-react";
import Button from "@mui/material/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ByteCampPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const values = [
    { icon: <GraduationCap className="w-12 h-12 text-teal-400 mx-auto" />, title: "Integrity", text: "সত্যনিষ্ঠা এবং নৈতিকতার সাথে কোডিং শিক্ষা প্রদান।" },
    { icon: <Rocket className="w-12 h-12 text-teal-400 mx-auto" />, title: "Innovation", text: "নতুন ধারণা এবং প্রকল্পভিত্তিক শিক্ষার কৌশল প্রয়োগ।" },
    { icon: <Heart className="w-12 h-12 text-teal-400 mx-auto" />, title: "Passion", text: "প্রতিটি শিক্ষার্থীর প্রতি আন্তরিক যত্ন ও উৎসাহ।" },
  ];

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
            <Link href="/">
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
            <Link href="/">
              <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-400 text-white px-4 py-2 rounded-md mt-2">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-32">
      {/* Navbar */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-32 text-center bg-gradient-to-r from-gray-800 to-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
        
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-teal-400">
           শেখার কোনো শেষ নেই, প্রোগ্রামিং শেখারও নেই 💡
          </h1>
          

        </motion.div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-12 text-teal-400">Our Values</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-gray-900 p-8 rounded-3xl shadow-xl border-l-4 border-teal-400"
            >
              {v.icon}
              <h3 className="text-xl font-bold mt-4 mb-2 text-teal-200">{v.title}</h3>
              <p className="text-gray-300">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
   {/* OUR MISSION SECTION - DARK THEME WITH ANIMATION */}
<section className="bg-gray-900 text-gray-100 py-24 px-6 sm:px-10 lg:px-20">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <motion.h2
      className="text-4xl sm:text-5xl font-extrabold mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Our Mission
    </motion.h2>

    {/* Description */}
    <motion.p
      className="text-lg text-gray-300 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      At ByteCamp, our mission is to empower students to become skilled problem solvers, creative thinkers, and confident programmers. We provide high-quality, practical learning experiences that bridge the gap between theory and real-world application. Through interactive projects, mentorship, and structured learning paths, we help learners unlock their full potential and thrive in the tech industry.
    </motion.p>

    {/* Three Pillars / Features */}
    <div className="grid sm:grid-cols-3 gap-8">
      {[
        { icon: "💻", title: "Practical Learning", desc: "Hands-on projects and real-world exercises to build skills that truly matter." },
        { icon: "🧑‍🏫", title: "Mentorship", desc: "Personalized guidance from experienced mentors to help you succeed faster." },
        { icon: "🛤️", title: "Structured Path", desc: "Clear learning roadmap to progress step by step from beginner to advanced." },
      ].map((feature, i) => (
        <motion.div
          key={i}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-start gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
        >
          <div className="bg-purple-600 w-12 h-12 flex items-center justify-center rounded-full text-white">
            <span className="text-xl font-bold">{feature.icon}</span>
          </div>
          <h3 className="text-xl font-semibold">{feature.title}</h3>
          <p className="text-gray-300">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* OUR STORY SECTION - DARK THEME - LINE BY LINE */}
<section className="bg-gray-900 text-gray-100 py-24 px-6 sm:px-10 lg:px-20 text-center">
  <div className="max-w-4xl mx-auto flex flex-col gap-12">

    {/* Heading */}
    <motion.h2
      className="text-4xl sm:text-5xl font-extrabold"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Our Story
    </motion.h2>

    {/* Description */}
    <motion.p
      className="text-gray-300 text-lg leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
            ByteCamp-এর লক্ষ্য একটাই — শিক্ষার্থীদের প্রোগ্রামিং এবং আধুনিক প্রযুক্তিতে দক্ষ করে তোলা, যাতে তারা প্রকল্প তৈরি ও বাস্তব সমস্যা সমাধান করতে পারে।
    </motion.p>

    <motion.p
      className="text-gray-300 text-lg leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
            আমরা শুধু কোড শেখাই না, আমরা নিশ্চিত করি যে শিক্ষার্থীরা কম খরচে সহজে শিখতে পারে এবং যেকোনো সময় আমাদের expert mentorদের কাছ থেকে guidance পাবে। প্রতিটি শিক্ষার্থীর পাশে আমরা সব সময় থাকি, যেন তারা 1:1 mentorship ও support session-এর মাধ্যমে সফল হতে পারে।
    </motion.p>

{/* Banner Image */}
<motion.div
  className="w-full text-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.6 }}
>
  <div className="w-full h-[500px] overflow-hidden rounded-b-2xl shadow-xl">
    <img
      src="team.png" // এখানে banner image path দিন
      alt="Our Story Illustration"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>


  </div>   
</section>
{/* Why Choose ByteCamp */}
<section className="py-24 bg-gradient-to-br from-teal-900 via-gray-900 to-black text-center relative overflow-hidden">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.2,
        },
      },
    }}
    className="max-w-6xl mx-auto px-6 relative z-10"
  >
    <motion.h2
      className="text-4xl md:text-5xl font-bold mb-12 text-teal-400 drop-shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Why Choose <span className="text-white">ByteCamp?</span>
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          icon: <Users className="w-12 h-12 mx-auto text-teal-400 mb-4" />,
          title: "Expert Mentors 🧑‍🏫",
          desc: "Industry standard অভিজ্ঞ শিক্ষকরা শিক্ষার্থীর পাশে থাকবেন।",
        },
        {
          icon: <BookOpen className="w-12 h-12 mx-auto text-teal-400 mb-4" />,
          title: "Practical Learning 🛠️",
          desc: "প্রকল্পভিত্তিক শেখার মাধ্যমে বাস্তব সমস্যা সমাধানের দক্ষতা।",
        },
        {
          icon: <Rocket className="w-12 h-12 mx-auto text-teal-400 mb-4" />,
          title: "2 Support Sessions Daily 📅",
          desc: "প্রতিদিন ২টি session দিয়ে শিক্ষার্থীদের queries ও guidance নিশ্চিত।",
        },
        {
          icon: <Heart className="w-12 h-12 mx-auto text-teal-400 mb-4" />,
          title: "1:1 Mentorship 💡",
          desc: "প্রতিটি শিক্ষার্থীর জন্য personal guidance এবং mentor special guideline।",
        },
        {
          icon: <Award className="w-12 h-12 mx-auto text-teal-400 mb-4" />,
          title: "Exclusive Batch ⭐",
          desc: "ByteCamp Exclusive Batch-এ শিক্ষার্থীরা focused, structured guidance পাবে।",
        },
        {
          icon: <Trophy className="w-12 h-12 mx-auto text-teal-400 mb-4" />,
          title: "Affordable Learning 💰",
          desc: "কম খরচে quality education এবং mentorship।",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-teal-400 transition-all cursor-pointer"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{
            scale: 1.05,
            rotateZ: [-1, 1, -1],
            transition: { duration: 0.4 },
          }}
          animate={{
            y: ["0%", "-2%", "0%"],
            transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          }}
        >
          {item.icon}
          <h3 className="text-2xl font-bold text-teal-300 mb-2 drop-shadow-md">{item.title}</h3>
          <p className="text-gray-200 text-base drop-shadow-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,178,172,0.05),transparent_70%)] pointer-events-none"></div>
</section>

{/*  ByteCamp Diamond belt*/}
<section className="py-24 bg-gradient-to-br from-teal-900 via-gray-900 to-black text-center relative overflow-hidden">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-6xl mx-auto px-6 relative z-10"
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-10 text-teal-400">
      💎 ByteCamp Diamond <span className="text-white">Belt</span>
    </h2>
      <p className="text-gray-300 max-w-3xl mx-auto text-sm mb-8">
  ByteCamp Diamond Belt শুধুমাত্র সেরা ও পরিশ্রমী শিক্ষার্থীদের জন্য। যারা কঠোর পরিশ্রম,
   নতুন দক্ষতা অর্জন এবং উদ্ভাবনের মাধ্যমে নিজের যোগ্যতা প্রমাণ করে,
    তারা এই সম্মাননা অর্জন করে। Diamond Belt শিক্ষার্থীরা ByteCamp-এর শীর্ষ স্তরের প্রতিনিধি এবং অন্যদের জন্য অনুপ্রেরণার উৎস।
</p>

    {/* Five Premium Features */}
    <div className="grid sm:grid-cols-3 gap-10">
      {[
        {
          icon: "📅",
          title: "Weekly Structured Roadmap",
          desc: "একটি স্পষ্ট, সহজ ও প্রিমিয়াম শেখার পরিকল্পনা—যাতে কোনো সময়ই হারিয়ে যেতে না হয়।",
        },
        {
          icon: "🧑‍🏫",
          title: "Advanced Online Judge",
          desc: "এক জায়গায় কোড, সাবমিট, ফলাফল—সাথে XP, Level, Badges। Pure gamified learning experience!",
        },
        {
          icon: "🏆",
          title: "Seasonal Ranking System",
          desc: "প্রতি মাসে Champion, Rookie, Most Improved–ব্যাজ ও বিশেষ সম্মানে সেরা হওয়ার সুযোগ।",
        },
        {
          icon: "📝",
          title: "Live Contest & Code Review",
          desc: "Real-time contest, instant editorial এবং expert code review—সঠিকভাবে উন্নতির নিশ্চয়তা।",
        },
        {
          icon: "🚀",
          title: "Portfolio & Project Builder",
          desc: "যা শিখবে সবকিছু automatically portfolio তে যুক্ত হবে—future-ready professional profile!",
        },
      ].map((feature, i) => (
        <motion.div
          key={i}
          className="
            bg-gray-800 p-6 rounded-2xl shadow-lg 
            transition transform hover:-translate-y-2 
            hover:shadow-teal-500/30 hover:shadow-xl
            cursor-pointer
          "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
        >
          {/* Icon Animated */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="bg-purple-600 w-14 h-14 flex items-center justify-center rounded-full text-white"
          >
            <span className="text-3xl flex items-center justify-center font-bold">
              {feature.icon}
            </span>
          </motion.div>

          <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
          <p className="text-gray-300 mt-2">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,178,172,0.1),transparent_70%)] pointer-events-none"></div>
</section>

{/* ByteCamp AI ByCam – Anti-Cheat System */}
<section className="py-24 bg-black text-center relative overflow-hidden">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-5xl mx-auto px-6 relative z-10"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-6">
      🔍 ByteCamp AI ByCam
    </h2>
    <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-14">
      ByteCamp এর নিজস্ব AI “ByCam” প্রতিটি ছাত্রের Assignment, Contest, Exam ও সকল  
      সাবমিশন রিয়েল-টাইমে স্ক্যান করে।  
      নকল, Copy-Paste, AI-Generated Content — কোন কিছুই ByCam এর চোখ এড়াতে পারে না।
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: "🚫",
          title: "AI Detection System",
          desc: "যে কোনো AI-generated বা Copy করা কোড সাথে সাথে শনাক্ত করে।",
        },
        {
          icon: "⚡",
          title: "Instant Auto-Ban",
          desc: "ধরা পরলে কোনো সতর্কতা ছাড়াই Permanent Ban আপনা-আপনি কার্যকর হয়।",
        },
        {
          icon: "🛑",
          title: "Zero Tolerance Policy",
          desc: "নকলকারীকে ‘Nokol Chatro’ স্ট্যাটাস দিয়ে সমস্ত ব্যাচ ও কোর্স থেকে বাদ।",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow-xl hover:border-red-500/40 transition"
        >
          <div className="bg-red-600 w-14 h-14 flex items-center justify-center rounded-full text-white text-3xl mx-auto mb-4 animate-bounce">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="text-gray-400 mt-2">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    <div className="mt-16 bg-red-600/10 border border-red-500/30 rounded-2xl p-6 text-red-300 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-3">❗ নকল করলে বিপদ কি?</h3>
      <ul className="space-y-2 text-left text-red-200">
        <li>• Per­manent Ban — পুনরায় ভর্তি হওয়াও নিষিদ্ধ।</li>
        <li>• Profile, XP, Rank — সব মুছে যাবে।</li>
        <li>• Certificate বা Badge — স্থায়ীভাবে বাতিল।</li>
        <li>• All Batch/Contest থেকে Lifetime Block।</li>
        <li>• ByteCamp কমিউনিটিতে Fraud হিসেবে চিহ্নিত।</li>
      </ul>
    </div>
  </motion.div>

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1),transparent_70%)] pointer-events-none"></div>
</section>


  {/* 🌟 OUR TEAM SECTION */}
<section className="relative py-24 bg-gray-900 text-white overflow-hidden">
  {/* Light Reflection Effect */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/40 to-gray-900 pointer-events-none"></div>

  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 text-center mb-16"
  >
    <h2 className="text-5xl font-extrabold text-teal-400 mb-4">Meet Our Team</h2>
    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
      ByteCamp-এর প্রতিটি সদস্য একসাথে কাজ করে তোমাদের শেখার অভিজ্ঞতাকে আরও সমৃদ্ধ করতে।
    </p>
  </motion.div>

  {/* Team Slider */}
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    loop={true}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    navigation
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="relative z-10 max-w-6xl mx-auto px-6"
  >
    {[
      { photo: "/mesbah.jpeg" },
      { photo: "/hasan.jpg" },
      { photo: "/redowan.jpg" },
      { photo: "/sayed.jpg" },
      { photo: "/rafee.jpg" },
      { photo: "/muja.png" },
    ].map((member, i) => (
      <SwiperSlide key={i}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/70 border border-gray-700 rounded-2xl shadow-lg overflow-hidden hover:border-teal-400 transition-all"
        >
          <div className="w-full h-64 md:h-80 relative">
            <Image
              src={member.photo}
              alt={`Team Member ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>


      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-teal-400">ByteCamp Official</h3>
              <p className="leading-relaxed">Let's build your dream and career without any obstacles.🚀</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-teal-400">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/courses" className="hover:text-teal-200">Courses</Link></li>
                <li><Link href="/about-us" className="hover:text-teal-200">About Us</Link></li>
           
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-teal-400">Contact Info</h3>
              <ul className="space-y-2">
                <li>✉️ bytecampskill@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2025 ByteCamp. All rights reserved.</p>
          
          </div>
        </div>
      </footer>
    </div>
  );
}
