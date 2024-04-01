"use client";

import { motion } from "framer-motion";

interface TransitionOverlayProps {
  isAnimating: boolean;
}

const TransitionOverlay: React.FC<TransitionOverlayProps> = ({
  isAnimating,
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: "#020817", // Dark background color to match your codebase
      }}
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={{
        clipPath: isAnimating
          ? "circle(150% at 50% 50%)"
          : "circle(0% at 50% 50%)",
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
    >
      <motion.div
        className="text-4xl font-bold"
        style={{
          color: "#00FFFF",
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isAnimating ? 1 : 0,
          scale: isAnimating ? 1 : 0.5,
          transition: { delay: 0.2, duration: 0.5 },
        }}
      >
        Wait bro xD
      </motion.div>
    </motion.div>
  );
};

export default TransitionOverlay;
