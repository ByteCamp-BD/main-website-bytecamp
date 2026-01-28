"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamPage() {
  const team = [
    {
      name: "S M Mesbah Uddin Yusuf",
      role: "Founder & CEO",
      bio: `মেসবাহ হলেন ByteCamp এর পরিচালক। তিনি বর্তমানে ইসলামিক আরবি বিশ্ববিদ্যালয়ে পড়াশোনা করছেন। 
      মেসবাহের ৬ বছরের বেশি শিক্ষা ও শিক্ষাদানের অভিজ্ঞতা রয়েছে। তিনি ByteCamp প্রতিষ্ঠা করেছেন যাতে সবার জন্য কম খরচে পরীক্ষার প্রস্তুতি সহজলভ্য করা যায়।`,
      image: "/mesbah.jpeg",
    },
    {
      name: "Mahmudul Hasan",
      role: "Co-founder & COO",
      bio: `মাহমুদ হলেন ByteCamp এর সহ-পরিচালক। তিনি বর্তমানে নবম শ্রেণির শিক্ষার্থী, তবে কম্পেটিটিভ প্রোগ্রামিং-এ সক্রিয়।
       আগেও তিনি Flutter-এ কাজ করেছেন এবং বহু শিক্ষার্থীকে প্রোগ্রামিং শেখানোর অভিজ্ঞতা রয়েছে।`,
      image: "/mypic.jpg",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-[#0F1123] min-h-screen text-white py-16 px-6">
      <h1 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h1>
      <motion.div
        className="max-w-7xl mx-auto space-y-16"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {team.map((member, idx) => (
          <motion.div
            key={member.name}
            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16`}
            variants={item}
          >
            <motion.div
              className={`relative w-64 h-64 lg:w-72 lg:h-72 rounded-xl overflow-hidden shadow-xl ${
                idx % 2 !== 0 ? "lg:order-2" : ""
              }`}
              whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 3 : -3 }}
            >
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </motion.div>
            <motion.div
              className="flex-1 space-y-4 lg:text-left text-center"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <p className="text-purple-500 font-medium">{member.role}</p>
              <p className="text-gray-300">{member.bio}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
