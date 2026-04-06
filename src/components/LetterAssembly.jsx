import React from "react";
import { motion } from "motion/react";

export default function LetterAssembly({ text, delay = 0 }) {
  return (
    <span className="inline-flex overflow-hidden">
      {text.split("").map((char, index) => (
        <motion.span
          key={`${text}-${index}`}
          className="inline-block"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.7,
            delay: delay + index * 0.04,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}