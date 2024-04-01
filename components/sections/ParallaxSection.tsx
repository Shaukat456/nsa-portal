"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ParallaxSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  offset: number;
}

export const ParallaxSection = ({
  title,
  icon,
  children,
  offset,
}: ParallaxSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ y: offset }}
      className="relative z-10 mb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
              {icon}
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
