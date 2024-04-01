import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { excomMembers } from "@/data/team";
import { Card3D } from "../ui/Card3d";
import { TextGenerateEffectDemo } from "../NsaAbout";

export default function ExcomMembersParallax() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();

  // Define the opacity for the background image based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative min-h-screen bg-[#020817]">
      {/* Background Image */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/nsabg.jpg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-8xl font-bold text-white drop-shadow-lg">
            NSA FAM
          </h1>
        </div>
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 sticky top-0 z-20 bg-gradient-to-b from-[#020817] via-[#020817] to-transparent"
      >
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
          Excom Members
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto px-4 mt-4">
          Meet our Executive Committee, the visionary leaders driving our
          success
        </p>
      </motion.header>

      {/* Member Cards */}
      <div className="relative z-10 py-20">
        {excomMembers.map((member, index) => (
          <Card3D key={member.id}>
            <motion.section
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="min-h-screen flex items-center justify-center py-20"
            >
              <motion.div
                className="max-w-4xl mx-auto p-8 rounded-3xl shadow-2xl backdrop-blur-lg bg-white/5 border border-white/10"
                whileHover={{ scale: 1.02 }}
                onClick={() =>
                  setExpandedCard(expandedCard === member.id ? null : member.id)
                }
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <motion.div
                    className="w-64 h-64 relative overflow-hidden rounded-2xl ring-4 ring-blue-500/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                      priority
                    />
                  </motion.div>

                  <div className="flex-1 text-center md:text-left">
                    <motion.h2
                      className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400"
                      whileHover={{ scale: 1.05 }}
                    >
                      {member.name}
                    </motion.h2>
                    <p className="text-2xl text-gray-300 mt-2">{member.role}</p>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: expandedCard === member.id ? "auto" : 0,
                        opacity: expandedCard === member.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-lg text-gray-300 mt-4">
                        {member.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.section>
          </Card3D>
        ))}
      </div>

      {/* Ensure background image is fully visible after last card */}
      <div className="h-screen relative z-10 flex flex-col items-center justify-center bg-[#020817]">
        <div className="max-w-3xl px-8 py-12 bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl text-center">
          <blockquote className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400  to-blue-500">
            <TextGenerateEffectDemo />
          </blockquote>
        </div>
      </div>
    </div>
  );
}
