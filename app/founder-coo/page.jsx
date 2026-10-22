"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  X,
  Rocket,
  Github,
  Linkedin,
  Facebook,
  ExternalLink,
} from "lucide-react";

export default function TeamPage() {
  const [selected, setSelected] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const team = [
    {
      name: "S M Mesbah Uddin Yusuf",
      role: "Founder & CEO",
      bio: "মেসবাহ বাইটক্যাম্পের প্রতিষ্ঠাতা ও প্রধান নির্বাহী কর্মকর্তা। তিনি বর্তমানে ইসলামিক আরবি বিশ্ববিদ্যালয়ে পড়াশোনা করছেন। ছয় বছরেরও বেশি সময় ধরে শিক্ষা ও শিক্ষাদানের অভিজ্ঞতা রয়েছে তাঁর। সবার জন্য কম খরচে মানসম্মত পরীক্ষার প্রস্তুতি সহজলভ্য করার লক্ষ্য নিয়ে তিনি বাইটক্যাম্প প্রতিষ্ঠা করেছেন।",
      image: "/m1.png",
      facebook: "https://www.facebook.com/smmesbah.uddin.14",
      linkedin: "https://linkedin.com",
      github: "https://github.com/ByteCamp-BD",
    },
    {
      name: "Mahmudul Hasan",
      role: "Co-Founder & COO",
      bio: "মাহমুদুল হাসান বাইটক্যাম্পের সহ-প্রতিষ্ঠাতা ও চিফ অপারেটিং অফিসার। তিনি একজন কম্পেটিটিভ প্রোগ্রামার এবং Flutter ডেভেলপার। বর্তমানে নবম শ্রেণিতে অধ্যয়নরত। প্রযুক্তি, সফটওয়্যার ডেভেলপমেন্ট এবং সমস্যা সমাধানের প্রতি আগ্রহ থেকে তিনি বাইটক্যাম্পের প্রযুক্তিগত উন্নয়ন ও কার্যক্রম পরিচালনায় অবদান রাখছেন।",
      image: "/h1.png",
      facebook: "https://www.facebook.com/dev.hasan0007",
      linkedin: "https://linkedin.com",
      github: "https://github.com/mahmudulhasan-app",
    },
  ];

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setSelected(null);
        setActiveImage(null);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (selected || activeImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected, activeImage]);

  const socialLinks = [
    {
      icon: Facebook,
      key: "facebook",
      label: "Facebook",
      color: "hover:bg-blue-500/15 hover:text-blue-400",
    },
    {
      icon: Github,
      key: "github",
      label: "GitHub",
      color: "hover:bg-white/10 hover:text-white",
    },
    {
      icon: Linkedin,
      key: "linkedin",
      label: "LinkedIn",
      color: "hover:bg-sky-500/15 hover:text-sky-400",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080B16] px-5 py-20 text-white sm:px-8 lg:px-12">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[140px]" />

        <div className="absolute -right-40 top-[35%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto mb-20 max-w-3xl text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-sm text-blue-300">
          <Rocket size={16} />
          The People Behind ByteCamp
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
          Our{"  "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Leadership {" "}
          </span> 
         
          <span className="text-white">Team</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
          Meet the people behind ByteCamp — building opportunities,
          developing skills, and making quality education accessible.
        </p>

        <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
      </motion.header>

      {/* Team */}
      <section className="relative z-10 mx-auto max-w-6xl space-y-20">
        {team.map((member, index) => {
          const isActive = activeImage === member.name;

          return (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              className={`flex flex-col items-center gap-10 lg:gap-14 ${
                index % 2 !== 0
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              }`}
            >
              {/* Image Card */}
              <motion.button
                type="button"
                aria-label={`Zoom ${member.name}'s photo`}
                aria-pressed={isActive}
                onClick={() => {
                  setActiveImage(member.name);
                  setSelected(null);
                }}
                whileTap={{ scale: 0.97 }}
                className={`group relative isolate h-[320px] w-full max-w-[320px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border bg-[#10182B] text-left outline-none transition-all duration-500 focus-visible:ring-2 focus-visible:ring-blue-400 sm:h-[390px] sm:max-w-[340px] lg:h-[420px] lg:max-w-[360px] ${
                  isActive
                    ? "border-blue-400 shadow-[0_0_45px_rgba(37,99,235,0.4)]"
                    : "border-white/10 shadow-2xl hover:border-blue-400/60 hover:shadow-[0_0_35px_rgba(37,99,235,0.2)]"
                }`}
              >
                {/* Image */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: isActive ? 1.2 : 1,
                  }}
                  whileHover={{
                    scale: isActive ? 1.25 : 1.1,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 340px, 360px"
                    className="object-cover object-center"
                    priority={index === 0}
                  />
                </motion.div>

                {/* Blue overlay */}
                <motion.div
                  className="absolute inset-0 bg-blue-600/45"
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  whileHover={{
                    opacity: isActive ? 1 : 0.42,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Blue tint gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-800/10 to-cyan-400/20"
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  whileHover={{
                    opacity: isActive ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Blue frame glow */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-blue-300 shadow-[inset_0_0_45px_rgba(59,130,246,0.65)]"
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                  transition={{ duration: 0.35 }}
                />

                {/* Top badge */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  BYTECAMP / 0{index + 1}
                </div>

                {/* Bottom text */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <motion.div
                    initial={false}
                    animate={{
                      y: isActive ? 0 : 8,
                    }}
                    whileHover={{
                      y: 0,
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      {member.role}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                      {member.name}
                    </h3>

                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white">
                      {isActive ? "Blue Effect Active" : "Click to Explore"}
                      <ArrowRight
                        size={17}
                        className={isActive ? "rotate-90" : ""}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.button>

              {/* Information */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  {member.role}
                </div>

                <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {member.name}
                </h2>

                <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300 lg:mx-0" />

                <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">
                  {member.bio}
                </p>

                {/* Social icons */}
                <div className="mt-7 flex justify-center gap-3 lg:justify-start">
                  {socialLinks.map(({ icon: Icon, key, label, color }) => (
                    <a
                      key={key}
                      href={member[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on ${label}`}
                      className={`rounded-xl border border-white/10 bg-white/[0.04] p-3.5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 ${color}`}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>

                {/* View profile */}
                <motion.button
                  type="button"
                  onClick={() => {
                    setSelected(member);
                    setActiveImage(null);
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative mt-8 inline-flex items-center gap-3 overflow-hidden rounded-xl border border-blue-400/30 bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-500 hover:shadow-blue-500/20"
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative">View Full Profile</span>

                  <ArrowRight
                    size={18}
                    className="relative transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </div>
            </motion.article>
          );
        })}
      </section>

      {/* Bottom Section */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto mt-24 max-w-5xl overflow-hidden rounded-3xl border border-blue-400/15 bg-gradient-to-br from-blue-500/[0.10] via-[#10172A] to-cyan-500/[0.05] px-6 py-12 text-center sm:px-12"
      >
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[90px]" />

        <div className="relative">
          <Rocket size={30} className="mx-auto mb-5 text-cyan-300" />

          <h2 className="text-2xl font-bold sm:text-3xl">
           Let's build your dreams and career without any obstacles.

          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Empowering learners with knowledge, technology, and opportunities
            to grow beyond boundaries.
          </p>

          <p className="mt-6 text-sm font-semibold tracking-wide text-cyan-300">
            Learn. Build. Grow.
          </p>
        </div>
      </motion.section>

      {/* Profile Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelected(null);
              }
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="profile-name"
              className="relative my-auto w-full max-w-lg overflow-hidden rounded-3xl border border-blue-400/20 bg-[#0D1324] shadow-2xl shadow-blue-950/40"
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
            >
              {/* Modal banner */}
              <div className="relative h-36 overflow-hidden bg-gradient-to-br from-blue-700/50 via-indigo-600/30 to-cyan-500/30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.3),transparent_55%)]" />

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close profile"
                  className="absolute right-4 top-4 rounded-xl border border-white/15 bg-black/30 p-2.5 text-white transition hover:bg-red-500/80"
                >
                  <X size={19} />
                </button>

                <div className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
                  ByteCamp Leadership
                </div>
              </div>

              {/* Modal body */}
              <div className="px-6 pb-8 sm:px-8">
                <div className="relative -mt-14 mb-5 h-28 w-28 overflow-hidden rounded-2xl border-4 border-[#0D1324] bg-[#17213A] shadow-xl shadow-blue-950/40">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>

                <h2
                  id="profile-name"
                  className="text-2xl font-bold sm:text-3xl"
                >
                  {selected.name}
                </h2>

                <p className="mt-2 text-sm font-semibold text-blue-300">
                  {selected.role}
                </p>

                <p className="mt-5 text-sm leading-8 text-slate-400">
                  {selected.bio}
                </p>

                <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                  {socialLinks.map(({ icon: Icon, key, label, color }) => (
                    <a
                      key={key}
                      href={selected[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300 transition ${color}`}
                    >
                      <Icon size={17} />
                      {label}
                      <ExternalLink size={13} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image zoom viewer */}
      <AnimatePresence>
        {activeImage !== null && (
          <motion.div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-[#020617]/95 p-5 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setActiveImage(null);
              }
            }}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close zoomed image"
              className="absolute right-5 top-5 z-20 rounded-xl border border-blue-300/30 bg-blue-500/15 p-3 text-white transition hover:bg-blue-500/30"
            >
              <X size={22} />
            </button>

            {team
              .filter((member) => member.name === activeImage)
              .map((member) => (
                <motion.div
                  key={member.name}
                  className="relative h-[75vh] max-h-[720px] w-full max-w-[520px] overflow-hidden rounded-2xl border border-blue-400/50 shadow-[0_0_70px_rgba(37,99,235,0.25)]"
                  initial={{ scale: 0.75, y: 25 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.85, y: 20 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 520px"
                    className="object-contain"
                    priority
                  />

                  {/* Strong blue effect */}
                  <div className="pointer-events-none absolute inset-0 bg-blue-600/25 mix-blend-screen" />

                  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_70px_rgba(37,99,235,0.6)]" />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-950/95 via-blue-950/50 to-transparent p-6 pt-20">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      {member.role}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      {member.name}
                    </h2>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}