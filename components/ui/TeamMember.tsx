"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { TeamMember as TeamMemberType } from "../../data/team";
import me from "../../public/me.jpg";
interface TeamMemberProps extends TeamMemberType {
  delay: number;
}

export const TeamMember = ({ name, role, image, delay }: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-105">
        <div className="relative w-full h-64">
          <Image
            src={image ? image : me.src}
            alt={name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white text-xl font-bold">{name}</h3>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};
