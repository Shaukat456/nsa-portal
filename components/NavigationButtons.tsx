"use client";

import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface NavigationButtonsProps {
  onNavigate: (href: string) => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onNavigate,
}) => {
  const navItems = [
    { href: "/Domains", label: "Domains" },
    { href: "/About", label: "About" },
  ];

  return (
    <motion.div
      className="fixed bottom-8 left-0 right-0 flex justify-center space-x-6 z-40"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
    >
      {navItems.map((item, index) => (
        <motion.button
          key={item.href}
          onClick={() => onNavigate(item.href)}
          className="px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-500 backdrop-blur-sm shadow-lg text-lg font-semibold"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1 + index * 0.2,
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {item.label}
        </motion.button>
      ))}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="p-4 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-500 backdrop-blur-sm shadow-lg"
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
};

export default NavigationButtons;
