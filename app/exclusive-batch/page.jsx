"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";
import { Bricolage_Grotesque, Hind_Siliguri } from "next/font/google";
import { Code, Users, Trophy, MessageSquare, Video, BookOpen, Menu, X, ChevronDown, Check, MousePointerClick } from "lucide-react";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["600", "800"], display: "swap" });
const body = Hind_Siliguri({ subsets: ["bengali", "latin"], weight: ["400", "500", "600"], display: "swap" });

/* ---------- DATA ---------- */

const CODE = `int main() {
  sieve(1000000);
  long long ans = 0;
  for (int p : primes) ans += p;
  cout << ans;
}`;

const verdicts = [
  { verdict: "Wrong Answer", detail: "test 3", cls: "text-red-400 bg-red-500/10 border-red-500/30" },
  { verdict: "Time Limit Exceeded", detail: "test 7", cls: "text-amber-300 bg-amber-500/10 border-amber-500/30" },
  { verdict: "Accepted", detail: "all tests passed", cls: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30" },
];

const features = [
  { icon: Video, title: "20+ ঘণ্টার রেকর্ডেড ক্লাস", desc: "সুসংগঠিত ভিডিও, নিজের গতিতে বারবার দেখে শেখা যাবে।" },
  { icon: MessageSquare, title: "প্রতিদিন লাইভ সাপোর্ট", desc: "আটকে গেলে একই দিনে লাইভ সেশনে কনসেপ্ট পরিষ্কার করুন।" },
  { icon: Users, title: "গ্রুপ ও 1:1 মেন্টরশিপ", desc: "অভিজ্ঞ মেন্টরের কাছ থেকে সরাসরি গাইডলাইন ও ফিডব্যাক।" },
  { icon: BookOpen, title: "ধাপে ধাপে লার্নিং পাথ", desc: "কোথা থেকে শুরু, এরপর কী — পুরো কারিকুলাম আগে থেকেই সাজানো।" },
  { icon: Code, title: "রিয়েল প্রজেক্ট ও অ্যাসাইনমেন্ট", desc: "প্রতি সপ্তাহে প্রব্লেম সেট, যাতে শেখা হাতে-কলমে পাকা হয়।" },
  { icon: Trophy, title: "কমপ্লিশন সার্টিফিকেট", desc: "কোর্স শেষে পাবেন ByteCamp-এর অফিসিয়াল সার্টিফিকেট।" },
];

const roadmap = [
  { title: "Selection Contest", desc: "একটি কনটেস্টের মাধ্যমে ব্যাচের জন্য শিক্ষার্থী বাছাই।" },
  { title: "Kickoff & Onboarding", desc: "Programming ও modern tech-এর পরিচিতি, মেন্টর ও গ্রুপের সাথে দেখা।" },
  { title: "Foundation Sessions", desc: "Problem-solving ও algorithmic thinking-এর ভিত্তি তৈরি।" },
  { title: "Regular Practice & Workshops", desc: "প্রতিদিন প্রব্লেম সল্ভিং, সাথে DS ও optimization techniques-এর workshop।" },
  { title: "Contest Preparation", desc: "দেশি-বিদেশি কনটেস্টের প্রস্তুতি, পার্সোনাল মেন্টরের গাইডলাইনসহ।" },
  { title: "Celebration", desc: "অভিজ্ঞতা শেয়ার, সার্টিফিকেট — আর 2-Star Coder হওয়ার লক্ষ্য পূরণ।", final: true },
];

const curriculum = [
  { title: "C++ STL (Standard Template Library)", content: ["Pair, Tuple, String, Vector & Deque", "Map, Set, Multiset & Priority Queue", "Complex Structure of Vector, Map, Set, Multiset & Priority Queue"] },
  { title: "Data Structure", content: ["Array & 2D Array", "Linked List"] },
  { title: "Binary Tree", content: ["Basics of Tree", "Binary Tree Traversals (Inorder, Preorder, Postorder)", "Binary Search Tree Operations"] },
  { title: "Basic Math & Number Theory", content: ["Prime Numbers & Sieve of Eratosthenes", "Greatest Common Divisor (GCD) & Least Common Multiple (LCM)"] },
  { title: "Binary Search Tree", content: ["Insertion, Deletion & Searching in BST", "Balanced BST Concepts"] },
];

const row1 = ["C++ STL", "Vector", "Map & Set", "Priority Queue", "Linked List", "Binary Tree"];
const row2 = ["BST", "Sieve of Eratosthenes", "GCD & LCM", "Number Theory", "Problem Solving", "Contest Prep"];

const symbols = [
  { s: "{ }", l: "5%", t: "24%", d: 7 },
  { s: "</>", l: "91%", t: "16%", d: 9 },
  { s: "O(n)", l: "3%", t: "70%", d: 8 },
  { s: "#include", l: "80%", t: "74%", d: 10 },
  { s: "&&", l: "47%", t: "9%", d: 6 },
  { s: "[ ]", l: "94%", t: "46%", d: 8 },
];

const ease = [0.22, 1, 0.36, 1];

/* ---------- ANIMATION HELPERS ---------- */

/* words slide up out of a mask, one after another */
function Words({ text, className = "", delay = 0 }) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: delay + i * 0.07, ease }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* card leans toward the cursor */
function Tilt({ children, max = 10 }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 140, damping: 14 });
  const sry = useSpring(ry, { stiffness: 140, damping: 14 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * max * 2);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * max * 2);
  };
  const reset = () => { rx.set(0); ry.set(0); };
  return (
    <motion.div onMouseMove={onMove} onMouseLeave={reset} style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}>
      {children}
    </motion.div>
  );
}

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, reduce]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* card with cursor glow and a light sweep on hover */
function Spot({ children, className = "" }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div onMouseMove={onMove} className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D1016] transition-colors duration-300 hover:border-blue-400/40 ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(340px circle at var(--x) var(--y), rgba(59,130,246,.22), transparent 60%)" }}
      />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px -translate-x-full bg-gradient-to-r from-transparent via-blue-300 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

/* ---------- NAVBAR ---------- */

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const link = "relative text-sm font-medium text-slate-300 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-blue-400 rounded after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl"
    >
      <motion.span style={{ scaleX: bar, originX: 0 }} className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500" aria-hidden />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/ByteCamp logo.jpg" alt="ByteCamp" width={36} height={36} className="rounded-md" />
          <span className={`${display.className} text-lg font-extrabold text-white`}>ByteCamp</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className={link}>Home</Link>
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className={`${link} flex items-center`} aria-expanded={dropdownOpen} onFocus={() => setDropdownOpen(true)}>
              Categories <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div initial={{ opacity: 0, y: 8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.97 }} transition={{ duration: 0.16 }} className="absolute left-0 top-full pt-2">
                  <div className="w-52 rounded-lg border border-white/10 bg-[#0D1016] py-1 shadow-xl">
                    <Link href="/courses?category=education" className="block px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white">Education</Link>
                    <Link href="/courses?category=skill-development" className="block px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white">Skill Development</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/about" className={link}>About</Link>
          <Link href="/exclusive-batch" className={`${link} !text-blue-300`}>Exclusive Batch</Link>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/courses" className="hidden rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400 hover:shadow-[0_0_24px_rgba(59,130,246,.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:inline-block">
            Get Started
          </Link>
          <button className="rounded-md p-2 text-white hover:bg-white/10 md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 bg-black/90 md:hidden">
            <div className="space-y-3 px-5 py-4">
              {[["/", "Home"], ["/courses?category=education", "Education"], ["/courses?category=skill-development", "Skill Development"], ["/about", "About"], ["/exclusive-batch", "Exclusive Batch"]].map(([href, label], i) => (
                <motion.div key={href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link href={href} className="block font-medium text-slate-200">{label}</Link>
                </motion.div>
              ))}
              <Link href="/courses" className="block rounded-md bg-blue-500 px-4 py-2 text-center font-semibold text-white">Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ---------- HERO PANEL: code types itself, judge answers ---------- */

function JudgePanel() {
  const reduce = useReducedMotion();
  const total = CODE.length + 10 + 60 + 60;
  const [t, setT] = useState(reduce ? total - 60 : 0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setT((x) => (x >= total ? 0 : x + 1)), 45);
    return () => clearInterval(id);
  }, [reduce, total]);

  const typed = CODE.slice(0, Math.min(t, CODE.length));
  const rows = Math.max(0, Math.min(3, Math.floor((t - CODE.length - 10) / 20) + 1));
  const typing = t < CODE.length;

  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-transparent to-cyan-500/20 blur-2xl" aria-hidden />
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0B0D13] shadow-2xl" aria-label="Example: code submitted and judged">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-cyan-400/80" />
          <span className="ml-3 text-sm text-slate-400">sum_of_primes.cpp</span>
        </div>
        <pre className="min-h-[9.5rem] overflow-x-auto px-4 py-4 font-mono text-sm leading-6 text-slate-200">
          {typed}
          <span className={`inline-block h-4 w-2 translate-y-0.5 bg-blue-400 ${typing ? "" : "animate-pulse"}`} />
        </pre>
        <ul className="min-h-[9.5rem] space-y-2 border-t border-white/10 bg-black/30 px-4 py-4">
          <AnimatePresence initial={false}>
            {verdicts.slice(0, rows).map((v, i) => (
              <motion.li
                key={v.verdict}
                initial={{ opacity: 0, x: -20, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex items-center justify-between gap-3 text-sm"
              >
                <span className="flex items-center gap-3">
                  <span className="w-6 text-slate-500">#{i + 1}</span>
                  <span className={`relative inline-flex items-center gap-1 rounded-md border px-2.5 py-1 font-semibold ${v.cls}`}>
                    {i === 2 && (
                      <>
                        <motion.span
                          className="absolute inset-0 rounded-md border border-cyan-400"
                          initial={{ scale: 1, opacity: 0.9 }}
                          animate={{ scale: 1.6, opacity: 0 }}
                          transition={{ duration: 1.1, repeat: Infinity }}
                        />
                        <Check className="h-4 w-4" />
                      </>
                    )}
                    {v.verdict}
                  </span>
                </span>
                <span className="text-slate-500">{v.detail}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}

/* ---------- ROADMAP STEP: lights up when it reaches screen centre ---------- */

function RoadStep({ step, i }) {
  const ref = useRef(null);
  const active = useInView(ref, { margin: "-45% 0px -45% 0px" });
  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease }}
      className="relative flex gap-5 pb-14 last:pb-0"
    >
      <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center">
        {active && (
          <motion.span
            className={`absolute inset-0 rounded-full border ${step.final ? "border-cyan-400" : "border-blue-400"}`}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 2.1, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
        <motion.span
          animate={{ scale: active ? 1.18 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-bold ${
            step.final
              ? "border-cyan-400 bg-cyan-500 text-black shadow-[0_0_24px_rgba(52,211,153,.6)]"
              : active
              ? "border-blue-300 bg-blue-500 text-white shadow-[0_0_22px_rgba(59,130,246,.7)]"
              : "border-blue-400/40 bg-[#12121C] text-blue-200"
          }`}
        >
          {step.final ? <Check className="h-5 w-5" /> : i + 1}
        </motion.span>
      </span>
      <div className={`pt-1.5 transition-opacity duration-500 ${active ? "opacity-100" : "opacity-50"}`}>
        <h3 className="text-lg font-semibold text-white">{step.title}</h3>
        <p className="mt-1 max-w-lg text-slate-400">{step.desc}</p>
      </div>
    </motion.li>
  );
}

/* ---------- ANIMATED CURRICULUM CARDS ---------- */

function CurriculumCard({ topic, index }) {
  const [open, setOpen] = useState(false);
  const icons = [Code, BookOpen, Trophy, Check, Users];
  const Icon = icons[index % icons.length];
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      layout
      className={`group relative h-full overflow-hidden rounded-2xl border bg-[#080F20]/90 transition-colors duration-300 ${open ? "border-blue-400/50 shadow-[0_0_35px_rgba(37,99,235,0.13)]" : "border-white/10 hover:border-blue-400/35"}`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/0 blur-3xl transition-colors duration-500 group-hover:bg-blue-500/20" />
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="relative flex w-full items-start gap-4 p-5 text-left sm:p-6"
      >
        <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${open ? "border-cyan-300/40 bg-blue-500/20 text-cyan-200 shadow-[0_0_22px_rgba(59,130,246,0.18)]" : "border-white/10 bg-white/[0.04] text-blue-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/10"}`}>
          <Icon className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="mb-2 block text-xs font-bold tracking-[0.2em] text-blue-400">MODULE {number}</span>
          <span className="block text-lg font-bold leading-snug text-white transition-colors group-hover:text-cyan-200">{topic.title}</span>
          <span className="mt-2 block text-sm text-slate-500">{topic.content.length}টি learning topic</span>
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-blue-300">
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mx-5 border-t border-white/10 sm:mx-6" />
            <ul className="space-y-3 px-5 py-5 sm:px-6">
              {topic.content.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`h-[2px] bg-gradient-to-r from-blue-500 via-cyan-300 to-transparent transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 group-hover:opacity-70"}`} />
    </motion.div>
  );
}

/* ---------- PAGE ---------- */

export default function ExclusiveBatchPage() {
  const roadRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: roadRef, offset: ["start 75%", "end 60%"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  /* page-level parallax for hero blobs */
  const { scrollY } = useScroll();
  const blobA = useTransform(scrollY, [0, 900], [0, -140]);
  const blobB = useTransform(scrollY, [0, 900], [0, 120]);

  /* cursor spotlight in hero */
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const smx = useSpring(mx, { stiffness: 80, damping: 20 });
  const smy = useSpring(my, { stiffness: 80, damping: 20 });
  const onHeroMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const heroWords1 = "Problem Solving থেকে";
  const heroWords2 = "— পথটা আমরা সাজিয়ে দিয়েছি";

  return (
    <MotionConfig reducedMotion="user">
      <main className={`${body.className} min-h-screen overflow-x-hidden bg-[#06070B] text-slate-300`}>
        <style>{`
          @keyframes marquee { to { transform: translateX(-50%); } }
          .marquee-track { animation: marquee 30s linear infinite; }
          .marquee-rev { animation-duration: 38s; animation-direction: reverse; }
          .marquee-wrap:hover .marquee-track { animation-play-state: paused; }
          @keyframes shimmer { to { background-position: 200% center; } }
          @keyframes rot { to { transform: rotate(360deg); } }
          @media (prefers-reduced-motion: reduce) { *:not(.marquee-track) { animation: none !important; transition: none !important; } }
        `}</style>
        <Navbar />

        {/* HERO */}
        <section onMouseMove={onHeroMove} className="relative px-5 pb-20 pt-28 sm:pb-24 sm:pt-32">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                maskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
              }}
            />
            <motion.div style={{ y: blobA }} className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />
            <motion.div style={{ y: blobB }} className="absolute right-0 top-64 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
            <motion.div style={{ x: smx, y: smy }} className="absolute left-0 top-0 -ml-56 -mt-56 hidden h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-3xl md:block" />
            {symbols.map((s) => (
              <motion.span
                key={s.s}
                style={{ left: s.l, top: s.t }}
                animate={{ y: [0, -26, 0], rotate: [-6, 6, -6] }}
                transition={{ duration: s.d, repeat: Infinity, ease: "easeInOut" }}
                className="absolute hidden font-mono text-lg text-blue-300/25 md:block"
              >
                {s.s}
              </motion.span>
            ))}
          </div>

          <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
            <div>
              <h1 className={`${display.className} text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl`}>
                <Words text={heroWords1} />
                <Words text={heroWords2} delay={0.45} />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
              >
                ByteCamp Exclusive Batch তাদের জন্য, যারা প্র্যাকটিক্যাল স্কিল, রিয়েল প্রজেক্ট আর পার্সোনাল মেন্টরশিপের মাধ্যমে কমপক্ষে 2-Star Coder হতে চায়।
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }} className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/courses" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/30 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_32px_rgba(59,130,246,.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300">
                    ব্যাচে জয়েন করুন
                  </Link>
                  <a href="#roadmap" className="inline-block rounded-md border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-blue-400 hover:bg-white/5">
                    রোডম্যাপ দেখুন
                  </a>
              </motion.div>

              <motion.dl initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.8 }} className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
                <div>
                  <dt className={`${display.className} text-2xl font-extrabold text-white`}><Counter to={20} suffix="+" /></dt>
                  <dd className="text-sm text-slate-500">ঘণ্টা ক্লাস</dd>
                </div>
                <div>
                  <dt className={`${display.className} text-2xl font-extrabold text-white`}>প্রতিদিন</dt>
                  <dd className="text-sm text-slate-500">লাইভ সাপোর্ট</dd>
                </div>
                <div>
                  <dt className={`${display.className} text-2xl font-extrabold text-white`}><Counter to={2} />★</dt>
                  <dd className="text-sm text-slate-500">ন্যূনতম লক্ষ্য</dd>
                </div>
              </motion.dl>
            </div>

            <motion.div initial={{ opacity: 0, y: 50, rotateX: 12 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 0.5, duration: 1, ease }}>
              <Tilt max={7}>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                  <JudgePanel />
                </motion.div>
              </Tilt>
            </motion.div>
          </div>
        </section>

        {/* MARQUEE: two rows, opposite directions, pause on hover */}
        <div className="marquee-wrap space-y-3 overflow-hidden border-y border-white/10 bg-white/[0.02] py-5" aria-hidden>
          {[{ items: row1, anim: "marquee-track" }, { items: row2, anim: "marquee-track marquee-rev" }].map((r, k) => (
            <div key={k} className={`flex w-max whitespace-nowrap ${r.anim}`}>
              {[...r.items, ...r.items, ...r.items, ...r.items].map((m, i) => (
                <span key={i} className="mr-4 shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-5 py-1.5 text-sm text-slate-300 transition-colors hover:border-blue-400/60 hover:text-white">
                  {m}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* FEATURES */}
        <section className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className={`${display.className} max-w-xl text-3xl font-extrabold text-white sm:text-4xl`}>
              <Words text="যা যা পাচ্ছেন এই ব্যাচে" />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-md text-slate-400">শুধু ভিডিও নয় — প্র্যাকটিস, সাপোর্ট আর মেন্টর, তিনটাই একসাথে।</p>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} delay={(i % 3) * 0.1}>
                  <Tilt max={5}>
                    <Spot className="h-full p-6">
                      <motion.span
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                        className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_24px_rgba(59,130,246,.6)]"
                      >
                        <Icon className="h-6 w-6" />
                      </motion.span>
                      <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                      <p className="mt-2 text-slate-400">{desc}</p>
                    </Spot>
                  </Tilt>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="border-t border-white/10 px-5 py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className={`${display.className} text-3xl font-extrabold text-white sm:text-4xl`}>
              <Words text="Selection Contest থেকে 2-Star Coder" />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-4 text-slate-400">স্ক্রল করুন — যাত্রার লাইন ধরে ধাপগুলো একে একে জ্বলে উঠবে।</p>
            </Reveal>

            <ol ref={roadRef} className="relative mt-14">
              <span className="absolute bottom-0 left-[19px] top-0 w-0.5 bg-white/10" aria-hidden />
              <motion.span
                style={{ scaleY: lineScale, originY: 0 }}
                className="absolute bottom-0 left-[19px] top-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400 shadow-[0_0_12px_rgba(59,130,246,.8)]"
                aria-hidden
              />
              {roadmap.map((step, i) => (
                <RoadStep key={step.title} step={step} i={i} />
              ))}
            </ol>
          </div>
        </section>

        {/* CURRICULUM — animated topic cards */}
        <section className="relative overflow-hidden border-t border-white/10 px-5 py-24">
          <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px]" />
          <div className="relative mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  <Code className="h-4 w-4" /> Course Curriculum
                </span>
              </Reveal>
              <h2 className={`${display.className} mt-5 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl`}>
                <Words text="কী কী শেখানো হবে" />
              </h2>
              <Reveal delay={0.15}>
                <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
                  এক নজরে দেখে নিন শেখার বিষয়গুলো। প্রতিটি কার্ডে ক্লিক করলে বিস্তারিত টপিক দেখতে পারবেন।
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {curriculum.map((topic, i) => (
                <Reveal key={topic.title} delay={(i % 3) * 0.08}>
                  <CurriculumCard topic={topic} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA: spinning light border + twinkles */}
        <section className="px-5 pb-24">
          <Reveal className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl p-px">
              <div className="absolute -inset-[100%] [animation:rot_7s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_65%,#3b82f6_85%,#67e8f9_100%)]" aria-hidden />
              <div className="relative overflow-hidden rounded-2xl bg-[#0B0A16] px-6 py-16 text-center">
                <motion.div animate={{ x: [-40, 40, -40], opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-blue-600/40 blur-3xl" aria-hidden />
                {[8, 22, 38, 61, 78, 92].map((l, i) => (
                  <motion.span
                    key={l}
                    style={{ left: `${l}%`, top: `${20 + ((i * 29) % 60)}%` }}
                    animate={{ opacity: [0, 1, 0], scale: [0.4, 1.2, 0.4] }}
                    transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.45 }}
                    className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-blue-200"
                    aria-hidden
                  />
                ))}
                <h2 className={`${display.className} relative text-3xl font-extrabold text-white sm:text-4xl`}>আপনার প্রোগ্রামিং যাত্রা এখান থেকেই শুরু</h2>
                <p className="relative mx-auto mt-4 max-w-xl text-slate-400">সিট সীমিত। এখনই জয়েন করুন, মেন্টর আর কমিউনিটির সাথে প্রতিদিন এগিয়ে যান।</p>
                <div className="relative mt-8">
                    <Link href="/courses" className="inline-block rounded-md bg-blue-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-900/30 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-[0_0_32px_rgba(59,130,246,.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200">
                      ব্যাচে জয়েন করুন
                    </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 px-5 py-12 text-slate-400">
          <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 md:grid-cols-5">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Image src="/ByteCamp logo.jpg" alt="ByteCamp" width={32} height={32} className="rounded-md" />
                <span className={`${display.className} text-xl font-extrabold text-white`}>ByteCamp</span>
              </div>
              <p>Let&apos;s build your dream and career without any obstacles.</p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Platform</h3>
              <ul className="space-y-2">
                <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
                <li><Link href="/about-us" className="hover:text-white">About us</Link></li>
                <li><Link href="/" className="hover:text-white">Home</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Our Policy</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-white">Terms &amp; Conditions</Link></li>
                <li><Link href="/refund-policy" className="hover:text-white">Refund &amp; Return Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Categories</h3>
              <ul className="space-y-2">
                <li><Link href="/courses?category=skill-development" className="hover:text-white">Skill Development</Link></li>
                <li><Link href="/courses?category=education" className="hover:text-white">Education</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Contact</h3>
              <p>bytecampskill@gmail.com</p>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-8 text-center text-slate-500">
            <p>&copy; 2026 ByteCamp. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </MotionConfig>
  );
}
