import { motion } from "framer-motion";

interface DividerProps {
  className?: string;
}

export const Divider = ({ className = "" }: DividerProps) => {
  return (
    <div
      className={`relative flex items-center justify-center py-8 ${className}`}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 180 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute w-4 h-4 bg-blue-500 rounded-full transform rotate-45"
      />
    </div>
  );
};
