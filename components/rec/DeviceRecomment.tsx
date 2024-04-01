"use client";

import React, { useState, useEffect } from "react";
import { Laptop2, ArrowRight } from "lucide-react";

export const DeviceRecommendation = () => {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShow(false), 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black 
      ${fadeOut ? "animate-fadeOut" : "animate-fadeIn"}`}
    >
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <Laptop2
            className="w-16 h-16 text-white animate-float"
            strokeWidth={1.5}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl text-white font-light">
            For the best experience
          </h1>
          <div className="flex items-center justify-center space-x-3 text-gray-300">
            <span>Please open on laptop</span>
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};
