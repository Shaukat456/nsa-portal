// components/ScrollHint.tsx

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollHint: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Animation settings for ScrollHint
  const hintAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: [0, 1, 0],
      y: [0, 20, 0],
      transition: {
        opacity: {
          duration: 1,
          times: [0, 0.5, 1],
        },
        y: {
          duration: 1,
          times: [0, 0.5, 1],
        },
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  // Timeout to hide scroll hint after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-50 flex justify-center items-center">
      {isVisible && (
        <motion.div
          className="flex space-y-3"
          initial="initial"
          animate="animate"
        >
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              variants={hintAnimation}
              className="w-8 h-8 bg-white rounded-full"
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ScrollHint;
