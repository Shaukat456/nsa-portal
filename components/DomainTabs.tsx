"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

const domains = {
  Excom: {
    name: "Excom",
    description: "Excom",
  },
  Head: {
    name: "Head",
    description: "Head",
  },
  Member: {
    name: "Core",
    description: "Core",
  },
};

interface TabsProps {
  activeDomain: string;
  onDomainChange: (domain: string) => void;
}

export const DomainTabs = ({ activeDomain, onDomainChange }: TabsProps) => {
  return (
    <div className="flex justify-center mb-12 px-4 sm:px-0">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-1 flex flex-wrap space-x-1 sm:space-x-1">
        {Object.entries(domains).map(([key, domain]) => (
          <button
            key={key}
            onClick={() => onDomainChange(key)}
            className={clsx(
              "relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 border",
              activeDomain === key
                ? "text-white border-white"
                : "text-white/60 hover:text-white border-transparent hover:border-white/60"
            )}
          >
            {activeDomain === key && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white/10"
                style={{ borderRadius: 8 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{domain.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
