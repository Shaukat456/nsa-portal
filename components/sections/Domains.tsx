"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { DomainTabs } from "../../components/DomainTabs";
import ParallaxFooter from "../footer";

export function Domains() {
  const [activeDomain, setActiveDomain] = useState("IT");

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-cyan-900 pt-12 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Our Organization
            </h1>
            <p className="text-xl text-blue-200">
              Explore our teams and their structure
            </p>
          </motion.div>

          <DomainTabs
            activeDomain={activeDomain}
            onDomainChange={setActiveDomain}
          />

          {/* <DomainView domain={activeDomain} /> */}
        </div>
        <ParallaxFooter />
      </div>
    </>
  );
}
