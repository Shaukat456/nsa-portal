"use client";

import React, { useState, useEffect, useRef } from "react";

const NSAScrollReveal = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getText = () => {
    if (scrollProgress < 0.2) return "NSA";
    if (scrollProgress < 0.4) return "Notifying";
    if (scrollProgress < 0.7) return "Notifying Stories";
    return "Notifying Stories Around";
  };

  const getTextColor = () => {
    if (scrollProgress < 0.2) return "text-orange-500";
    if (scrollProgress < 0.4) return "text-white";
    if (scrollProgress < 0.7) return "text-yellow-400";
    return "text-white";
  };

  useEffect(() => {
    if (backgroundRef.current) {
      backgroundRef.current.style.transform = `translateY(${
        scrollProgress * 100
      }px)`;
    }
  }, [scrollProgress]);

  return (
    <div className="relative min-h-[300vh] overflow-hidden">
      {/* Parallax Background Layers */}
      <div
        ref={backgroundRef}
        className="fixed inset-0 z-0 bg-gradient-to-b from-black via-orange-900 to-yellow-900 opacity-50"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.5s ease-out",
        }}
      />

      {/* Text Container */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h1
          className={`
            text-7xl font-bold text-center 
            transition-all duration-1000 ease-in-out
            ${getTextColor()}
            ${scrollProgress > 0 ? "animate-pulse" : ""}
          `}
          style={{
            textShadow: "0 0 20px rgba(255,255,255,0.5)",
            opacity: scrollProgress > 0 ? 1 : 0,
            transform: `scale(${1 + scrollProgress * 0.2})`,
          }}
        >
          {getText()}
        </h1>
      </div>

      {/* Additional subtle background details */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,165,0,0.1), transparent 70%)",
          opacity: scrollProgress,
        }}
      />
    </div>
  );
};

export default NSAScrollReveal;
