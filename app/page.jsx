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

const [timeLeft, setTimeLeft] = useState({
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
});

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
useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = enrollmentStart.getTime() - now;

    if (distance <= 0) {
      clearInterval(timer);
      window.location.href = "/enroll"; // enrollment page
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
  
  {/* Background Glow */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />
  <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-teal-500/20 blur-[120px] rounded-full" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
    
    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
        তোমার ক্যারিয়ার শুরু করতে  
        <span className="block text-teal-400 mt-2">
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
          <Link href="/begineer-course">
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
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-teal-400/30 blur-3xl rounded-full" />

      <Image
        src="/fo.png" 
        alt="course1.png"
        width={520}
        height={520}
        className="relative rounded-3xl shadow-2xl border border-gray-700"
        priority
      />
    </motion.div>

  </div>
</section>



{/* ENROLLMENT TIMER */}
<section className="py-20 bg-gray-900 text-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-4">
      কোর্স এনরোলমেন্ট শুরু হচ্ছে খুব শীঘ্রই 🚀
    </h2>

    <p className="text-gray-300 text-lg mb-10">
      নির্ধারিত সময় শেষ হলে স্বয়ংক্রিয়ভাবে এনরোলমেন্ট পেজ চালু হয়ে যাবে।
    </p>

    {/* TIMER BOX */}
   <div className="flex justify-center gap-6 mb-10">
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
      className="bg-gray-800 border border-gray-700 rounded-2xl w-24 py-6 shadow-lg"
    >
      <p className="text-3xl font-bold text-teal-300">{item.value}</p>
      <p className="text-gray-400 mt-1">{item.label}</p>
    </motion.div>
  ))}
</div>


    {/* ENROLL BUTTON */}
 <motion.button
  onClick={() => setShowAlert(true)}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  animate={{
    boxShadow: [
      "0 0 0px rgba(20,184,166,0.4)",
      "0 0 25px rgba(20,184,166,0.8)",
      "0 0 0px rgba(20,184,166,0.4)",
    ],
  }}
  transition={{ duration: 1.8, repeat: Infinity }}
  className="bg-gradient-to-r from-teal-500 to-emerald-400 text-white px-10 py-4 text-lg font-semibold rounded-2xl"
>
  🚀 Enroll Now
</motion.button>



  </div>
</section>

      {/* OUR COURSES */}
      <section className="py-24 bg-gray-800 text-white">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-teal-400 mb-4">আমাদের জনপ্রিয় কোর্স সমূহ</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            বাইটক্যাম্পে শেখার জন্য বিভিন্ন কোর্স আছে যা শিক্ষার্থীকে দক্ষতা বৃদ্ধি এবং প্রফেশনাল লেভেলে নিয়ে যাবে
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-6">
          {[
          
            {
               title: "সি++ এর হাতেখড়ি 🖥️",
                desc: "সি++ এর হাতেখড়ি হোক বাইটক্যাম্প এর সাথে, সি++ শিখে নিজের স্কিল তাকে তৈরী করো অন্য লেভেলে ।",
                 link: "/begineer-course",
                  img: "course.png" 
                },
            { title: "Basics of Competitive Programming 🖥️",
               desc: "C প্রোগ্রামিং থেকে শুরু করে C++ এর advanced concepts এবং Data Structures and Algorithms (DSA) শিখুন।",
                link: "/main-course-details",
                 img: "ByteCamp logo.jpg" },
          ].map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-gray-900 rounded-3xl shadow-xl border border-gray-700 overflow-hidden hover:border-teal-400 transition-all"
            >
              <div className="h-48 w-full relative">
                <Image src={course.img} alt={course.title} fill className="object-cover" />
              </div>
              <div className="p-6">
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

      {/* BYTECAMP EXCLUSIVE BATCH */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-teal-300 mb-4">ByteCamp Exclusive Batch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            এই batch-এ থাকবে প্রফেশনাল guidance, personal mentorship এবং career advancement।
            এখানে শুধু আমদের CP কোর্স  এর শেরা ছাত্ররা সুজক পাবে |
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {[
            { icon: <Heart className="w-10 h-10 mx-auto text-teal-400 mb-2" />, title: "1:1 Personal Mentorship 🧑‍💻", desc: "Mentors তোমার সাথে সরাসরি যুক্ত থাকবেন, problem solving এবং career guidance-এর জন্য।" },
            // { icon: <FileText className="w-10 h-10 mx-auto text-teal-400 mb-2" />, title: "CV / Resume Guidance✍🏻", desc: "Professional CV বা Resume তৈরি করা এবং apply করার সম্পূর্ণ নির্দেশিকা।" },
            { icon: <Rocket className="w-10 h-10 mx-auto text-teal-400 mb-2" />, title: "Problem Solving Challenges🔥", desc: "Mentors বিভিন্ন challenge এবং practice opportunities দিয়ে তোমার problem solving দক্ষতা বাড়াবে।" },
            { icon: <Trophy className="w-10 h-10 mx-auto text-teal-400 mb-2" />, title: "Job Placement Guidance🧑🏻‍🤝‍🧑🏻", desc: "Job-ready হওয়ার জন্য mentors team তোমাকে career advice এবং interview preparation দেবে।" },
            { icon: <Award className="w-10 h-10 mx-auto text-teal-400 mb-2" />, title: "Your Award 🏆", desc: "ByteCamp Exclusive Batch এর যাত্রা শেষ হলে আপনাকে আমাদের থেকে Certificate দেওয়া হবে ।" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 hover:border-teal-400 transition-all text-center"
            >
              {item.icon}
              <h3 className="text-xl font-bold text-teal-300 mb-1">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>



<section className="py-24 bg-gray-900 text-white">
   <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-teal-400 mb-4">প্রতিষ্ঠাতার কিছু কথা
</h2>
          
        </div>
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    
    {/* LEFT: Founder Image */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-center"
    >
      <Image
        src="mesbah.jpeg" // founder image path
        alt="Mahmud - COO-Founder"
        width={280}
        height={500}
        className="rounded-3xl shadow-xl border-4 border-teal-400"
      />
    </motion.div>

    {/* RIGHT: Founder Text */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-center md:text-left"
    >
   
      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
   "আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি ওয়া বারাকাতুহু।

শিক্ষা মানুষের জীবন গঠনের মূল ভিত্তি—এই বিশ্বাসকে সামনে রেখে বাইটক্যাম্প  শিক্ষার্থীদের একাডেমিক উন্নয়নকে কেন্দ্র করে কাজ করছে।

Class 6 থেকে Class 12 পর্যন্ত শিক্ষার্থীদের জন্য আমরা স্কুল ও বোর্ডভিত্তিক পাঠ্যসূচি অনুযায়ী সহজ, বোধগম্য ও কার্যকর একাডেমিক সহায়তা প্রদান করি—যাতে তারা আত্মবিশ্বাসের সাথে পড়াশোনা করে ভালো ফল অর্জন করতে পারে।

একাডেমিক পড়াশোনার পাশাপাশি, বাইটক্যাম্প -এ রয়েছে একটি আলাদা Skill Development ক্যাটাগরি, যেখানে শিক্ষার্থীরা ভবিষ্যতের জন্য প্রয়োজনীয় দক্ষতা গড়ে তুলতে পারবে (ইনশাআল্লাহ)।

বাইটক্যাম্প -এর সঙ্গে থাকার জন্য আপনাদের আন্তরিক ধন্যবাদ।
আমাদের জন্য দোয়া করবেন, যেন আমরা শিক্ষার্থীদের জন্য আরও ভালো কিছু করতে পারি।"
  </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">

      </p>
      <p className="text-gray-100 italic mb-6">
        –S M Mesbah Uddin Yusuf
      </p>
     <p className="text-gray-400 italic mb-5">
        Founder of ByteCamp
      </p>
    </motion.div>

  </div>
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
