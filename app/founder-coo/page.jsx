"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, X, Rocket, Github, Linkedin, Facebook } from "lucide-react";

export default function TeamPage() {
  const [selected, setSelected] = useState(null);

  const team = [
    {
      name: "S M Mesbah Uddin Yusuf",
      role: "Founder & CEO",
      bio: " মেসবাহ হলেন বাইটক্যাম্প  এর পরিচালক। তিনি বর্তমানে ইসলামিক আরবি বিশ্ববিদ্যালয়ে পড়াশোনা করছেন।  মেসবাহের ৬ বছরের বেশি শিক্ষা ও শিক্ষাদানের অভিজ্ঞতা রয়েছে। তিনি বাইটক্যাম্প  প্রতিষ্ঠা করেছেন যাতে সবার জন্য কম খরচে পরীক্ষার প্রস্তুতি সহজলভ্য করা যায়।",
      image: "/mesbah.jpeg",
      facebook: "https://www.facebook.com/smmesbah.uddin.14",
      linkedin: "https://linkedin.com",
      github: "https://github.com/ByteCamp-BD",
    },
    {
      name: "Mahmudul Hasan",
      role: "Co-founder & COO",
      bio: "মাহমুদ হলেন বাইটক্যাম্প  এর সহ-পরিচালকমাহমুদ এবং একজন কম্পেটিটিভ প্রোগ্রামার এবং Flutter developer।  তিনি বর্তমানে নবম শ্রেণির শিক্ষার্থী |",
      image: "/mypic.jpg",
      facebook: "https://www.facebook.com/dev.hasan0007",
      linkedin: "https://linkedin.com",
      github: "https://github.com/mahmudulhasan-app",
    },
  ];

  return (
    <div className="relative bg-[#0F1123] min-h-screen text-white py-20 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-600/30 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] bg-teal-500/30 blur-[120px] rounded-full animate-pulse" />

      {/* Header */}
      <motion.h1
        className="flex items-center justify-center gap-3 text-5xl font-extrabold mb-16 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Rocket className="w-10 h-10 text-teal-400" />
        </motion.span>
        Our Leadership Team
      </motion.h1>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto space-y-20">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
          >

            {/* Image BOX (3D hover) */}
            <motion.div
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden group"
              whileHover={{
                scale: 1.08,
                rotateY: 10,
                rotateX: 5,
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-teal-400/30 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl" />

              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </motion.div>

            {/* Info */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              <h2 className="text-3xl font-bold text-teal-300">
                {member.name}
              </h2>

              <p className="text-purple-400 font-semibold">
                {member.role}
              </p>

              <p className="text-gray-300">{member.bio}</p>

              {/* 🔥 Premium Button (NO keyframes) */}
              <motion.button
                onClick={() => setSelected(member)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white overflow-hidden group bg-gradient-to-r from-purple-500 via-pink-500 to-teal-400 shadow-lg"
              >
                {/* Glow */}
                <span className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-purple-500 to-teal-400 group-hover:opacity-60 transition duration-500"></span>

                {/* Moving Shine */}
                <motion.span
                  className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12"
                  animate={{ left: ["-100%", "120%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />

                <span className="relative z-10 flex items-center gap-2">
                  View Profile
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight />
                  </motion.span>
                </span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1a1c2c] p-8 rounded-2xl max-w-lg w-full text-center relative shadow-2xl"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-red-500 p-2 rounded-full"
              >
                <X />
              </button>

              <Image
                src={selected.image}
                alt={selected.name}
                width={120}
                height={120}
                className="rounded-xl mx-auto mb-4"
              />

              <h2 className="text-2xl font-bold text-teal-300">
                {selected.name}
              </h2>

              <p className="text-purple-400 mb-4">
                {selected.role}
              </p>

              <p className="text-gray-300 mb-6">
                {selected.bio}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-6">
                {[ 
                  { icon: Facebook, link: selected.facebook, color: "hover:text-blue-500" },
                
                  { icon: Github, link: selected.github, color: "hover:text-white" },
                ].map((item, i) => (
                  <a key={i} href={item.link} target="_blank">
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      className={`text-gray-400 transition ${item.color}`}
                    >
                      <item.icon size={30} />
                    </motion.div>
                  </a>
                ))}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}