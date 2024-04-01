import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NSALoader = ({
  onLoadComplete,
  routeName,
}: {
  onLoadComplete: () => void;
  routeName: string;
}) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const totalStages = 4; // 3 for individual letters + 1 for full route name
    if (currentStage < totalStages) {
      const timer = setTimeout(() => {
        setCurrentStage((prev) => prev + 1);
      }, 1000); // Adjust timing as needed
      return () => clearTimeout(timer);
    } else {
      const completeTimer = setTimeout(() => {
        setIsLoading(false);
        onLoadComplete();
      }, 1000);
      return () => clearTimeout(completeTimer);
    }
  }, [currentStage, onLoadComplete]);

  // Loading progress effect
  const LoadingProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 90 ? 0 : prev + Math.random() * 10));
      }, 300);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-2 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.5 }}
          className="h-full bg-white/50 rounded-full"
        />
      </div>
    );
  };

  // const arrowVariants = {
  //   initial: {
  //     pathLength: 0,
  //     opacity: 0,
  //   },
  //   animate: {
  //     pathLength: 1,
  //     opacity: 1,
  //     transition: {
  //       duration: 2,
  //       repeat: Infinity,
  //       repeatType: "loop",
  //       ease: "easeInOut",
  //     },
  //   },
  // };

  const loaderVariants = {
    initial: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={loaderVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
        >
          <div className="relative z-10 flex items-center justify-center flex-col">
            <div className="flex space-x-4 text-6xl sm:text-8xl md:text-9xl font-bold mt-5">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentStage >= 3 ? 1 : 0,
                  transition: { duration: 0.5 },
                }}
                className={`text-white ${
                  currentStage >= 3 ? "opacity-100" : "opacity-20"
                }`}
              >
                {routeName}
              </motion.span>
            </div>

            {/* Loading Progress */}
            <LoadingProgress />

            {/* Cool Curving Arrow Animation */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-10 w-10 mt-10 text-white"
            >
              <motion.path
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10H4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                // variants={arrowVariants}
                initial="initial"
                animate="animate"
              />
            </motion.svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NSALoader;
