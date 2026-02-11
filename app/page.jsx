"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, GraduationCap, Rocket, Menu, X, ChevronDown, Heart, FileText, PuzzlePiece, Trophy, Target, BookOpen } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Button from "@mui/material/Button";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const [showAlert, setShowAlert] = useState(false);
const enrollmentStart = new Date("2026-02-14T00:00:00");

const [expired, setExpired] = useState(false);


const [timeLeft, setTimeLeft] = useState({
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
});
useEffect(() => {
  // যদি আগেই expired হয়ে থাকে
  const alreadyExpired = localStorage.getItem("enrollmentExpired");
  if (alreadyExpired === "true") {
    setExpired(true);
    return;
  }

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = enrollmentStart.getTime() - now;

    if (distance <= 0) {
      clearInterval(timer);
      setExpired(true);
      localStorage.setItem("enrollmentExpired", "true"); // 🔥 Permanent
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTimeLeft({
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);
  // ✅ Check login persistence
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };


  const statsData = [
    { label: "Students Enrolled", value: 200 },
    { label: "Courses Available", value: 3 },
    { label: "Mentors", value: 6 },
    { label: "Projects Completed", value: 30 },
  ];

  const [stats, setStats] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((item, i) =>
      setInterval(() => {
        setStats((prev) => {
          const newVal = [...prev];
          if (newVal[i] < item.value) {
            newVal[i] += Math.ceil(item.value / 100); // increment smoothly
            if (newVal[i] > item.value) newVal[i] = item.value;
          }
          return newVal;
        });
      }, 30)
    );

    return () => intervals.forEach(clearInterval);
  }, []);

  const reviews = [
    {
      name: "Aysha siddik Mohona",
      course: "A little programming",
      feedback: "ByteCamp এর কোর্সের মাধ্যমে আমি programming শিখেছি এবং confidence পেয়েছি। Mentors খুব supportive!",
      img: "/hijab.jpg",
    },
    {
      name: "Minhaj Islam",
      course: "A little programming",
      feedback: "ByteCamp এর কোর্সের মাধ্যমে আমি programming শিখেছি এবং confidence পেয়েছি। Mentors খুব supportive!",
      img: "/minhaj.jpg",
    },
    {
      name: "Imtiaj islam maisha",
      course: "Basics of programming",
      feedback: "Mentorship এবং personal guidance-এর কারণে আমি real-world skills শিখেছি। ধন্যবাদ ByteCamp!",
      img: "/hijab.jpg",
    },
    {
      name: "Mehedi islam",
      course: "Arabic (নাহু ও সরফ)",
      feedback: "ByteCamp এ শেখার পর আমি আরবিতে ভালো ফলাফল করতে পেরেছি ।",
      img: "/men.png",
    },
     {
      name: "Rashedul Islam rafi",
      course: "Arabic (নাহু ও সরফ)",
      feedback: "ByteCamp এ শেখার পর আমি আরবিতে ভালো ফলাফল করতে পেরেছি ।",
      img: "/men.png",
    },
     {
      name: "Mim akter",
      course: "Basics of programming",
      feedback: "Mentorship এবং personal guidance-এর কারণে আমি real-world skills শিখেছি। ধন্যবাদ ByteCamp!",
      img: "/hijab.jpg",
    },
     {
      name: "Shahriar islam shuvo",
      course: "Basics of programming",
      feedback: "Mentorship এবং personal guidance-এর কারণে আমি real-world skills শিখেছি। ধন্যবাদ ByteCamp!",
      img: "/men.png",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);



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
        <div className="absolute top-16 right-4 bg-slate-900 p-4 rounded-lg shadow-lg flex flex-col gap-3 md:hidden">

          <Link
            href="/"
            className="text-white py-2 px-3 rounded hover:bg-white/10"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/courses"
            className="text-white py-2 px-3 rounded hover:bg-white/10"
            onClick={() => setMobileOpen(false)}
          >
            Courses
          </Link>

          <Link
            href="/about"
            className="text-white py-2 px-3 rounded hover:bg-white/10"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>

          <Link
            href="/exclusive-batch"
            className="text-white py-2 px-3 rounded hover:bg-white/10"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          {/* Login Button */}
          <button
            onClick={() => {
              setMobileOpen(false);
              router.push("/login");
            }}
            className="mt-2 bg-white text-slate-900 py-2 rounded-lg font-medium hover:bg-gray-200"
          >
            Login
          </button>
        </div>
      )}
</div>

        </div>
      </nav>

{/* HERO */}
<section className="relative overflow-hidden py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">

  {/* Background Glow Circles */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full animate-pulse-slow" />
  <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-teal-500/20 blur-[120px] rounded-full animate-pulse-slow" />

  {/* Floating Programming Language Images */}
{[
  "/c-.png",
  "/python.png",
  "/data.png",
  "/algo.png",
  "/js.png",
  "/atom.png",
].map((src, i) => (
  <motion.div
    key={i}
    className="absolute opacity-20"
    style={{
      top: `${10 + i * 15}%`,
      left: `${5 + i * 18}%`,
    }}
    animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
    transition={{
      duration: 6 + i,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src={src}
      alt="programming language"
      width={60}
      height={60}
      className="md:w-[80px] md:h-[80px]"
    />
  </motion.div>
))}

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
        তোমার ক্যারিয়ার শুরু করতে  
        <span className="block text-teal-400 mt-2 animate-pulse-slow">
          আমরা তোমার পাশে আছি সব সময়
        </span>
      </h1>

      <p className="text-gray-300 text-lg max-w-xl mb-10">
        শেখার পাশাপাশি, প্রতিটি শিক্ষার্থীকে দক্ষ করে তোলা যাতে সে ভবিষ্যতের চ্যালেঞ্জ confidently মোকাবেলা করতে পারে।
      </p>

      <div className="flex gap-4">
        {/* Explore Courses Button */}
        <motion.div
          whileHover={{ scale: 1.1, y: -3, boxShadow: "0 25px 35px rgba(128, 90, 213, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/courses">
            <button className="px-8 py-3 text-lg font-semibold rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg text-white transition-all duration-300 hover:brightness-110 hover:shadow-2xl">
              Explore Courses
            </button>
          </Link>
        </motion.div>

        {/* Learn More Button */}
        <motion.div
          whileHover={{ scale: 1.1, y: -3, boxShadow: "0 20px 30px rgba(14, 203, 129, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/about">
            <button className="px-8 py-3 text-lg font-semibold rounded-3xl border-2 border-teal-400 text-teal-400 bg-white/5 backdrop-blur-sm shadow-md transition-all duration-300 hover:bg-teal-400 hover:text-black hover:shadow-xl">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative flex justify-center"
    >
      {/* Image Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-teal-400/30 blur-3xl rounded-full animate-pulse-slow" />

      <Image
        src="/fo.png" 
        alt="course1.png"
        width={520}
        height={520}
        className="relative rounded-3xl shadow-2xl border border-gray-700 hover:scale-105 transition-transform duration-500"
        priority
      />

      
  {/* Floating Programming Language Images */}
{[
  "/c-.png",
  "/python.png",
  "/data.png",
  "/algo.png",
  "/js.png",
].map((src, i) => (
  <motion.div
    key={i}
    className="absolute opacity-20"
    style={{
      top: `${10 + i * 15}%`,
      left: `${5 + i * 18}%`,
    }}
    animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
    transition={{
      duration: 6 + i,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src={src}
      alt="programming language"
      width={60}
      height={60}
      className="md:w-[80px] md:h-[80px]"
    />
  </motion.div>
))}
    </motion.div>

  </div>
</section>



{/* ENROLLMENT TIMER */}
<section className="relative py-20 bg-gray-900 text-white overflow-hidden">

 
  {/* Floating Programming Language Images */}
{[
  "/c-.png",
  "/python.png",
  "/data.png",
  "/algo.png",
  "/js.png",
].map((src, i) => (
  <motion.div
    key={i}
    className="absolute opacity-20"
    style={{
      top: `${10 + i * 15}%`,
      left: `${5 + i * 18}%`,
    }}
    animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
    transition={{
      duration: 6 + i,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src={src}
      alt="programming language"
      width={60}
      height={60}
      className="md:w-[80px] md:h-[80px]"
    />
  </motion.div>
))}

  <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

    {!expired ? (
      <>
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-4 animate-pulse">
          কোর্স এনরোলমেন্ট শুরু হচ্ছে খুব শীঘ্রই 🚀
        </h2>

        <p className="text-gray-300 text-lg mb-10">
          নির্ধারিত সময় শেষ হলে স্বয়ংক্রিয়ভাবে এনরোলমেন্ট চালু হবে।
        </p>

        {/* TIMER BOX */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {[ 
            { label: "দিন", value: timeLeft.days },
            { label: "ঘন্টা", value: timeLeft.hours },
            { label: "মিনিট", value: timeLeft.minutes },
            { label: "সেকেন্ড", value: timeLeft.seconds },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-800/70 border border-gray-700 rounded-2xl w-24 py-6 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <p className="text-3xl font-bold text-teal-300">{item.value}</p>
              <p className="text-gray-400 mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 flex-wrap">

          {/* Locked Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-10 py-4 text-lg font-semibold rounded-2xl cursor-not-allowed opacity-70 shadow-lg hover:shadow-2xl transition"
          >
            🚀 Enrollment Locked
          </motion.button>

          {/* Alert Button */}
          <motion.button
            onClick={() => setShowAlert(true)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            📅 Enrollment Details
          </motion.button>

        </div>

      </>
    ) : (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-400 mb-6 animate-pulse">
          🎉 Enrollment is Now Live!
        </h2>

        <p className="text-gray-300 text-lg mb-10">
          এখনই আমাদের সি++ এর হাতেখড়ি কোর্সে এনরোল করুন।
        </p>

        <Link href="/begineer-course">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition duration-300"
          >
            🚀 Enroll Our C++ for Beginner Course
          </motion.button>
        </Link>
      </motion.div>
    )}

  </div>
</section>



      {/* OUR COURSES */}
<section className="relative py-24 bg-gray-800 text-white overflow-hidden">

  
  {/* Floating Programming Language Images */}
{[
  "/c-.png",
  "/python.png",
  "/data.png",
  "/algo.png",
  "/edu.png",
  "/js.png",
  "/atom.png",
].map((src, i) => (
  <motion.div
    key={i}
    className="absolute opacity-20"
    style={{
      top: `${10 + i * 15}%`,
      left: `${5 + i * 18}%`,
    }}
    animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
    transition={{
      duration: 6 + i,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src={src}
      alt="programming language"
      width={60}
      height={60}
      className="md:w-[80px] md:h-[80px]"
    />
  </motion.div>
))}

  <div className="text-center mb-16 relative z-10">
    <h2 className="text-5xl font-extrabold text-teal-400 mb-4 animate-pulse">
      আমাদের জনপ্রিয় কোর্স সমূহ
    </h2>
    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
      বাইটক্যাম্পে শেখার জন্য বিভিন্ন কোর্স আছে যা শিক্ষার্থীকে দক্ষতা বৃদ্ধি এবং প্রফেশনাল লেভেলে নিয়ে যাবে
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-6 relative z-10">
    {[
      {
        title: "সি++ এর হাতেখড়ি 🖥️",
        desc: "সি++ এর হাতেখড়ি হোক বাইটক্যাম্প এর সাথে, সি++ শিখে নিজের স্কিল অন্য লেভেলে উন্নীত করো।",
        link: "/begineer-course",
        img: "course.png",
      },
      {
        title: "Basics of Competitive Programming 🖥️",
        desc: "C প্রোগ্রামিং থেকে শুরু করে C++ এর advanced concepts এবং Data Structures and Algorithms (DSA) শিখুন।",
        link: "/main-course-details",
        img: "ByteCamp logo.jpg",
      },
    ].map((course, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.07, y: -5 }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
        className="bg-gray-900 rounded-3xl shadow-xl border border-gray-700 overflow-hidden hover:border-teal-400 hover:shadow-2xl transition-all cursor-pointer relative"
      >
        {/* Card Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-teal-400/10 to-pink-500/10 blur-2xl rounded-3xl pointer-events-none" />
        
        <div className="h-48 w-full relative">
          <Image src={course.img} alt={course.title} fill className="object-cover" />
        </div>
        <div className="p-6 relative z-10">
          <h3 className="text-3xl font-bold text-teal-300 mb-3">{course.title}</h3>
          <p className="text-gray-300 mb-4 text-lg">{course.desc}</p>
          <Link href={course.link} className="text-teal-400 font-medium hover:underline text-lg">
            বিস্তারিত দেখুন &rarr;
          </Link>
        </div>
      </motion.div>
    ))}
  </div>
</section>


 <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
 
  {/* Floating Programming Language Images */}
{[
  "/c-.png",
  "/python.png",
  "/data.png",
  "/algo.png",
  "/edu.png",
].map((src, i) => (
  <motion.div
    key={i}
    className="absolute opacity-20"
    style={{
      top: `${10 + i * 15}%`,
      left: `${5 + i * 18}%`,
    }}
    animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
    transition={{
      duration: 6 + i,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src={src}
      alt="programming language"
      width={60}
      height={60}
      className="md:w-[80px] md:h-[80px]"
    />
  </motion.div>
))}
  <motion.div
    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-5xl opacity-20"
    animate={{ y: [0, 10, 0], rotate: [0, 10, -10, 0] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
  >
    💡
  </motion.div>

  {/* Header */}
  <div className="text-center mb-16 relative z-10">
    <h2 className="text-4xl font-extrabold text-teal-300 mb-4 animate-pulse">
      ByteCamp Exclusive Batch
    </h2>
    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
      এই batch-এ থাকবে প্রফেশনাল guidance, personal mentorship এবং career advancement।
      এখানে শুধু আমাদের CP কোর্সের শেরা ছাত্ররা সুযোগ পাবে।
    </p>
  </div>

  {/* Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 relative z-10">
    {[
      { icon: "🧑‍💻", title: "1:1 Personal Mentorship", desc: "Mentors তোমার সাথে সরাসরি যুক্ত থাকবেন, problem solving এবং career guidance-এর জন্য।" },
      { icon: "🔥", title: "Problem Solving Challenges", desc: "Mentors বিভিন্ন challenge এবং practice opportunities দিয়ে তোমার problem solving দক্ষতা বাড়াবে।" },
      { icon: "🧑🏻‍🤝‍🧑🏻", title: "Job Placement Guidance", desc: "Job-ready হওয়ার জন্য mentors team তোমাকে career advice এবং interview preparation দেবে।" },
      { icon: "🏆", title: "Your Award", desc: "ByteCamp Exclusive Batch শেষ হলে আপনাকে আমাদের থেকে Certificate দেওয়া হবে।" },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        whileHover={{ scale: 1.07, rotate: [0, 3, -3, 0], y: -5 }}
        transition={{ duration: 0.5, delay: i * 0.2, type: "spring", stiffness: 120 }}
        className="bg-gradient-to-br from-purple-700/40 via-teal-600/40 to-pink-700/40 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-700 hover:border-teal-400 text-center relative overflow-hidden"
      >
        {/* Icon Bubble */}
        <motion.div
          className="text-4xl mb-3"
          animate={{ y: [0, -8, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          {item.icon}
        </motion.div>

        <h3 className="text-xl font-bold text-teal-300 mb-2">{item.title}</h3>
        <p className="text-gray-300 text-sm">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</section>




<section className="py-24 bg-gray-900 text-white">
 
<section className="py-24 bg-gray-900 text-white relative overflow-hidden">

  {/* Floating Programming Language Images */}
{[
  "/c-.png",
  "/python.png",
  "/data.png",
  "/algo.png",
  "/edu.png",
].map((src, i) => (
  <motion.div
    key={i}
    className="absolute opacity-20"
    style={{
      top: `${10 + i * 15}%`,
      left: `${5 + i * 18}%`,
    }}
    animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
    transition={{
      duration: 6 + i,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src={src}
      alt="programming language"
      width={60}
      height={60}
      className="md:w-[80px] md:h-[80px]"
    />
  </motion.div>
))}

  {/* Header */}
  <div className="text-center mb-16 relative z-10">
    <h2 className="text-5xl font-extrabold text-teal-400 mb-4">
      আমাদের অর্জন
    </h2>
    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
      আমাদের শিক্ষার্থীরা এবং কোর্সের কিছু মূল পরিসংখ্যান:
    </p>
  </div>

  {/* Stats Cards */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 px-6 relative z-10">
    {statsData.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
        className="bg-gradient-to-br from-purple-700/50 via-teal-600/50 to-pink-700/50 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-teal-400 transition-all text-center relative overflow-hidden"
      >
        {/* Floating emoji per card */}
        <motion.div
          className="absolute top-4 right-4 text-2xl"
          animate={{ y: [0, -8, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          {item.emoji || "⭐"}
        </motion.div>

        {/* Animated counter */}
        <motion.p
          className="text-5xl font-bold text-teal-300 mb-2"
          initial={{ count: 0 }}
          animate={{ count: stats[i] }}
        >
          {stats[i]}
        </motion.p>
        <p className="text-gray-300 text-lg">{item.label}</p>
      </motion.div>
    ))}
  </div>
</section>


 <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
  
  {/* Floating Programming Language Images */}
{[
  "/c-.png",
  "/python.png",
  "/data.png",
  "/algo.png",
  "/edu.png",
].map((src, i) => (
  <motion.div
    key={i}
    className="absolute opacity-20"
    style={{
      top: `${10 + i * 15}%`,
      left: `${5 + i * 18}%`,
    }}
    animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
    transition={{
      duration: 6 + i,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src={src}
      alt="programming language"
      width={60}
      height={60}
      className="md:w-[80px] md:h-[80px]"
    />
  </motion.div>
))}

  <div className="text-center mb-16 relative z-10">
    <h2 className="text-5xl font-extrabold text-teal-400 mb-4">
      শিক্ষার্থীদের অভিজ্ঞতা
    </h2>
    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
      আমাদের শিক্ষার্থীরা ByteCamp নিয়ে কী বলছে
    </p>
  </div>

  <div className="relative max-w-6xl mx-auto overflow-hidden z-10">
    <motion.div
      className="flex gap-6"
      animate={{ x: `-${index * 33.333}%` }}
      transition={{ type: "spring", stiffness: 120, damping: 25 }}
    >
      {[...reviews, ...reviews].map((review, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.07, rotate: [0, 2, -2, 0] }}
          className="min-w-[33.333%] bg-gradient-to-br from-purple-700/50 via-teal-600/50 to-pink-700/50 backdrop-blur-md rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Emoji floating on card */}
          <motion.div
            className="absolute top-4 right-4 text-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🌟
          </motion.div>
          <Image
            src={review.img}
            alt={review.name}
            width={100}
            height={100}
            className="rounded-full border-4 border-teal-400 mb-4 z-10"
          />
          <h3 className="text-xl font-bold text-teal-300 z-10">{review.name}</h3>
          <p className="text-gray-400 italic mb-2 z-10">{review.course}</p>
          <p className="text-gray-100 text-sm z-10">{review.feedback}</p>
        </motion.div>
      ))}
    </motion.div>

    {/* Navigation Dots */}
    <div className="flex justify-center gap-3 mt-8 z-10 relative">
      {reviews.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`w-4 h-4 rounded-full ${
            i === index ? "bg-teal-400 animate-pulse" : "bg-gray-600"
          }`}
        />
      ))}
    </div>
  </div>
</section>


</section>

{showAlert && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
  >
    <motion.div
      initial={{ scale: 0.8, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full mx-4 p-8 text-center"
    >
      {/* Close */}
      <button
        onClick={() => setShowAlert(false)}
        className="absolute top-3 right-3 bg-red-500 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-red-600 transition"
      >
        ✕
      </button>

      <p className="text-gray-800 text-lg leading-relaxed font-medium">
        আমাদের বাইটক্যাম্প এর <span className="font-bold">সি++ এর হাতেখড়ি </span> ব্যাচ 
        এনরোলমেন্ট শুরু হবে  
        <br />
        <span className="font-semibold text-teal-600">
          ১৪ ফেব্রুয়ারী, ২০২৬
        </span>
        <br />
        
        <br />
        এনরোলমেন্ট শেষ হবে    
        <br />
        <span className="font-semibold text-teal-600">
            ২০ ফেব্রুয়ারী, ২০২৬
        </span>
        <br />
        এর আগে কোনোভাবেই এই ব্যাচে সুযোগ দেওয়া হবে না।
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowAlert(false)}
        className="mt-8 bg-teal-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-600"
      >
        ঠিক আছে
      </motion.button>
    </motion.div>
  </motion.div>
)}


      {/* FOOTER */}
      <footer className="bg-gray-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
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
                <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
                <li><Link href="/founder-coo" className="hover:text-white">View Details our director</Link></li>
             
               
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-slate-100">Our Policy</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-white">Terms and Conditions </Link></li>
                <li><Link href="/refund-policy" className="hover:text-white">Refund and Return Policy</Link></li>
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
            <p>&copy; 2026 ByteCamp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>

  );
}
