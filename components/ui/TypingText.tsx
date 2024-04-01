import { motion } from "framer-motion";

interface TypingTextProps {
  text: string;
  className?: string;
}

export const TypingText = ({ text, className = "" }: TypingTextProps) => {
  const characters = text.split("");

  return (
    <div className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.03,
            type: "spring",
            stiffness: 100,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};
